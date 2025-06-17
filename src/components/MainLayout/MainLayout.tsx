import cls from './MainLayout.module.scss';
import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.tsx';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainWrapperRef.current) {
      mainWrapperRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className={cls.mainLayout}>
      <Header />
      <div ref={mainWrapperRef} className={cls.mainWrapper}>
        <div className={`${cls.contentWrapper} ${isHomePage ? cls.homePageContent : ''}`}>
          <main>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
