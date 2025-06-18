import Message from '../../components/Message/Message.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';
import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import OrderedList from '../../components/OrderedList/OrderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import TextHighlight from '../../components/TextHighlight/TextHighlight.tsx';
import Mod, { type ModProps } from '../../components/Mod/Mod.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import { useEffect, useState } from 'react';
import { getModByName } from '../../services/modService.ts';
import cls from './PreInstallPage.module.scss';

const PreInstallPage = () => {
  const [skyuiMod, setSkyuiMod] = useState<ModProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadModData() {
      try {
        const data = await getModByName('.NET 8.0 SDK');
        setSkyuiMod(data);
      } catch (err) {
        setError('Не удалось загрузить данные мода');
      }
    }

    loadModData();
  }, []);

  return (
    <>
      <Message type="warning">
        Не пропустите эту страницу! На этой странице перечислены важные шаги по настройке, которые
        имеют жизненно важное значение для правильной установки руководства. Даже если вы уже делали
        установки модифицированных версий, убедитесь, что вы следовали всем этим указаниям!
      </Message>

      <TitleBlock title="Некоторые напоминания" />

      <TextBlock>
        <Paragraph>
          Еще раз, прежде чем мы начнем, на случай, если вы пропустили все эти важные моменты:
        </Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>НЕ СОРТИРУЙТЕ LOOT, ПОКА НЕ ПОЛУЧИТЕ УКАЗАНИЯ.</Paragraph>
          </ListItem>
          <ListItem>
            <OrderedList>
              <ListItem>
                <Paragraph>
                  LOOT не отсортирует порядок загрузки правильно, пока вы не завершите установку.
                </Paragraph>
              </ListItem>
              <ListItem>
                <Paragraph>
                  LOOT сообщит об ошибках, которые, возможно, еще не были устранены.
                </Paragraph>
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>
            <Paragraph>НЕ ОТКЛОНЯЙТЕСЬ ОТ ИНСТРУКЦИЙ РУКОВОДСТВА.</Paragraph>
          </ListItem>
          <ListItem>
            <OrderedList>
              <ListItem>
                <Paragraph>
                  Доверяйте инструкциям руководства. Не добавляйте и не удавляйте из руководства.
                  Даже то, о чем вы даже не подозреваете, может вызвать проблемы....
                </Paragraph>
              </ListItem>
              <ListItem>
                <Paragraph>
                  ИЗ ЛЮБВИ К ТАЛОСУ (или другой выбранной вами Аэдра/Даэдра/Призрачной сущности)
                  ЧИТАЙТЕ СТРАНИЦЫ МОДОВ NEXUS.
                </Paragraph>
              </ListItem>
              <ListItem>
                <OrderedList>
                  <ListItem>
                    <Paragraph>
                      Многие сообщения об «ошибках», которые мы получили, были связаны с тем, что
                      игроки не знали об изменениях, внесенных в игру руководством. Изменения,
                      которые были полностью задуманы. Да, это МНОГО страниц с модами, и нет, мы не
                      ожидаем, что вы запомните каждое слово, но мы ожидаем, что вы будете
                      ответственно относиться к своей собственной компьютерной системе и точно
                      знать, что вы делаете, загружая и устанавливая ее.
                    </Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>
                      Следуйте инструкциям по установке в руководстве и просмотрите страницы модов,
                      если они отличаются. Любые требования, перечисленные на странице мода, будут
                      рассмотрены позже в руководстве или в альтернативном моде.
                    </Paragraph>
                  </ListItem>
                </OrderedList>
              </ListItem>
              <ListItem>
                <Paragraph>ОБРАТИТЕСЬ К СТРАНИЦЕ «ОБЩИЕ ИНСТРУКЦИИ», ЧТОБЫ УЗНАТЬ:</Paragraph>
              </ListItem>
              <ListItem>
                <OrderedList>
                  <ListItem>
                    <Paragraph>Extract the BSA инструкции.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>Creation kit Resave инструкции.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>CAO инструкции.</Paragraph>
                  </ListItem>
                  <ListItem>
                    <Paragraph>Советы по установке модов.</Paragraph>
                  </ListItem>
                </OrderedList>
              </ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>
        <Paragraph>
          Имейте в виду, что это руководство предоставит большое количество специально разработанных
          патчей, чтобы несколько сотен модов, которые вы будете устанавливать, прекрасно играли
          вместе. Внимание к деталям имеет решающее значение, если вы хотите, чтобы все получилось
          так, как задумано. Делайте перерывы. Ходьбы. Не мчитесь к финишу, а задайте хороший и
          управляемый темп. Вздремните. СПАТЬ. Чего бы это ни стоило, убедитесь, что вы можете
          обращать внимание на каждое слово.
        </Paragraph>
        <Paragraph>И на этой ноте...</Paragraph>
        <Paragraph>Здесь... Мы... Начинаем!</Paragraph>
      </TextBlock>

      <TitleBlock title="Расширения файлов Windows" description="Сделать невидимое видимым" />

      <TextBlock>
        <Paragraph>
          Прежде всего, нам нужно убедиться, что расширения файлов Windows видны.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Откройте проводник Windows.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите на кнопку <TextHighlight>Просмотреть,</TextHighlight> а в выпадающем окне
              наведите курсор на пункт <TextHighlight>Показать.</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Убедитесь, что установлен флажок "Расширения имен файлов".</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Закройте окно.</Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Главные утилиты" description="Предотвращаем беспорядки" />

      {error ? (
        <div className={cls['mod-error']}>
          <p>{error}</p>
        </div>
      ) : skyuiMod ? (
        <Mod {...skyuiMod} />
      ) : (
        <div className={cls['mod-loading']}>
          <Loader />
        </div>
      )}

      <NavigationControls
        prevPage={{ to: '/commoninstructions', name: 'Общие инструкции' }}
        nextPage={{ to: '/preinstall', name: 'Установка модов - Часть 1' }}
      />
    </>
  );
};

export default PreInstallPage;
