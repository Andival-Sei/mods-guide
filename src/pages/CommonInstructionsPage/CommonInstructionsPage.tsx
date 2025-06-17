import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import OrderedList from '../../components/OrderedList/OrderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';
import Tag from '../../components/Tag/Tag.tsx';
import cls from './CommonInstructionsPage.module.scss';

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

      <NavigationControls
        prevPage={{ to: '/welcome', name: 'Знакомство' }}
        nextPage={{ to: '/', name: 'Предустановки' }}
      />
    </>
  );
};

export default CommonInstructionsPage;
