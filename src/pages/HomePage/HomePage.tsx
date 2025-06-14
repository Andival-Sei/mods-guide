import type { FC } from 'react';
import cls from './HomePage.module.scss';

interface HomePageProps {
  className?: string;
}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={cls.homePage}>
      <h1>Руководство по модификациям</h1>
    </div>
  );
};

export default HomePage;
