import React, { useRef, useState } from 'react';
import styles from './CodeBlock.module.scss';

// Компонент для отображения блока кода с кнопкой копирования
interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  // Функция для копирования содержимого блока кода
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // Если не удалось скопировать, можно обработать ошибку
      setCopied(false);
    }
  };

  return (
    <div className={styles.codeBlock}>
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopy}
        aria-label="Скопировать код"
      >
        {copied ? 'Скопировано!' : 'Копировать'}
      </button>
      <pre ref={codeRef} className={styles.pre} tabIndex={0}>
        <code className={styles.code}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
