import cls from './ListItem.module.scss';
import { Children, isValidElement, type ReactNode } from 'react';
import UnorderedList from '../UnorderedList/UnorderedList.tsx';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem = (props: ListItemProps) => {
  const { children, className } = props;

  // Проверяем, содержит ли ListItem компонент UnorderedList как прямого потомка
  const hasNestedList = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === UnorderedList
  );

  // Добавляем специальный класс, если есть вложенный список
  const itemClassName = `${cls.listItem} ${hasNestedList ? cls.hasNestedList : ''} ${className || ''}`;

  return <li className={itemClassName}>{children}</li>;
};

export default ListItem;
