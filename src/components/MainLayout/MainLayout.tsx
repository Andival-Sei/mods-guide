import cls from './MainLayout.module.scss';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.tsx';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={cls.mainLayout}>
      <Header />
      <div className={cls.mainWrapper}>
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
