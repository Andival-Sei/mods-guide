import cls from './CAOInstructions.module.scss';
import FilePath from '../FilePath/FilePath';
import Paragraph from '../Paragraph/Paragraph';

// Тип для методов CAO с перечислением всех возможных значений
export type CAOMethod =
  | "Lexy's LOTD SE - BSA"
  | "Lexy's LOTD SE - No BSA"
  | "Lexy's LOTD SE - WICO"
  | 'SSE - Downsize Textures - 1K'
  | 'SSE - Downsize Textures - 2K';

interface CAOInstructionsProps {
  method: CAOMethod;
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
