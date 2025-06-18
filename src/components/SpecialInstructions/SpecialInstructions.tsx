import Paragraph from '../Paragraph/Paragraph';
import UnorderedList from '../UnorderedList/UnorderedList';
import OrderedList from '../OrderedList/OrderedList';
import ListItem from '../ListItem/ListItem';
import TextBlock from '../TextBlock/TextBlock';
import cls from './SpecialInstructions.module.scss';

interface SpecialInstructionsProps {
  instructions: {
    blocks: Array<{
      type: 'paragraph' | 'unordered_list' | 'ordered_list';
      text?: string;
      items?: string[];
    }>;
  };
}

const SpecialInstructions = ({ instructions }: SpecialInstructionsProps) => {
  return (
    <div className={cls.specialInstructions}>
      <h3 className={cls.specialInstructions__title}>Специальные инструкции:</h3>
      <TextBlock>
        {instructions.blocks.map((block, blockIndex) => {
          switch (block.type) {
            case 'paragraph':
              return <Paragraph key={blockIndex}>{block.text}</Paragraph>;
            case 'unordered_list':
              return (
                <UnorderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>{item}</ListItem>
                  ))}
                </UnorderedList>
              );
            case 'ordered_list':
              return (
                <OrderedList key={blockIndex}>
                  {block.items?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>{item}</ListItem>
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
