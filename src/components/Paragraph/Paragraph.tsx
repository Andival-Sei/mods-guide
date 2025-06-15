import cls from './Paragraph.module.scss';
import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = (props: ParagraphProps) => {
  const { children } = props;

  return <p className={cls.paragraph}>{children}</p>;
};

export default Paragraph;
