import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={`${cls.loader} ${className || ''}`}>
      <div className={cls.dotSpinner}>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
        <div className={cls.dotSpinner__dot}></div>
      </div>
    </div>
  );
};

export default Loader;
