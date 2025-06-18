import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cls from './DropdownMenu.module.scss';

interface DropdownMenuProps {
  label: string;
  items: Array<{
    to: string;
    label: string;
  }>;
}

const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clear any existing timeout when component unmounts
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the menu to give user time to move to the menu
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <div
      className={cls.dropdown}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`${cls.dropdownToggle} ${isOpen ? cls.active : ''}`}>{label}</span>

      <div className={`${cls.dropdownMenu} ${isOpen ? cls.visible : ''}`}>
        {items.map((item, index) => (
          <Link key={index} to={item.to} className={cls.dropdownItem}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
