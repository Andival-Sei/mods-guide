import type { ReactNode } from 'react';
import cls from './TextLink.module.scss';

interface TextLinkProps {
  children: ReactNode;
  href?: string;
  target?: string;
}

const TextLink = (props: TextLinkProps) => {
  const { children, href, target = '_blank' } = props;

  return (
    <span className={cls.link} onClick={href ? () => window.open(href, target) : undefined}>
      {children}
    </span>
  );
};

export default TextLink;
