import type { ReactNode } from 'react';
import cls from './TextEmphasis.module.scss';

interface TextEmphasisProps {
  children: ReactNode;
}

const TextEmphasis = (props: TextEmphasisProps) => {
  const { children } = props;

  return <span className={cls.emphasis}>{children}</span>;
};

export default TextEmphasis;
