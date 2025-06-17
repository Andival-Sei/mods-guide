import type { FC } from 'react';
import cls from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import { ChevronIcon } from '../../components/icons.tsx';

interface HomePageProps {
  className?: string;
}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={cls.homePage}>
      <h1 className={cls.title}>
        The Elder Scrolls V: Skyrim <br />
        Anniversary Edition
      </h1>
      <p className={cls.description}>Ещё одно руководство по моддингу Скайрима.</p>

      <div className={cls.buttonWrapper}>
        <Link to="/welcome" className={cls.startBtn}>
          <span>Начать</span>
          <ChevronIcon className={cls.buttonIcon} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
