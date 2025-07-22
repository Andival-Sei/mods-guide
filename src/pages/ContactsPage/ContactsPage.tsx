import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import Message from '../../components/Message/Message.tsx';
import TextHighlight from '../../components/TextHighlight/TextHighlight.tsx';
import TextLink from '../../components/TextLink/TextLink.tsx';
import UnorderedList from '../../components/UnorderedList/UnorderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';

// TODO: Реализовать полноценную страницу контактов с реальными каналами связи
// TODO: Добавить форму обратной связи для пользователей
// TODO: Интегрировать с Discord API для отображения статуса сервера
// TODO: Добавить систему уведомлений о новых сообщениях
const ContactsPage = () => {
  return (
    <>
      <Message type="warning">
        ⚠️ Это страница-заглушка. Полноценная страница контактов находится в разработке. Здесь будут
        реальные каналы связи и форма обратной связи.
      </Message>

      <TitleBlock title={'Контакты'} description={'Свяжитесь с нами'} />

      <TextBlock>
        <Paragraph>
          Если у вас есть вопросы, предложения или вы заметили ошибки в руководстве, мы будем рады
          услышать от вас. Выберите наиболее подходящий способ связи.
        </Paragraph>
      </TextBlock>

      <TitleBlock title={'Способы связи'} description={'Как с нами связаться'} />
      <TextBlock>
        <Paragraph>
          <TextHighlight>Основные каналы связи:</TextHighlight>
        </Paragraph>

        <UnorderedList>
          <ListItem>
            <Paragraph>
              <TextHighlight>Discord:</TextHighlight> Присоединяйтесь к нашему серверу для
              обсуждения моддинга и получения помощи в реальном времени
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>GitHub:</TextHighlight> Сообщайте об ошибках и предлагайте улучшения
              через систему Issues
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>Email:</TextHighlight> Для приватных вопросов или предложений о
              сотрудничестве
            </Paragraph>
          </ListItem>
        </UnorderedList>

        <Message type="notification">
          Перед обращением убедитесь, что ваш вопрос не был уже задан в разделе FAQ или в
          существующих обсуждениях на GitHub.
        </Message>
      </TextBlock>

      <TitleBlock title={'Discord'} description={'Присоединяйтесь к сообществу'} />
      <TextBlock>
        <Paragraph>Наш Discord сервер — это место, где вы можете:</Paragraph>

        <UnorderedList>
          <ListItem>
            <Paragraph>Получить помощь от опытных моддеров и участников сообщества</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Обсудить проблемы установки и настройки модов</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Поделиться своими достижениями и скриншотами</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Узнать о новых обновлениях руководства и модов</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Участвовать в тестировании новых версий</Paragraph>
          </ListItem>
        </UnorderedList>

        <Paragraph>
          <TextLink href="https://discord.gg/skyrimmodding" target="_blank">
            Присоединиться к Discord серверу
          </TextLink>
        </Paragraph>
      </TextBlock>

      <TitleBlock title={'GitHub'} description={'Сообщить об ошибке или предложить улучшение'} />
      <TextBlock>
        <Paragraph>
          GitHub — лучший способ сообщить об ошибках или предложить новые функции. Это помогает нам
          отслеживать проблемы и планировать улучшения.
        </Paragraph>

        <Paragraph>
          <TextHighlight>Как правильно сообщить об ошибке:</TextHighlight>
        </Paragraph>

        <UnorderedList>
          <ListItem>
            <Paragraph>Опишите проблему максимально подробно</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Укажите версию руководства и браузера</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Приложите скриншоты, если это поможет понять проблему</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Опишите шаги для воспроизведения ошибки</Paragraph>
          </ListItem>
        </UnorderedList>

        <Paragraph>
          <TextLink href="https://github.com/andival/mods-guide/issues" target="_blank">
            Создать Issue на GitHub
          </TextLink>
        </Paragraph>
      </TextBlock>

      <TitleBlock title={'Email'} description={'Для приватных вопросов'} />
      <TextBlock>
        <Paragraph>
          Для приватных вопросов, предложений о сотрудничестве или других важных вопросов вы можете
          написать нам на email:
        </Paragraph>

        <Paragraph>
          <TextLink href="mailto:contact@andivalsguide.com">contact@andivalsguide.com</TextLink>
        </Paragraph>

        <Message type="warning">
          Пожалуйста, используйте email только для действительно важных вопросов. Для технической
          поддержки лучше использовать Discord или GitHub.
        </Message>
      </TextBlock>

      <TitleBlock title={'FAQ'} description={'Часто задаваемые вопросы'} />
      <TextBlock>
        <Paragraph>
          <TextHighlight>Вопрос:</TextHighlight> Подходит ли это руководство для новичков?
        </Paragraph>
        <Paragraph>
          <TextHighlight>Ответ:</TextHighlight> Да, руководство написано с учетом потребностей
          новичков, но предполагает базовые знания работы с компьютером и готовность учиться.
        </Paragraph>

        <Paragraph>
          <TextHighlight>Вопрос:</TextHighlight> Сколько времени займет установка всех модов?
        </Paragraph>
        <Paragraph>
          <TextHighlight>Ответ:</TextHighlight> Полная установка может занять от нескольких дней до
          пары недель, в зависимости от вашего опыта и времени, которое вы можете уделить процессу.
        </Paragraph>

        <Paragraph>
          <TextHighlight>Вопрос:</TextHighlight> Какие системные требования нужны?
        </Paragraph>
        <Paragraph>
          <TextHighlight>Ответ:</TextHighlight> Рекомендуется видеокарта с 8 ГБ видеопамяти, минимум
          6 ГБ. Подробные требования указаны в разделе "Системные характеристики".
        </Paragraph>
      </TextBlock>

      <NavigationControls
        prevPage={{ to: '/changelog', name: 'Изменения' }}
        nextPage={{ to: '/', name: 'Главная' }}
      />
    </>
  );
};

export default ContactsPage;
