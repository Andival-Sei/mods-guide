import cls from './UnorderedList.module.scss';
import type { ReactNode } from 'react';

interface UnorderedListProps {
  children: ReactNode;
  className?: string;
}

const UnorderedList = (props: UnorderedListProps) => {
  const { children, className } = props;

  return <ul className={`${cls.unorderedList} ${className || ''}`}>{children}</ul>;
};

export default UnorderedList;
