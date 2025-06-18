import type { ReactNode } from 'react';
import cls from './TextHighlight.module.scss';

interface TextHighlightProps {
  children: ReactNode;
  underline?: boolean;
}

const TextHighlight = (props: TextHighlightProps) => {
  const { children, underline } = props;

  return <span className={`${cls.highlight} ${underline ? cls.underline : ''}`}>{children}</span>;
};

export default TextHighlight;
