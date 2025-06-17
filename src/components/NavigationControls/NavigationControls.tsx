import NavigationButton from '../NavigationButton/NavigationButton';
import cls from './NavigationControls.module.scss';

interface NavigationControlsProps {
  prevPage?: {
    to: string;
    name: string;
  };
  nextPage?: {
    to: string;
    name: string;
  };
}

const NavigationControls = (props: NavigationControlsProps) => {
  const { prevPage, nextPage } = props;

  return (
    <div className={cls.navigationControls}>
      {prevPage && <NavigationButton to={prevPage.to} direction="left" pageName={prevPage.name} />}
      {nextPage && <NavigationButton to={nextPage.to} direction="right" pageName={nextPage.name} />}
    </div>
  );
};

export default NavigationControls;
