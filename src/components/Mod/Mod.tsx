import cls from './Mod.module.scss';
import Tag, { type TagType } from '../Tag/Tag';
import UnorderedList from '../UnorderedList/UnorderedList';
import ListItem from '../ListItem/ListItem';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/index';
import SpecialInstructions, {
  type SpecialInstructionsProps,
} from '../SpecialInstructions/SpecialInstructions';
import Fomod from '../Fomod/Fomod'; // Импортируем Fomod синхронно

export type FileType =
  | 'Main Files'
  | 'Update Files'
  | 'Optional Files'
  | 'Miscellaneous Files'
  | 'Old Files';

export interface ModFile {
  type: FileType;
  name: string;
  version: string;
}

// Новый формат specialInstructions - простые строки с <hl> тегами
export interface ModProps {
  name: string;
  version: string;
  author: string;
  description: string;
  downloadLink: string;
  files: ModFile[];
  tags?: TagType[];
  // Новый блок: массив Fomod (может быть undefined или пустым)
  fomods?: import('../Fomod/FomodTypes').FomodProps[];
  specialInstructions?: SpecialInstructionsProps['instructions'];
}

interface ModComponentProps {
  modName: string;
}

const Mod = observer(({ modName }: ModComponentProps) => {
  const { modStore } = useStore();
  const modData = modStore.getMod(modName);

  // Если мод не найден
  if (!modData) {
    return (
      <div className={cls.mod__error}>
        <p>Мод "{modName}" не найден в базе данных</p>
      </div>
    );
  }

  const {
    name,
    version,
    author,
    description,
    downloadLink,
    files,
    tags = [],
    fomods = [], // добавляем fomods
    specialInstructions,
  } = modData;

  return (
    <article className={cls.mod}>
      <div className={cls.mod__header}>
        {/* Основная информация о моде */}
        <div className={cls.mod__info}>
          <h2 className={cls.mod__name}>{name}</h2>

          <div className={cls.mod__details}>
            <a
              href={downloadLink}
              className={cls.mod__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать мод
            </a>

            <div className={cls.mod__version}>
              <span className={cls.mod__version_label}>Версия:</span> {version}
            </div>

            <div className={cls.mod__author}>
              <span className={cls.mod__label}>Автор:</span> {author}
            </div>
          </div>
        </div>

        {/* Теги в правом верхнем углу */}
        {tags.length > 0 && (
          <div className={cls.mod__tags}>
            {tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} type={tag} />
            ))}
          </div>
        )}
      </div>

      {/* Разделительная линия */}
      <div className={cls.mod__divider}></div>

      {/* Описание мода */}
      <p className={cls.mod__description}>{description}</p>

      {/* Блок с файлами для скачивания */}
      <div className={cls.mod__files}>
        <h3 className={cls.mod__files_title}>Файлы для скачивания</h3>

        <UnorderedList className={cls.mod__files_list}>
          {files.map((file, index) => (
            <ListItem key={index} className={cls.mod__file_item}>
              <span
                className={cls[`mod__file_type--${file.type.replace(/\s+/g, '-').toLowerCase()}`]}
              >
                {file.type}
              </span>
              {`  —  `}
              {file.name}
              {`  —  `}
              <span className={cls.mod__version_label}>Версия:</span>
              {` ${file.version}`}
            </ListItem>
          ))}
        </UnorderedList>
      </div>

      {/* Fomod-блоки, если есть */}
      {/* Если у мода есть один или несколько Fomod, отображаем их после файлов и перед специнструкциями */}
      {fomods &&
        fomods.length > 0 &&
        fomods.map((fomod, idx) => (
          // Рендерим каждый Fomod для данного мода
          <Fomod key={idx} title={fomod.title} pages={fomod.pages} />
        ))}

      {/* Блок со специальными инструкциями */}
      {specialInstructions && tags.includes('special-instructions') && (
        <SpecialInstructions instructions={specialInstructions} />
      )}
    </article>
  );
});

export default Mod;
