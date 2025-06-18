import type { ReactNode } from 'react';
import cls from './TextLink.module.scss';

interface TextLinkProps {
  children: ReactNode;
  href?: string;
}

const TextLink = (props: TextLinkProps) => {
  const { children, href } = props;

  return (
    <span className={cls.link} onClick={href ? () => window.open(href, '_blank') : undefined}>
      {children}
    </span>
  );
};

export default TextLink;
