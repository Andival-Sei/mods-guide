import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cls from './BurgerMenu.module.scss';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavLink {
  to: string;
  label: string;
  exact?: boolean;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface BurgerMenuProps {
  links: NavLink[];
}

const BurgerMenu = ({ links }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdowns([]);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
        {links.map((link, index) => {
          // Handle dropdown menu items
          if (link.isDropdown && link.dropdownItems) {
            const isDropdownOpen = openDropdowns.includes(index);
            return (
              <div key={index} className={cls.dropdownSection}>
                <div
                  className={`${cls.dropdownLabel} ${isDropdownOpen ? cls.active : ''}`}
                  onClick={() => toggleDropdown(index)}
                >
                  {link.label}
                  <span className={`${cls.dropdownArrow} ${isDropdownOpen ? cls.open : ''}`}>
                    ▼
                  </span>
                </div>
                <div className={`${cls.dropdownItems} ${isDropdownOpen ? cls.open : ''}`}>
                  {link.dropdownItems.map((item, itemIndex) => (
                    <Link
                      key={`${index}-${itemIndex}`}
                      to={item.to}
                      onClick={closeMenu}
                      className={cls.dropdownItem}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          // Handle regular links
          return link.exact ? (
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
          );
        })}
      </nav>
    </div>
  );
};

export default BurgerMenu;
