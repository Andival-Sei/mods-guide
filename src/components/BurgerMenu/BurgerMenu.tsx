import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cls from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  links: Array<{
    to: string;
    label: string;
    exact?: boolean;
  }>;
}

const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={cls.burgerMenuContainer}>
      <button
        className={`${cls.burgerButton} ${isOpen ? cls.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню навигации"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${cls.menuOverlay} ${isOpen ? cls.visible : ''}`} onClick={closeMenu}></div>

      <nav className={`${cls.menuContent} ${isOpen ? cls.open : ''}`}>
        {links.map((link, index) =>
          link.exact ? (
            <NavLink
              key={index}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? cls.active : '')}
            >
              {link.label}
            </NavLink>
          ) : (
            <Link key={index} to={link.to} onClick={closeMenu}>
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default BurgerMenu;
