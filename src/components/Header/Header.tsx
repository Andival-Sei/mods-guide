import { useState, useEffect } from 'react';
import logoImage from '../../assets/logo.png';
import cls from './Header.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';

// Конфигурация навигации - выносим в отдельный объект для избежания дублирования
const navigationConfig = [
  { to: '/', label: 'Главная', exact: true },
  {
    to: '#',
    label: 'Инструкции',
    isDropdown: true,
    dropdownItems: [
      { to: '/welcome', label: 'Знакомство' },
      { to: '/commoninstructions', label: 'Общие инструкции' },
      { to: '/preinstall', label: 'Предустановки' },
      { to: '/installmodspart1', label: 'Установка модов — Часть 1' },
    ],
  },
  { to: '/changelog', label: 'Изменения' },
  { to: '/contacts', label: 'Контакты' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Отслеживаем скролл для добавления эффекта стекла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${cls.header} ${isScrolled ? cls.scrolled : ''}`}>
      <div className={cls.headerContent}>
        {/* Логотип с улучшенной анимацией */}
        <Link to="/" className={cls.logoContainer} aria-label="Перейти на главную страницу">
          <div className={cls.logoWrapper}>
            <img src={logoImage} alt="Логотип Andival's Guide" className={cls.logo} />
          </div>
          <span className={cls.brandName}>Andival's Guide</span>
        </Link>

        {/* Основная навигация */}
        <nav className={cls.headerNavigation} role="navigation" aria-label="Основная навигация">
          {navigationConfig.map((item, index) => {
            if (item.isDropdown && item.dropdownItems) {
              return <DropdownMenu key={index} label={item.label} items={item.dropdownItems} />;
            }

            return (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) => `${cls.navLink} ${isActive ? cls.active : ''}`}
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Мобильное меню */}
        <BurgerMenu links={navigationConfig} />
      </div>
    </header>
  );
};

export default Header;
