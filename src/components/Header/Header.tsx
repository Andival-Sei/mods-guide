import logoImage from '../../assets/logo.png';
import cls from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logoContainer}>
        <img src={logoImage} alt="Лого" className={cls.logo} />
        <span>Andival's Guide</span>
      </div>

      <nav className={cls.headerButtons}>
        <NavLink to="/">Главная</NavLink>
        <Link to="/">Инструкции</Link>
        <Link to="/">Изменения</Link>
        <Link to="/">Контакты</Link>
        <Link to="/">Тест линка</Link>
      </nav>
    </header>
  );
};

export default Header;
