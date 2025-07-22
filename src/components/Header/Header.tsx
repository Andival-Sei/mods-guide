import logoImage from '../../assets/logo.png';
import cls from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.tsx';

const Header = () => {
  const navLinks = [
    { to: '/', label: 'Главная', exact: true },
    {
      to: '#',
      label: 'Инструкции',
      isDropdown: true,
      dropdownItems: [
        { to: '/welcome', label: 'Знакомство' },
        { to: '/commoninstructions', label: 'Общие инструкции' },
        { to: '/preinstall', label: 'Предустановки' },
      ],
    },
    { to: '/changelog', label: 'Изменения' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={cls.header}>
      <Link to="/" className={cls.logoContainer}>
        <img src={logoImage} alt="Лого" className={cls.logo} />
        <span>Andival's Guide</span>
      </Link>

      <nav className={cls.headerButtons}>
        <NavLink to="/">Главная</NavLink>
        <DropdownMenu
          label="Инструкции"
          items={[
            { to: '/welcome', label: 'Знакомство' },
            { to: '/commoninstructions', label: '  Общие инструкции' },
            { to: '/preinstall', label: '  Предустановки' },
            { to: '/installmodspart1', label: '  Установка модов — Часть 1' },
          ]}
        />
        <Link to="/changelog">Изменения</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <BurgerMenu links={navLinks} />
    </header>
  );
};

export default Header;
