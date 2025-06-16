import cls from './ListItem.module.scss';
import type { ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem = (props: ListItemProps) => {
  const { children, className } = props;

  return <li className={`${cls.listItem} ${className || ''}`}>{children}</li>;
};

export default ListItem;
