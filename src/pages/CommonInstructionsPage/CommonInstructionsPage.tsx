import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import OrderedList from '../../components/OrderedList/OrderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';
import Tag from '../../components/Tag/Tag.tsx';
import cls from './CommonInstructionsPage.module.scss';
import TextHighlight from '../../components/TextHighlight/TextHighlight.tsx';
import Fomod from '../../components/Fomod/Fomod.tsx';
import { exampleFomodData } from '../../components/Fomod/exampleFomodData.ts';

const CommonInstructionsPage = () => {
  return (
    <>
      <TitleBlock
        title="Путешествие начинается"
        description="Путешествие тысячи плагинов начинается с одного клика"
      />
      <TextBlock>
        <Paragraph>
          Есть одно последнее и очень важное, конкретное замечание, которое я приберёг для этого
          момента.
        </Paragraph>

        <Paragraph>
          Руководство не поддерживает установки Skyrim, в которых не используется русский язык(на
          данный момент).
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Я являюсь носителем русского языка. Таким образом, именно такую настройку я использую
              при обновлении и обслуживании этого руководства.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Хотя я понимаю, что многие из вас могут говорить и играть в игры на разных языках, у
              меня нет никого, кто знал бы этот язык (скорее всего) и мог бы вносить и поддерживать
              необходимые изменения во всех патчах, предоставляемых руководством для поддержки этого
              языка. Я просто не могу этого сделать.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Я приношу свои извинения, если это оскорбляет, но дело не в том, что «не будет», а в
              том, что «не могу». Для английского языка рекомендую просто использовать руководство
              Lexy, а не моё.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Пояснения к тегам модификаций" />

      <TextBlock>
        <Paragraph>
          Теги, показанные ниже, будут отображаться с соответствующими модами по мере их установки.
          Не все из них требуют каких-либо действий с вашей стороны - многие из них предназначены
          для информационных целей или для того, чтобы помочь вам быстро найти ту или иную группу
          модов, если это необходимо. Любое действие, необходимое во время установки, будет
          выполнено тогда, когда это необходимо.
        </Paragraph>

        <Paragraph>
          Например, многие моды будут иметь тег "LOOT". Вам не нужно настраивать правила LOOT этого
          мода, пока не будет написано об этом.
        </Paragraph>
      </TextBlock>

      <table className={cls.tagsTable}>
        <tbody>
          <tr>
            <td>
              <Tag type="cao" />
            </td>
            <td>
              <Paragraph>Моды, требующие обработки Cathedral Assets Optimizer.</Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="classic" />
            </td>
            <td>
              <Paragraph>Моды, которые загружаются из классического Skyrim.</Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="creation-kit-resave" />
            </td>
            <td>
              <Paragraph>
                Моды, чьи ESP должны быть преобразованы в форму 44 в SSE Creation Kit.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="esl" />
            </td>
            <td>
              <Paragraph>
                Моды, чьи ESP можно безопасно пометить как ESL, чтобы еще больше сократить общее
                количество плагинов.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="bsa" />
            </td>
            <td>
              <Paragraph>
                Моды, чьи BSA необходимо извлечь с помощью экстрактора BSA в Mod Organizer 2.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="loot" />
            </td>
            <td>
              <Paragraph>
                Моды, для которых правила LOOT должны быть установлены на странице финиша.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="removal-tool" />
            </td>
            <td>
              <Paragraph>
                Инструмент для удаления файлов в модах, которые требуют обработки с помощью MO2
                Removal Tool.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="tool" />
            </td>
            <td>
              <Paragraph>
                Утилита для моддинга, которую можно использовать во время вашего приключения в
                моддинге.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="xedit-qac" />
            </td>
            <td>
              <Paragraph>Моды, чьи ESP очищаются xEdit.</Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="zmerge" />
            </td>
            <td>
              <Paragraph>
                Моды, чьи ESP будут объединены позже, используют zMerge для уменьшения общего
                количества ESP.
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <Tag type="special-instructions" />
            </td>
            <td>
              <Paragraph>Специальные ситуативные инструкции для конкретного мода.</Paragraph>
            </td>
          </tr>
        </tbody>
      </table>

      <TitleBlock title="Установка модов" />
      <TextBlock>
        <Paragraph>При установке руководства следует помнить о нескольких вещах:</Paragraph>

        <OrderedList>
          <ListItem>
            НЕ пытайтесь запустить игру, чтобы «убедиться, что установка идет хорошо», пока не
            получите указания. Многие из устанавливаемых нами файлов зависят от других файлов,
            которые могли быть еще не установлены. Доверяйте процессу. Если в конце концов возникнут
            проблемы, то вы можете попытаться связаться со мной через раздел контактов.
          </ListItem>
          <ListItem>
            Для вашего собственного здравомыслия, НЕ запускайте LOOT, пока не дойдете до той части
            установки, которая находится на странице «Финишная черта». Вы увидите всевозможные
            ошибки на экране пользовательского интерфейса LOOT, и вы полностью потеряете рассудок.
            Доверяйте процессу.
          </ListItem>
          <ListItem>
            В Руководстве вы найдете несколько мест, где вам предлагается удалить файлы из мода.
            Много раз вы увидите эти имена файлов со знаком "*" в их именах. В качестве примера вы
            можете увидеть "helgen reborn.esp\*.tga". В таких случаях это означает удаление ВСЕХ
            ФАЙЛОВ, которые соответствуют этому шаблону (в данном случае, всех файлов с расширением
            TGA в этой папке). Эти инструкции будут отображаться под информацией о моде в разделах
            «Special Instructions».
          </ListItem>
        </OrderedList>

        <Paragraph>
          В зависимости от типа загружаемого файла, вы можете по-разному обращаться с ними при
          установке в Mod Organizer 2. Приведенные ниже инструкции представляют собой мои
          рекомендации по решению этой проблемы, которые обеспечивают максимально возможную гибкость
          и простоту обновления. Кроме того, ниже приведены некоторые советы по процессу установки
          мода:
        </Paragraph>
        <OrderedList>
          <ListItem>
            После того, как вы установили мод, АКТИВИРУЙТЕ МОД И ЕГО ФАЙЛЫ в MO2. Будущие установки
            других модов могут зависеть от того, будет ли этот мод активен на обеих панелях MO2,
            чтобы его установка работала правильно.
          </ListItem>
          <ListItem>
            <TextHighlight>
              ДЛЯ ФАЙЛА, НАЗНАЧЕННОГО В КАЧЕСТВЕ ОСНОВНОГО ФАЙЛА - (Main):
            </TextHighlight>{' '}
            Установите как обычно. Если на странице мода есть несколько основных файлов, которые вы
            будете устанавливать, каждый файл должен быть установлен как отдельный мод (т.е.
            измените название мода второго установленного файла), чтобы они считались двумя разными
            модами MO2. Это позволяет обновлять каждый файл независимо от другого, вместо того,
            чтобы скачивать и устанавливать все файлы заново, если обновляется только один из них.
          </ListItem>
          <ListItem>
            <TextHighlight>ДЛЯ ФАЙЛА, ОБОЗНАЧЕННОГО КАК ФАЙЛ ОБНОВЛЕНИЯ - (Update):</TextHighlight>{' '}
            Эти файлы должны быть установлены в ТОТ ЖЕ МОД, что и его родительский мод. Это можно
            сделать, указав MO2 «Объединить» файлы, что сообщит MO2 перезаписать исходную версию с
            обновлением, что мы и хотим.
          </ListItem>
          <ListItem>
            <TextHighlight>
              ДЛЯ ФАЙЛА, ОБОЗНАЧЕННОГО КАК НЕОБЯЗАТЕЛЬНЫЙ, ПРОЧИЙ или СТАРЫЙ ФАЙЛ - (Optional,
              Miscellaneous или Old):
            </TextHighlight>{' '}
            Эти файлы должны быть установлены как ОТДЕЛЬНЫЙ МОД в MO2. НЕ ПЕРЕЗАПИСЫВАЙТЕ исходные
            файлы мода. Это делается по тем же причинам, что и для основных файлов.
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Руководство по FOMOD" />
      <TextBlock>
        <Paragraph>
          На протяжении всего руководства вы установите несколько модов с инструкциями FOMOD.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Выбирайте <TextHighlight>только</TextHighlight> то, что выбрано в FOMOD.
            </Paragraph>
          </ListItem>

          <ListItem>
            <Paragraph>
              Некоторые FOMOD автоматически выбирают элементы, которые мы не хотим устанавливать.{' '}
              <TextHighlight>Снимите флажки</TextHighlight> со всего, что не выбрано в выборках
              FOMOD или не показано в выборах FOMOD в Руководстве.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Будьте очень осторожны с этим выбором - неправильный выбор FOMOD является основной
          причиной проблем на поздних этапах установки. Если вам нужно пересмотреть свой выбор
          несколько раз, чтобы убедиться в том, что вы делаете правильный выбор, сделайте это - это
          сэкономит вам время и нервы в долгосрочной перспективе.
        </Paragraph>

        <Paragraph>Пример FOMOD:</Paragraph>
      </TextBlock>

      <Fomod title="Пример Fomod" pages={exampleFomodData} />

      <NavigationControls
        prevPage={{ to: '/welcome', name: 'Знакомство' }}
        nextPage={{ to: '/', name: 'Предустановки' }}
      />
    </>
  );
};

export default CommonInstructionsPage;
