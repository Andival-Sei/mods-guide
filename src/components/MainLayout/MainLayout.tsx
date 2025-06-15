import cls from './MainLayout.module.scss';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx';

const MainLayout = () => {
  return (
    <div className={cls.mainLayout}>
      <Header />
      <div className={cls.mainWrapper}>
        <div className={cls.contentWrapper}>
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
