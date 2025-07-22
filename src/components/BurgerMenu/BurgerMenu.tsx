import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownArrowIcon } from '../icons';
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
                  <DropdownArrowIcon
                    className={`${cls.dropdownArrow} ${isDropdownOpen ? cls.open : ''}`}
                    style={{ width: '16px', height: '16px' }}
                  />
                </div>
                <div className={`${cls.dropdownItems} ${isDropdownOpen ? cls.open : ''}`}>
                  {link.dropdownItems.map((item, itemIndex) => (
                    <NavLink
                      key={`${index}-${itemIndex}`}
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `${cls.dropdownItem} ${isActive ? cls.active : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          // Handle regular links - используем NavLink для всех ссылок
          return (
            <NavLink
              key={index}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) => `${cls.navLink} ${isActive ? cls.active : ''}`}
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default BurgerMenu;
