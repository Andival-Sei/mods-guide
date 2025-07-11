import type { ReactNode } from 'react';
import cls from './TitleBlock.module.scss';

interface TitleBlockProps {
  title: ReactNode;
  description?: ReactNode;
}

const TitleBlock = (props: TitleBlockProps) => {
  const { title, description } = props;

  return (
    <div className={cls.titleBlock}>
      <h2 className={cls.title}>{title}</h2>
      {description && <p className={cls.description}>{description}</p>}
    </div>
  );
};

export default TitleBlock;
