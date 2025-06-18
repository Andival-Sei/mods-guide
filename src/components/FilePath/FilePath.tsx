import type { ReactNode } from 'react';
import cls from './FilePath.module.scss';

interface FilePathProps {
  children: ReactNode;
}

const FilePath = (props: FilePathProps) => {
  const { children } = props;

  return <span className={cls.path}>{children}</span>;
};

export default FilePath;
