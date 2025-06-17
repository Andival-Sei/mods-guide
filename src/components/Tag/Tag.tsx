import { classNames } from '../../utilities/classNames.ts';
import cls from './Tag.module.scss';

export type TagType =
  | 'cao'
  | 'classic'
  | 'creation-kit-resave'
  | 'esl'
  | 'bsa'
  | 'loot'
  | 'removal-tool'
  | 'tool'
  | 'xedit-qac'
  | 'zmerge'
  | 'special-instructions';

interface TagProps {
  type: TagType;
  className?: string;
}

const tagTextMap: Record<TagType, string> = {
  cao: 'CAO',
  classic: 'Classic',
  'creation-kit-resave': 'Creation Kit Resave',
  esl: 'ESL',
  bsa: 'Extract the BSA',
  loot: 'Loot',
  'removal-tool': 'MO2 Removal Tool',
  tool: 'Tool',
  'xedit-qac': 'xEdit - Quick Auto Clean',
  zmerge: 'zMerge',
  'special-instructions': 'Special Instructions',
};

const Tag = (props: TagProps) => {
  const { type } = props;

  return (
    <article className={classNames(cls.tag, { [cls[`tag--${type}`]]: true })}>
      <p className={cls.tagName}>{tagTextMap[type]}</p>
    </article>
  );
};

export default Tag;
