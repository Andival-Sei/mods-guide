import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import Message from '../../components/Message/Message.tsx';
import TextHighlight from '../../components/TextHighlight/TextHighlight.tsx';
import OrderedList from '../../components/OrderedList/OrderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import cls from './ChangelogPage.module.scss';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';

// TODO: Реализовать полноценную страницу изменений с реальной историей версий
// TODO: Добавить систему версионирования и автоматическое обновление changelog
// TODO: Интегрировать с GitHub releases для автоматического получения информации об обновлениях
const ChangelogPage = () => {
  return (
    <>
      <Message type="warning">
        ⚠️ Это страница-заглушка. Полноценная страница изменений находится в разработке. 
        Здесь будет отображаться реальная история обновлений руководства.
      </Message>

      <TitleBlock title={'Изменения'} description={'История обновлений руководства'} />

      <TextBlock>
        <Paragraph>
          На этой странице вы найдете полную историю изменений и обновлений руководства. Каждая
          версия содержит подробное описание того, что было добавлено, изменено или исправлено.
        </Paragraph>
      </TextBlock>

      <TitleBlock title={'Версия 1.0.0'} description={'Первоначальный релиз'} />
      <TextBlock>
        <Paragraph>
          <TextHighlight>Дата выпуска:</TextHighlight> Декабрь 2024
        </Paragraph>

        <Paragraph>
          <TextHighlight>Основные изменения:</TextHighlight>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Создана базовая структура руководства по моддингу Skyrim AE</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Добавлены основные разделы: Знакомство, Общие инструкции, Предустановки
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Реализована система навигации между страницами</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Добавлены компоненты для отображения контента: TitleBlock, TextBlock, Message
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Создан адаптивный дизайн для различных устройств</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          <TextHighlight>Технические улучшения:</TextHighlight>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Настроена сборка проекта с использованием Vite</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Добавлена поддержка TypeScript для улучшения разработки</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Реализована система стилизации с использованием SCSS модулей</Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title={'Планы на будущее'} description={'Что ожидается в следующих версиях'} />
      <TextBlock>
        <Paragraph>
          Руководство находится в активной разработке. Вот что планируется добавить в ближайших
          обновлениях:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              <TextHighlight>Версия 1.1.0:</TextHighlight> Добавление раздела "Установка модов —
              Часть 2"
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Версия 1.2.0:</TextHighlight> Интеграция с Mod Organizer 2 и Vortex
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Версия 1.3.0:</TextHighlight> Добавление интерактивных элементов и
              проверок
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Версия 1.4.0:</TextHighlight> Система поиска и фильтрации модов
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Версия 1.5.0:</TextHighlight> Мобильная версия и PWA функциональность
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Message type="notification">
          Если у вас есть предложения по улучшению руководства или вы заметили ошибки, пожалуйста,
          свяжитесь с нами через страницу "Контакты".
        </Message>
      </TextBlock>

      <TitleBlock title={'Благодарности'} description={'Кто помогал в создании'} />
      <TextBlock>
        <Paragraph>
          Это руководство было бы невозможно без помощи сообщества моддеров Skyrim. Особую
          благодарность хочу выразить:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              <TextHighlight>Lexy's Legacy of the Dragonborn Team</TextHighlight> — за оригинальное
              руководство, которое послужило основой для данного проекта
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Сообществу Nexus Mods</TextHighlight> — за создание и поддержку
              множества модификаций, включенных в руководство
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Тестировщикам и рецензентам</TextHighlight> — за ценные отзывы и
              предложения по улучшению
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <NavigationControls
        prevPage={{ to: '/', name: 'Главная' }}
        nextPage={{ to: '/contacts', name: 'Контакты' }}
      />
    </>
  );
};

export default ChangelogPage;
