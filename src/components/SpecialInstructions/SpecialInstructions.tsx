import type { ReactNode } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import UnorderedList from '../UnorderedList/UnorderedList';
import OrderedList from '../OrderedList/OrderedList';
import ListItem from '../ListItem/ListItem';
import TextBlock from '../TextBlock/TextBlock';
import TextHighlight from '../TextHighlight/TextHighlight';
import cls from './SpecialInstructions.module.scss';

interface SpecialInstructionsProps {
  instructions: {
    blocks: Array<{
      type: 'paragraph' | 'unordered_list' | 'ordered_list';
      content?: string; // Строка с <hl>текст</hl> тегами
      items?: string[]; // Массив строк с <hl>текст</hl> тегами
    }>;
  };
}

const SpecialInstructions = ({ instructions }: SpecialInstructionsProps) => {
  // Функция для парсинга текста с <hl> тегами
  const parseTextWithHighlights = (text: string): ReactNode[] => {
    // Разбиваем текст по тегам <hl>...</hl>
    const parts = text.split(/(<hl>.*?<\/hl>)/g);

    return parts.map((part, index) => {
      // Если часть содержит тег подсветки
      if (part.startsWith('<hl>') && part.endsWith('</hl>')) {
        const highlightText = part.replace('<hl>', '').replace('</hl>', '');
        return <TextHighlight key={index}>{highlightText}</TextHighlight>;
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
            case 'paragraph':
              return (
                <Paragraph key={blockIndex}>
                  {block.content ? parseTextWithHighlights(block.content) : ''}
                </Paragraph>
              );
            case 'unordered_list':
              return (
                <UnorderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>{parseTextWithHighlights(item)}</ListItem>
                  ))}
                </UnorderedList>
              );
            case 'ordered_list':
              return (
                <OrderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>{parseTextWithHighlights(item)}</ListItem>
                  ))}
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

export default SpecialInstructions;
