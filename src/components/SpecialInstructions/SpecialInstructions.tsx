import type { ReactNode } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import UnorderedList from '../UnorderedList/UnorderedList';
import OrderedList from '../OrderedList/OrderedList';
import ListItem from '../ListItem/ListItem';
import TextBlock from '../TextBlock/TextBlock';
import TextHighlight from '../TextHighlight/TextHighlight';
import CodeBlock from '../CodeBlock/CodeBlock';
import FilePath from '../FilePath/FilePath';
import cls from './SpecialInstructions.module.scss';

interface SpecialInstructionsProps {
  instructions: {
    blocks: Array<{
      type: 'paragraph' | 'unordered_list' | 'ordered_list' | 'code';
      // Добавляем поддержку блока кода на верхнем уровне
      // type: 'code' для отображения блока кода
      // content: строка с кодом
      content?: string; // Строка с <hl>текст</hl> тегами
      items?: (string | { type: 'code'; language?: string; content: string })[]; // Строки или объекты кода
    }>;
  };
}

const SpecialInstructions = ({ instructions }: SpecialInstructionsProps) => {
  // Функция для парсинга текста с <hl> и <fp> тегами
  const parseTextWithHighlights = (text: string): ReactNode[] => {
    // Сначала разбиваем по <hl>...c/hl> и <fp>...</fp>
    const parts = text.split(/(<hl>.*?<\/hl>|<fp>.*?<\/fp>)/g);

    return parts.map((part, index) => {
      // Подсветка <hl>
      if (part.startsWith('<hl>') && part.endsWith('</hl>')) {
        const highlightText = part.replace('<hl>', '').replace('</hl>', '');
        return <TextHighlight key={index}>{highlightText}</TextHighlight>;
      }
      // Подсветка пути <fp>
      if (part.startsWith('<fp>') && part.endsWith('</fp>')) {
        const filePathText = part.replace('<fp>', '').replace('</fp>', '');
        return <FilePath key={index}>{filePathText}</FilePath>;
      }
      // Обычный текст
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={cls.specialInstructions}>
      <h3 className={cls.specialInstructions__title}>Специальные инструкции:</h3>
      <TextBlock>
        {instructions.blocks.map((block, blockIndex) => {
          switch (block.type) {
            case 'code':
              // Отображаем блок кода на верхнем уровне
              return <CodeBlock key={blockIndex}>{block.content || ''}</CodeBlock>;
            case 'paragraph':
              return (
                <Paragraph key={blockIndex}>
                  {block.content ? parseTextWithHighlights(block.content) : ''}
                </Paragraph>
              );
            case 'unordered_list':
              return (
                <UnorderedList key={blockIndex}>
                  {/* Строки — обычные пункты, объекты type: 'code' — вне <li> */}
                  {block.items?.map((item, itemIndex) => {
                    if (typeof item === 'string') {
                      return <ListItem key={itemIndex}>{parseTextWithHighlights(item)}</ListItem>;
                    }
                    if (typeof item === 'object' && item.type === 'code') {
                      // Вставляем блок кода вне <li>, чтобы не было маркера
                      return (
                        <div key={itemIndex} style={{ margin: '0.5em 0' }}>
                          <CodeBlock>{item.content}</CodeBlock>
                        </div>
                      );
                    }
                    return null;
                  })}
                </UnorderedList>
              );
            case 'ordered_list':
              return (
                <OrderedList key={blockIndex}>
                  {/* Строки — нумерованные пункты, объекты type: 'code' — вне <li> */}
                  {block.items?.map((item, itemIndex) => {
                    if (typeof item === 'string') {
                      return <ListItem key={itemIndex}>{parseTextWithHighlights(item)}</ListItem>;
                    }
                    if (typeof item === 'object' && item.type === 'code') {
                      // Вставляем блок кода вне <li>, чтобы не было номера
                      return (
                        <div key={itemIndex} style={{ margin: '0.5em 0' }}>
                          <CodeBlock>{item.content}</CodeBlock>
                        </div>
                      );
                    }
                    return null;
                  })}
                </OrderedList>
              );
            default:
              return null;
          }
        })}
      </TextBlock>
    </div>
  );
};

export type { SpecialInstructionsProps };
export default SpecialInstructions;
