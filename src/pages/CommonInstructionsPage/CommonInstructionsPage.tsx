import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import UnorderedList from '../../components/UnorderedList/UnorderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';

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

        <UnorderedList>
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
        </UnorderedList>
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

      <NavigationControls
        prevPage={{ to: '/welcome', name: 'Знакомство' }}
        nextPage={{ to: '/', name: 'Предустановки' }}
      />
    </>
  );
};

export default CommonInstructionsPage;
