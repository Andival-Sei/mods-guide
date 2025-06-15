import cls from './TextBlock.module.scss';
import type { ReactNode } from 'react';

interface TextBlockProps {
  children: ReactNode;
}

const TextBlock = (props: TextBlockProps) => {
  const { children } = props;

  return <div className={cls.textBlock}>{children}</div>;
};

export default TextBlock;
