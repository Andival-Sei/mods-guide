import type { ReactNode } from 'react';
import cls from './TextHighlight.module.scss';

interface TextHighlightProps {
  children: ReactNode;
}

const TextHighlight = (props: TextHighlightProps) => {
  const { children } = props;

  return <span className={cls.highlight}>{children}</span>;
};

export default TextHighlight;
