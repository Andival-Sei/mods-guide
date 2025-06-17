import cls from './OrderedList.module.scss';
import type { ReactNode } from 'react';

interface OrderedListProps {
  children: ReactNode;
  className?: string;
}

const OrderedList = (props: OrderedListProps) => {
  const { children, className } = props;

  return <ol className={`${cls.orderedList} ${className || ''}`}>{children}</ol>;
};

export default OrderedList;
