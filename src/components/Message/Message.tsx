import type { ReactNode } from 'react';
import cls from './Message.module.scss';
import { classNames } from '../../utilities/classNames.ts';

export type MessageType = 'notification' | 'warning';

interface MessageProps {
  children: ReactNode;
  type: MessageType;
}

const Message = (props: MessageProps) => {
  const { children, type } = props;

  const labels = {
    notification: 'Извещение',
    warning: 'Предупреждение',
  };

  return (
    <div className={classNames(cls.message, { [cls[type]]: true })}>
      <div className={cls.label}>{labels[type]}</div>
      <div className={cls.content}>{children}</div>
    </div>
  );
};

export default Message;
