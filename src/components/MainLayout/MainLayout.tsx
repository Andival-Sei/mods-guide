import cls from './MainLayout.module.scss';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.tsx';
import TableOfContents from '../TableOfContents/TableOfContents.tsx';
import { useTableOfContents } from '../../hooks/useTableOfContents.ts';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const { items, isVisible, isLoading } = useTableOfContents();
  const [sidebarKey, setSidebarKey] = useState(0);

  // Обновляем ключ при смене маршрута для принудительного пересоздания компонента
  useEffect(() => {
    setSidebarKey((prev: number) => prev + 1);
  }, [location.pathname]);

  useEffect(() => {
    if (mainWrapperRef.current) {
      mainWrapperRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className={cls.mainLayout}>
      <Header />
      <div ref={mainWrapperRef} className={cls.mainWrapper}>
        <div
          className={`${cls.contentWrapper} ${isHomePage ? cls.homePageContent : ''}`}
          data-content-wrapper
        >
          <main>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
      {!isHomePage && (
        <TableOfContents
          key={sidebarKey}
          items={items}
          isVisible={isVisible}
          isLoading={isLoading}
        />
      )}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
