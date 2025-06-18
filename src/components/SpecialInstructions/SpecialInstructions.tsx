import Paragraph from '../Paragraph/Paragraph';
import UnorderedList from '../UnorderedList/UnorderedList';
import OrderedList from '../OrderedList/OrderedList';
import ListItem from '../ListItem/ListItem';
import TextBlock from '../TextBlock/TextBlock';
import TextHighlight from '../TextHighlight/TextHighlight';
import cls from './SpecialInstructions.module.scss';

interface TextSegment {
  text: string;
  highlight?: boolean;
}

interface SpecialInstructionsProps {
  instructions: {
    blocks: Array<{
      type: 'paragraph' | 'unordered_list' | 'ordered_list';
      content?: TextSegment[];
      items?: TextSegment[][];
    }>;
  };
}

const SpecialInstructions = ({ instructions }: SpecialInstructionsProps) => {
  // Функция для рендеринга текста с подсветкой
  const renderTextWithHighlights = (segments: TextSegment[]) => {
    return segments.map((segment, index) => {
      if (segment.highlight) {
        return <TextHighlight key={index}>{segment.text}</TextHighlight>;
      }
      return <span key={index}>{segment.text}</span>;
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
                  {block.content ? renderTextWithHighlights(block.content) : ''}
                </Paragraph>
              );
            case 'unordered_list':
              return (
                <UnorderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      {renderTextWithHighlights(item)}
                    </ListItem>
                  ))}
                </UnorderedList>
              );
            case 'ordered_list':
              return (
                <OrderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      {renderTextWithHighlights(item)}
                    </ListItem>
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
