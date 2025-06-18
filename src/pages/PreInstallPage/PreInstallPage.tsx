import Message from '../../components/Message/Message.tsx';
import NavigationControls from '../../components/NavigationControls/NavigationControls.tsx';
import TitleBlock from '../../components/TitleBlock/TitleBlock.tsx';
import TextBlock from '../../components/TextBlock/TextBlock.tsx';
import Paragraph from '../../components/Paragraph/Paragraph.tsx';
import OrderedList from '../../components/OrderedList/OrderedList.tsx';
import ListItem from '../../components/ListItem/ListItem.tsx';
import TextHighlight from '../../components/TextHighlight/TextHighlight.tsx';
import TextEmphasis from '../../components/TextEmphasis/TextEmphasis.tsx';
import TextLink from '../../components/TextLink/TextLink.tsx';
import FilePath from '../../components/FilePath/FilePath.tsx';
import Mod from '../../components/Mod/Mod.tsx';

const PreInstallPage = () => {
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

      <Mod modName=".NET 8.0 SDK" />

      <Mod modName="Microsoft Visual C++ Redistributable for Visual Studio 2015, 2017, 2019, and 2022" />

      <TitleBlock
        title="Официальный контент Bethesda"
        description="В комплекте с официальными ошибками Bethesda"
      />

      <Mod modName="Skyrim Special Edition" />

      <Mod modName="Skyrim Anniversary Upgrade" />

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Защита от обновлений Skyrim</TextEmphasis>
        </Paragraph>

        <Paragraph>
          Bethesda периодически может обновлять игру. Это означает, что SKSE (и куча модов, которые
          его используют) больше не будет работать. Для того, чтобы STEAM не обновлял то что
          сломается, необходимо выполнить следующие действия:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              В <TextHighlight>STEAM</TextHighlight> щелкните правой кнопкой мыши по{' '}
              <TextHighlight>The Elder Scrolls V: Skyrim Special Edition</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В появившемся меню нажмите на <TextHighlight>«Свойства»</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Во всплывающем окне выберите вкладку <TextHighlight>«Обновления»</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В поле выбора в разделе <TextHighlight>«Автоматические обновления»</TextHighlight>{' '}
              выберите <TextHighlight>«Обновлять при запуске»</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Закройте окно.</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Несмотря на формулировку, никаких обновлений игры не произойдет, если вы не запустите игру
          через STEAM. Поскольку мы будем запускать Skyrim через MO2 и программу запуска SKSE,
          триггерное событие не произойдет, и ваша установка Skyrim останется в том же состоянии,
          что и сейчас, пока вы не выполните обновление самостоятельно.
        </Paragraph>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Настройка Skyrim</TextEmphasis>
        </Paragraph>

        <Paragraph>
          Прежде чем мы сможем начать заниматься моддингом, нам нужно настроить Skyrim Special
          Edition, чтобы у нас была начальная базовая конфигурация.
        </Paragraph>
        <Paragraph>
          Запустите The Elder Scrolls V: Skyrim Special Edition через контекстное меню Steam, чтобы
          открыть программу запуска Skyrim Special Edition по умолчанию.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Нажмите <TextHighlight>Настройки</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите кнопку <TextHighlight>Ультра</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Установите <TextHighlight>Соотношение сторон</TextHighlight> и{' '}
              <TextHighlight>Разрешение</TextHighlight> в выпадающем списке. Они должны быть
              настроены на оптимальное разрешение ваших мониторов.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Установите для параметра <TextHighlight>Сглаживание</TextHighlight> значение{' '}
              <TextHighlight>Выкл</TextHighlight> в выпадающем списке. Это происходит в рамках
              подготовки к установке ENB.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что <TextHighlight>флажок</TextHighlight> для параметра{' '}
              <TextHighlight>«Оконный режим»</TextHighlight> снят.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите кнопку <TextHighlight>Принять</TextHighlight>, чтобы закрыть и сохранить.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <Mod modName="Skyrim Special Edition: Creation Kit" />

      <TextBlock>
        <Paragraph>
          Как и в случае со Skyrim, Creation Kit не поставляется с предварительно настроенным .ini,
          а «стандартная» конфигурация генерируется при первом запуске инструмента.
        </Paragraph>
        <Paragraph>
          Хотя в этом руководстве вы не будете создавать новые моды, вы будете импортировать моды,
          изначально разработанные для Skyrim LE, а Creation Kit позволит вам повторно сохранять (и,
          таким образом, обновлять) их для работы со Skyrim SE.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Скачайте и установите Special Editon: Creation Kit.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Запустите Creation Kit через Steam.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              При запуске программа предложит извлечь папку «Scripts», сделайте это.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>После загрузки Creation Kit выйдите из программы.</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Необходимо внести несколько правок, прежде чем вы сможете использовать CK для переноса
          модов.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Скачать готовый CreationKitCustom.ini{' '}
              <TextLink href="https://lexyslotd.com/download/creation-kit-custom-ini/">
                можно здесь
              </TextLink>
              .
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Извлеките его в <FilePath>Steam\steamapps\common\Skyrim Special Edition</FilePath>
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Пользовательский INI файл настраивает CK для разрешения нескольких мастеров и правильной
          загрузки содержимого DLC.
        </Paragraph>
      </TextBlock>

      <Message type="notification">
        Архив скриптов в папке data может оставаться на месте после извлечения скриптов во время
        установки. Они не причиняют вреда, не оказывают дополнительного влияния на саму игру или
        Creation Kit, и их можно смело игнорировать.
      </Message>

      <Mod modName="Creation Kit Platform Extended for Skyrim" />

      <NavigationControls
        prevPage={{ to: '/commoninstructions', name: 'Общие инструкции' }}
        nextPage={{ to: '/preinstall', name: 'Установка модов - Часть 1' }}
      />
    </>
  );
};

export default PreInstallPage;
