import { Link } from 'react-router-dom';
import cls from './NavigationButton.module.scss';
import { ArrowIcon } from '../icons.tsx';

interface NavigationButtonProps {
  to: string;
  direction: 'left' | 'right';
  pageName: string;
}

const NavigationButton = (props: NavigationButtonProps) => {
  const { to, direction, pageName } = props;

  return (
    <Link to={to} className={`${cls.navigationButton} ${cls[direction]}`}>
      {direction === 'left' && (
        <ArrowIcon className={`${cls.arrow} ${cls.leftArrow}`} direction="left" />
      )}
      <span className={cls.pageName}>{pageName}</span>
      {direction === 'right' && <ArrowIcon className={`${cls.arrow} ${cls.rightArrow}`} />}
    </Link>
  );
};

export default NavigationButton;
