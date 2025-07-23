import cls from './CAOInstructions.module.scss';
import FilePath from '../FilePath/FilePath';
import Paragraph from '../Paragraph/Paragraph';

interface CAOInstructionsProps {
  method: string;
}

const CAOInstructions = ({ method }: CAOInstructionsProps) => {
  return (
    <div className={cls.caoInstructions}>
      <h3 className={cls.caoInstructions__title}>Инструкции CAO:</h3>
      <Paragraph>
        Используйте Cathedral Assets Optimizer: метод <FilePath>{method}</FilePath>
      </Paragraph>
    </div>
  );
};

export type { CAOInstructionsProps };
export default CAOInstructions;
