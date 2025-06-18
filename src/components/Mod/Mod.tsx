import cls from './Mod.module.scss';
import Tag, { type TagType } from '../Tag/Tag';
import UnorderedList from '../UnorderedList/UnorderedList';
import ListItem from '../ListItem/ListItem';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { getModByName } from '../../services/modService';
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions';

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

export interface ModProps {
  name: string;
  version: string;
  author: string;
  description: string;
  downloadLink: string;
  files: ModFile[];
  tags?: TagType[];
  specialInstructions?: {
    blocks: Array<{
      type: 'paragraph' | 'unordered_list' | 'ordered_list';
      text?: string;
      items?: string[];
    }>;
  };
}

interface ModComponentProps {
  modName: string;
}

const Mod = ({ modName }: ModComponentProps) => {
  const [modData, setModData] = useState<ModProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadModData() {
      try {
        setLoading(true);
        const data = await getModByName(modName);
        if (data) {
          setModData(data);
        } else {
          setError(`Не удалось загрузить данные мода "${modName}"`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Произошла ошибка при загрузке данных мода');
      } finally {
        setLoading(false);
      }
    }

    loadModData().catch((_err) => {
      // Ошибка уже обрабатывается внутри функции
      // Этот обработчик нужен только для правильной обработки Promise
    });
  }, [modName]);

  if (loading) {
    return (
      <div className={cls.mod__loading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cls.mod__error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!modData) {
    return (
      <div className={cls.mod__error}>
        <p>Данные мода не найдены</p>
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

      {/* Блок со специальными инструкциями */}
      {specialInstructions && tags.includes('special-instructions') && (
        <SpecialInstructions instructions={specialInstructions} />
      )}
    </article>
  );
};

export default Mod;
