import cls from './MainLayout.module.scss';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx';

const MainLayout = () => {
  return (
    <div className={cls.mainLayout}>
      <Header />
      <div className={cls.mainWrapper}>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
