import type { FC } from 'react';
import cls from './HomePage.module.scss';
import { Link } from 'react-router-dom';

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
          <svg
            className={cls.buttonIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
