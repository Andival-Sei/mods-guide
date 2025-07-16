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
import UnorderedList from '../../components/UnorderedList/UnorderedList.tsx';

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

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Загрузка Anniversary контента</TextEmphasis>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Запустите Skyrim Special Edition через Steam.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>В появившемся меню нажмите Играть.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В главном меню игры нажмите на кнопку загрузки, когда вам будет предложено.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Дождитесь загрузки всех дополнений и выйдите из игры.</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          На этом этапе <TextHighlight>ОЧЕНЬ ВАЖНО</TextHighlight>, чтобы все файлы творческого
          клуба были установлены.
        </Paragraph>

        <Paragraph>
          Если вы не видите кнопку «Загрузить», закройте игру, перейдите на компьютере в раздел{' '}
          <FilePath>Документы\My Games\Skyrim Special Edition</FilePath>, удалите 2 ini-файла Skyrim
          (Skyrim.ini и SkyrimPrefs.ini) и перезапустите игру из Steam. Кнопка загрузки должна
          появиться.
        </Paragraph>
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

      <TitleBlock
        title="Инструменты для моддинга"
        description="Как сделать Skyrim великим: одно изменение за раз"
      />

      <TextBlock>
        <Paragraph>
          Настоятельно рекомендуется создать папку для всех ваших инструментов для моддинга, в
          идеале в корне диска, например, C:\Modding Tools.
        </Paragraph>
        <Paragraph>
          Инструменты должны быть извлечены из своих архивов (например, не могут оставаться в файле
          .7z) и должны иметь свои собственные индивидуальные папки. Инструменты не должны
          находиться в папке Steam и ее подпапках, и{' '}
          <TextHighlight>
            они НЕ ДОЛЖНЫ устанавливаться в области, защищенной UAC, например, на рабочем столе, в
            Program Files
          </TextHighlight>
          .
        </Paragraph>
      </TextBlock>

      <Mod modName="LOOT - Load Order Optimisation Tool" />

      <Mod modName="xEdit" />

      <Mod modName="Mators xEdit Patching Framework" />

      <Mod modName="TES5EditScripts" />

      <Mod modName="WICO cleanup script" />

      <Mod modName="Dark Face Issue Reporter" />

      <Mod modName="Dark Face Issue Reporter Ignore" />

      <Mod modName="Synthesis" />

      <Mod modName="Lexy's LOTD Synthesis Profile" />

      <Mod modName="Cathedral Assets Optimizer" />

      <Mod modName="Lexy's LOTD CAO Profiles" />

      <Mod modName="Wrye Bash" />

      <Mod modName="zEdit" />

      <TitleBlock title="Script Extenders" description="Там, где происходит настоящее волшебство" />

      <Mod modName="Skyrim Script Extender - Special Edition" />

      <TitleBlock title="BethINI" description="Skyrim INI файлы стали проще" />

      <Mod modName="Bethini Pie (Performance INI Editor)" />

      <TitleBlock title="Запуск BethINI" description="Беги, БетИНИ, Беги" />

      <TextBlock>
        <OrderedList>
          <ListItem>
            <Paragraph>Запустите BethINI Pie.</Paragraph>
          </ListItem>

          <ListItem>
            <Paragraph>
              Если вы запускаете BethINI Pie впервые, появится всплывающее окно с просьбой выбрать
              игру. Выберите <TextHighlight>Skyrim Special Edition</TextHighlight> в раскрывающемся
              меню.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Если вы используете BethINI Pie впервые, другое всплывающее окно должно попросить вас
              настроить:
            </Paragraph>
          </ListItem>

          <UnorderedList>
            <ListItem>
              <Paragraph>
                Путь к игре: Убедитесь, что он указывает на{' '}
                <FilePath>Steam\steamapps\common\Skyrim Special Edition</FilePath>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Путь INI: убедитесь, что он указывает на{' '}
                <FilePath>Документы\My Games\Skyrim Special Edition</FilePath>
              </Paragraph>
            </ListItem>
          </UnorderedList>

          <ListItem>
            <Paragraph>
              Как только это будет сделано, нажмите <TextHighlight>OK</TextHighlight>.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Basic</TextEmphasis>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Нажмите кнопку <TextHighlight>Reset to Default</TextHighlight> и подождите, пока не
              отобразится сообщение <TextHighlight>Preset Default Applied</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите на предустановку <TextHighlight>High</TextHighlight> и подождите, пока не
              отобразится сообщение <TextHighlight>Preset Bethini Hight Applied</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <TextHighlight>
                Пожалуйста, избегайте искушения нажать Ultra, даже если ваш компьютер
                высокопроизводительный.
              </TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите кнопку <TextHighlight>Apply Recommended Tweaks</TextHighlight> и подождите,
              пока не появится сообщение <TextHighlight>Preset recommended applied</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Display:</Paragraph>
          </ListItem>

          <UnorderedList>
            <ListItem>
              <Paragraph>
                Resolution: Это должно быть собственное разрешение вашей системы.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Display Mode: <TextHighlight>Borderless Windowed</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Default World FOV: <TextHighlight>85</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Default FOV: <TextHighlight>85</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Default 1st Person World FOV: <TextHighlight>85</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                64 Bit render Targets: <TextHighlight>Включено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Vsync: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Lock Framerate: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>

          <ListItem>
            <Paragraph>Adjustments:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Bloom Boost: <TextHighlight>5.0</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Freebies Seen: <TextHighlight>Включено</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка General</TextEmphasis>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Saved Games:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Autosaves: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Save on Pause: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Save on Travel: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Save on wait: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Save on rest: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Paragraph>Papyrus:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Post-Load Update Time: <TextHighlight>2000</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Max Allocated Memory: <TextHighlight>500000</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Gameplay</TextEmphasis>
        </Paragraph>
        <UnorderedList>
          <ListItem>
            <Paragraph>
              NPC Use Ammo: <TextHighlight>Включено</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Over Encumbered Reminder: <TextHighlight>300</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Tutorials: <TextHighlight>Отключено</TextHighlight>
            </Paragraph>
          </ListItem>
        </UnorderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Interface</TextEmphasis>
        </Paragraph>
        <UnorderedList>
          <ListItem>
            <Paragraph>
              Bethesda Modding Platform: <TextHighlight>Отключено</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Mod Manager Menu: <TextHighlight>Отключено</TextHighlight>
            </Paragraph>
          </ListItem>
        </UnorderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Environment</TextEmphasis>
        </Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Grass:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Density: <TextHighlight>60</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Diversity: <TextHighlight>15</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>

          <ListItem>
            <Paragraph>Water:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Reflect Sky: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Shadows</TextEmphasis>
        </Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Ambient Occlusion:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Ambient Occlusion: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                SAO Bias: <TextHighlight>0.5</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                SAO Exp Factor: <TextHighlight>0.22</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                SAO Intensity: <TextHighlight>12</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                SAO Radius: <TextHighlight>850</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка Visuals</TextEmphasis>
        </Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Sun:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Sun Base Size: <TextHighlight>200</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Sun Glare Size: <TextHighlight>282</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Paragraph>Effects:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Particles: <TextHighlight>7500</TextHighlight>
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Lens Flare: <TextHighlight>Отключено</TextHighlight>
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Вкладка View Distance</TextEmphasis>
        </Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Distant Details:</Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Tree LOD Distance: <TextHighlight>0</TextHighlight> (Если вы НЕ собираетесь
                запускать DynDOLOD Ultra Trees, оставьте это значение по умолчанию)
              </Paragraph>
            </ListItem>
          </UnorderedList>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <OrderedList>
          <ListItem>
            <Paragraph>
              Как только все будет сделано, нажмите File и затем Save, чтобы сохранить настройки.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Теперь вы можете выйти и закрыть BethINI Pie.</Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Менеджер модов" description="Не принимайте заменители" />

      <Message type="notification">
        Это руководство было написано и предполагает использование Mod Organizer 2 и его встроенных
        плагинов и функций. Использование любой другой программы управления модами НЕ ПОДДЕРЖИВАЕТСЯ
        Руководством.
      </Message>

      <Mod modName="Mod Organizer 2" />

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Установка Mod Organizer 2</TextEmphasis>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Запустите установочный файл Mod Organizer 2.</Paragraph>
          </ListItem>

          <UnorderedList>
            <ListItem>
              <Paragraph>
                Если вы используете MO2 впервые, Защитник Windows может выдать предупреждение о том,
                что он не распознает приложение и запретил его запуск. В этом случае нажмите кнопку
                ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ, а затем нажмите кнопку ВЫПОЛНИТЬ В ЛЮБОМ СЛУЧАЕ.
              </Paragraph>
            </ListItem>
          </UnorderedList>

          <ListItem>
            <Paragraph>Выберите место установки,</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              После завершения установки запустите MO2 из расположения установленного файла.
            </Paragraph>
          </ListItem>
          <OrderedList>
            <ListItem>
              <Paragraph>
                В появившемся запросе <TextHighlight>«Create New Instance»</TextHighlight> выберите{' '}
                <TextHighlight>«Create a Portable Instance»</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем предложении выберите{' '}
                <TextHighlight>Skyrim: Special Edition</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем запросе выберите <TextHighlight>Steam</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем запросе отметьте флажками{' '}
                <TextHighlight>Use profile-specific game INI files</TextHighlight> и{' '}
                <TextHighlight>Use profile-specific save games</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем запросе убедитесь, что поле местоположение(путь) совпадает с
                местоположением, где был установлен MO2.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем запросе нажмите кнопку <TextHighlight>Finish</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В следующем запросе выберите <TextHighlight>Do Nothing</TextHighlight>.
              </Paragraph>
            </ListItem>
          </OrderedList>
        </OrderedList>
      </TextBlock>

      <Message type="warning">
        Mod Organizer 2 ДОЛЖЕН быть установлен в Portable режиме. Это необходимо для того, чтобы все
        инструменты, используемые в процессе, работали так, как задумано.
      </Message>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Настройка Mod Organizer 2</TextEmphasis>
        </Paragraph>

        <Paragraph>
          Mod Organizer 2 теперь полностью установлен. Есть некоторые дополнительные настройки
          конфигурации, которые обеспечат полную интеграцию с Nexus и обеспечат дополнительный
          уровень комфорта пользователя при установке руководства.
        </Paragraph>

        <Paragraph>
          <TextHighlight underline>1. Переключение языка</TextHighlight>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              На панели инструментов Mod Organizer 2 найдите кнопку «Настройки» (значок гаечного
              ключа и отвертки).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>В настроке language выберите русский язык.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В меню настроек Mod Organizer 2 нажмите <TextHighlight>OK</TextHighlight>, чтобы
              закрыть окно.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Перезапустите Mod Organizer 2.</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          <TextHighlight underline>2. Mod Organizer 2 должен быть подключен к NEXUS</TextHighlight>
        </Paragraph>

        <Paragraph>
          Чтобы оптимизировать и полностью интегрировать MO2 с Nexus (откуда поступает подавляющее
          большинство модов, которые вы будете загружать), вам потребуется учетная запись Nexus.
          Если у вас его нет, вы можете создать его{' '}
          <TextLink href="https://www.nexusmods.com/skyrimspecialedition">здесь</TextLink>. Эта
          учетная запись не взимает комиссию (хотя бесплатная учетная запись также будет очень
          ограничена в пропускной способности). Подписка Premium без ограничения пропускной
          способности доступна на ежемесячной основе. Особенности этих подписок Premium можно найти
          на веб-сайте NEXUS.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              На панели инструментов Mod Organizer 2 найдите кнопку «Настройки».
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В верхней части появившегося окна нажмите на вкладку{' '}
              <TextHighlight>Nexus</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите на кнопку <TextHighlight>«Подключиться к Nexus»</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В вашем браузере откроется новое окно. Nexus запросит разрешение на привязку Mod
              Organizer 2 к вашей учетной записи Nexus. Разрешив это, вы можете закрыть окно
              браузера.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В меню настроек Mod Organizer 2 нажмите <TextHighlight>OK</TextHighlight>, чтобы
              закрыть окно.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          <TextHighlight underline>3. Темы Mod Organizer 2</TextHighlight>
        </Paragraph>

        <Paragraph>
          Некоторые пользователи могут посчитать стандартную тему Mod Organizer 2 слишком яркой,
          жесткой или каким-либо другим образом неприятной. Я предлагаю это изменить. И заодно
          иконку запуска.
        </Paragraph>
      </TextBlock>

      <Mod modName="Fluency Themes for Mod Organizer 2" />

      <Mod modName="Clean Splash Screens for Mod Organizer 2" />

      <TextBlock>
        <Paragraph>Чтобы заменить иконку:</Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Откройте архив Clean Splash Screens for Mod Organizer 2.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>В папке 4K найдите файл Splash.png</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Переместите файл Splash.png в папку, где установлен Mod Organizer 2 и подтвердите
              замену, если потребуется.
            </Paragraph>
          </ListItem>
        </OrderedList>
        <Paragraph>Чтобы заменить тему:</Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>Откройте архив Fluency Themes for Mod Organizer 2.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Перенесите всё содержимое архива в папку stylesheets, которая находится в папке Mod
              Organizer 2.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Откройте Mod Organizer 2 и в меню настроек перейдите на вкладку Тема.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В настройке Стиль выберите <TextHighlight>Fluency Midnight</TextHighlight>(либо любую
              другую, которая вам нравится).
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          <TextHighlight underline>4. Разбираемся в интерфейсе</TextHighlight>
        </Paragraph>

        <Paragraph>
          Левая и правая панели Mod Organizer 2 могут быть настроены на отображение только тех
          полей, которые вы хотите, должны или используете. Это можно сделать путем:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              На левой панели Mod Organizer 2 щелкните правой кнопкой мыши на любой из заголовков
              столбцов (например, «Название мода», «Конфликты», «Флаги» и т. д.). Так вы можете
              включать отображение определенных столбцов или отключать их.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Проверьте «Содержимое». Наведите курсор на заголовок столбца и у вас появится
              всплывающее окно с информацией о том, что это за столбец и для чего он нужен.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          На левой панели также будут отображаться конфликты файлов. Однако по умолчанию он не
          сравнивает отдельные файлы с файлами, расположенными в BSA. Хотя это еще не совсем точно,
          есть настройка, которая позволит провести это сравнение. Это может быть включено с
          помощью:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Зайдите в настройки Mod Organizer 2.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Перейдите на вкладку «Способы обхода».</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В категории «Опции» установите флажок «Включить обработку архивов (экспериментальная
              функция)». Хотя это еще не совсем точно, это покажет конфликты с архивами BSA в
              столбце Конфликты на левой панели.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Наконец, возможность видеть метаинформацию — удобочитаемые имена файлов и версии
          загруженных файлов — может быть неоценимой при устранении неполадок. Кроме того, по
          умолчанию в списке загрузок есть МНОГО неиспользуемого пространства, которое можно сжать.
          Эти два элемента можно включить с помощью:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Зайдите в настройки Mod Organizer 2, вкладка Общие.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В категории «Список загрузок» установите флажки «Показать мета-информацию» и
              «Компактный список». При отображении метаинформации будут отображаться удобочитаемые
              имена файлов, а также версия файла на вкладке «Загрузки» правой панели. Компактный
              список избавит вас от ненужных пробелов во вкладке «Загрузки» и поместит на экране
              сразу больше файлов.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Не забудьте нажать кнопку <TextHighlight>OK</TextHighlight>, чтобы сохранить
              изменения.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>
      <Message type="notification">
        В зависимости от вашей конкретной практики загрузки, объем загрузки модов может превышать
        100 Гб данных. Если вы установили MO2 на относительно небольшой диск (например, небольшой
        твердотельный накопитель), вам следует рассмотреть возможность изменения местоположения
        хранилища загрузки MO2 на более крупное местоположение. Это можно сделать, создав папку в
        нужном месте, открыв интерфейс настроек MO2, выбрав вкладку «Пути» и изменив путь «Загрузки»
        в соответствии с только что созданной папкой.
      </Message>
      <Message type="notification">
        Предыдущее сообщение предложено Lexy, однако я использую SSD с больший объемом и меняю путь
        загрузок на стандартную папку загрузок Windows. В Windows 11 (наверное и в 10) есть
        возможность самоочищения папки загрузок, что позволяет не беспокоиться о ее заполнении.
      </Message>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Создание профиля в Mod Organizer 2</TextEmphasis>
        </Paragraph>

        <Paragraph>
          «Профили» — это функция Mod Organizer 2, которая позволяет использовать несколько «версий»
          модифицированной установки Skyrim в некоторых пределах. Мы будем использовать его в
          основном для помощи в создании объединенных плагинов на поздних этапах установки
          руководства. На этом этапе потребуется процесс создания нового профиля, но сейчас мы
          создадим базовый профиль, чтобы ознакомить вас с необходимыми шагами.
        </Paragraph>

        <Paragraph>
          По умолчанию MO2 использует профиль "Default". Мы создадим "Ванильный" профиль, который
          будет использоваться для определения рабочей базы и для устранения неполадок.
        </Paragraph>

        <Paragraph>Создаём профиль "Vanilla"</Paragraph>
        <OrderedList>
          <ListItem>
            <Paragraph>
              Найдите и нажмите кнопку <TextHighlight>«Настроить профили»</TextHighlight> (в
              большинстве тем MO2 она отображается в виде значка, похожего на человечка, но он может
              отличаться).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В окне "Профили" выберите <TextHighlight>"Создать"</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Во всплывающем окне введите <TextHighlight>Vanilla Skyrim SE</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что флажок <TextHighlight>«Настройки INI игры по умолчанию»</TextHighlight>{' '}
              снят.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите <TextHighlight>OK</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что <TextHighlight>Vanilla Skyrim SE</TextHighlight> отображается в списке
              слева.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что установлен флажок{' '}
              <TextHighlight>Использовать привязанные к профилю сохранения</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что установлен флажок{' '}
              <TextHighlight>Использовать привязанные к профилю INI-файлы</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Выйдите из окна "Профили", нажав клавишу <TextHighlight>Закрыть</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В выпадающем списке «Профиль» над списком модов (также известном как «левая панель»)
              выберите <TextHighlight>Vanilla Skyrim SE</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Снова перейдите в настройки профилей.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите и выделите профиль по умолчанию <TextHighlight>(Default)</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите <TextHighlight>Удалить</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В появившемся всплывающем окне выберите <TextHighlight>Да</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Выйдите из окна "Профили", нажав клавишу <TextHighlight>Закрыть</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Убедитесь, что <TextHighlight>Vanilla Skyrim SE</TextHighlight> отображается как
              выбранный профиль (показан над левой панелью).
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Интеграция инструментов в Mod Organizer 2</TextEmphasis>
        </Paragraph>

        <Paragraph>
          Последним важным шагом является настройка многих ранее установленных инструментов для
          работы в Mod Organizer. Запуск этих инструментов через лаунчер Mod Organizer 2 позволит
          другим инструментам использовать виртуальную файловую систему (VFS) и видеть файлы из
          установленных модов так же, как это делает игра при запуске и загрузке.
        </Paragraph>

        <Message type="notification">
          Некоторые программы, которые были установлены, будут автоматически обнаружены MO2. К ним
          относятся SKSE, Skyrim, Skyrim Launcher и Creation Kit. Они появятся в программе запуска
          MO2 (прямо над правой панелью) и предварительно настроены. LOOT также может быть
          обнаружен, но последние изменения в программе могут потребовать от вас создания
          исполняемого файла. В этом случае приведенные ниже инструкции также относятся к LOOT.
        </Message>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Найдите и нажмите кнопку <TextHighlight>«Исполняемые файлы»</TextHighlight> (в Fluent
              теме она выглядит как {'</>'}).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Появится всплывающее окно. Найдите и нажмите кнопку "+ (
              <TextHighlight>Добавить исполняемый файл</TextHighlight>)".
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Во всплывающем окне выберите <TextHighlight>«Добавить из файла...»</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В открывшейся папке Windows перейдите к <TextHighlight>SSEEdit64.exe</TextHighlight> в
              ее установленном месте и дважды щелкните по ней.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Выберите <TextHighlight>«Применить»</TextHighlight> в правом нижнем углу всплывающего
              окна.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Повторите шаги с 1 по 6 для <TextHighlight>SSEEditQuickAutoClean.exe</TextHighlight>,{' '}
              <TextHighlight>Wrye Bash</TextHighlight>, <TextHighlight>Synthesis</TextHighlight>,{' '}
              <TextHighlight>zEdit</TextHighlight> и <TextHighlight>LOOT</TextHighlight>, выбирая
              соответствующий исполняемый файл в каждом случае.
            </Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                В поле аргумента <TextHighlight>"SSEdit"</TextHighlight> добавьте{' '}
                <TextHighlight>-appMode="merge"</TextHighlight>.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                В поле аргумента <TextHighlight>"zEdit"</TextHighlight> добавьте{' '}
                <TextHighlight>-C:"(Буква диска):\(Путь до папки)\SSEEdit\CACHE\"</TextHighlight>.{' '}
                Скобки не нужны, ими я только обозначаю что там нужно писать.
              </Paragraph>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Paragraph>
              После того, как все программы будут добавлены, нажмите на кнопку{' '}
              <TextHighlight>«ОК»</TextHighlight> в правом нижнем углу окна{' '}
              <TextHighlight>«Изменить исполняемый файл»</TextHighlight>.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Первичный порядок загрузки</TextEmphasis>
        </Paragraph>

        <Paragraph>
          Skyrim: SE автоматически загрузит и установит базовую игру и DLC-файлы для Skyrim. MO2
          обнаружит эти файлы, но будет упорядочивать их, что не является желаемым порядком
          загрузки. Вы также заметите, что под заголовком "категория" все они будут указаны как
          "Non-MO", что указывает на то, что эти файлы находятся в базовом каталоге Skyrim, а НЕ в
          системе модов MO2. Но сейчас мы это подправим.
        </Paragraph>

        <Mod modName="Kezyma's Curation Club for Mod Organizer" />

        <OrderedList>
          <ListItem>
            <Paragraph>
              После установки плагина Curation Club в разделе инструментов MO2 должен появиться
              пункт Curation Club. Выберите его.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Во всплывающем окне поставьте флажок Root Builder Support и нажмите
              <TextHighlight>OK</TextHighlight>.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Теперь все дополнения из Creation Club станут модами в MO2. Активируйте их, нажав на
              флажок перед названием (либо выделив все моды и выбрав Включить выбранное).
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          <TextHighlight underline>
            1. При первоначальном обнаружении Skyrim DLC активы будут размещены в неправильном
            порядке. Их следует отсортировать.
          </TextHighlight>
        </Paragraph>

        <Paragraph>На левой панели перетащите файлы в следующем порядке (сверху вниз):</Paragraph>
        <UnorderedList>
          <ListItem>
            <Paragraph>Клуб творчества: _ResourcePack</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>DLC: Dawnguard</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>DLC: HearthFires</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>DLC: Dragonborn</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Все моды из Creation Club</Paragraph>
          </ListItem>
        </UnorderedList>

        <Paragraph>
          <TextHighlight underline>
            2. Порядок загрузки плагинов Skyrim DLC может быть подтвержден LOOT.
          </TextHighlight>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              В выпадающем списке исполняемых файлов (справа, над списком плагинов) выберите LOOT.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Нажмите кнопку Запустить.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              После того, как загрузка LOOT завершится, найдите кнопку «Сортировать плагины» в
              верхнем левом углу и нажмите на нее. Его иконка представляет собой три горизонтальные
              линии друг над другом.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>LOOT отсортирует ваш текущий заказ на погрузку.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите «Применить отсортированный порядок загрузки», чтобы принять сгенерированный
              LOOT заказ на погрузку (если LOOT внес какие-либо изменения). Если изменения не
              вносились (что случается изредка), кнопка «Применить» может не появиться. Это
              нормально и не вызывает беспокойства.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Закройте LOOT с помощью кнопки <TextHighlight>X</TextHighlight> в правом верхнем углу
              окна LOOT.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TextBlock>
        <Paragraph>Этот процесс научил вас трем процессам:</Paragraph>
        <UnorderedList>
          <ListItem>
            <Paragraph>Как вручную перемещать элементы вашего заказа на загрузку.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Загрузка LOOT через Mod Organizer. Этот же процесс применяется ко всем программам,
              загруженным через MO2, и не будет повторяться на других этапах в процессе установки
              моддинга. Если инструмент необходимо загрузить каким-либо другим способом, эти
              инструкции будут записаны при необходимости.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Сортировка заказа на загрузку с помощью LOOT. Это будет сделано только один раз в
              руководстве, ближе к концу процесса. Тем не менее, этот процесс универсален для ЛЮБОГО
              списка модов и может быть применен во многих других обстоятельствах.
            </Paragraph>
          </ListItem>
        </UnorderedList>
      </TextBlock>
      <Message type="notification">
        Профиль Vanilla Skyrim SE теперь настроен правильно. Этот профиль следует сохранить для
        возможных целей устранения неполадок, но в противном случае оставить в покое.
      </Message>

      <TextBlock>
        <Paragraph>
          <TextEmphasis>Создание профиля Legacy Of The Dragonborn</TextEmphasis>
        </Paragraph>

        <Paragraph>
          На данный момент мы установили и настроили Mod Organizer 2 для работы со всеми
          необходимыми инструментами и загрузки с ванильным профилем. У вас также есть возможность
          загрузить Skyrim SE одним щелчком мыши, что может быть полезно для устранения неполадок,
          но не очень хорошо для игры в модифицированную игру. Следующее, что нужно сделать, это
          создать новый профиль, в который мы будем устанавливать все моды.
        </Paragraph>

        <Paragraph>
          <TextHighlight underline>1. Создайте модифицированный профиль Skyrim</TextHighlight>
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Следуя приведенным ранее инструкциям по созданию ванильного профиля, создайте новый
              профиль с именем "Legacy of the Dragonborn - Special Edition" (или другим именем по
              вашему выбору).
            </Paragraph>
          </ListItem>
          <UnorderedList>
            <ListItem>
              <Paragraph>
                Убедитесь, что установлен флажок{' '}
                <TextHighlight>Использовать привязанные к профилю INI-файлы</TextHighlight>.
              </Paragraph>
            </ListItem>
            <UnorderedList>
              <ListItem>
                <Paragraph>
                  Когда вы создаете новый профиль, Mod Organizer создает новые копии Skyrim.ini и
                  SkyrimPrefs.ini для использования этим профилем и только этим профилем. Если и
                  когда вы вносите изменения в эти файлы через MO2, вы будете вносить изменения в
                  версии этих файлов, относящиеся к профилю, а не в те, которые находятся в вашем
                  каталоге «Документы».
                </Paragraph>
              </ListItem>
            </UnorderedList>
            <ListItem>
              <Paragraph>
                Кроме того, убедитесь, что в каждом новом профиле установлен флажок{' '}
                <TextHighlight>Использовать привязанные к профилю сохранения</TextHighlight>.
              </Paragraph>
            </ListItem>
          </UnorderedList>

          <ListItem>
            <Paragraph>
              Обратите внимание, что изменение порядка DLC из базовой игры, которое мы сделали для
              Vanilla Profile, НЕ ПЕРЕНОСИТСЯ. Поэтому вам нужно будет сделать это снова для нового
              профиля.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Конфигурация xEdit" />

      <TextBlock>
        <Paragraph>В MO2 запустите SSEEdit и выполните следующие действия:</Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Во всплывающем окне нажмите <TextHighlight>OK</TextHighlight>, чтобы загрузить
              выбранные плагины (в самую первую загрузку ещё может появиться рекламное окно, его
              можно просто закрыть).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Дождитесь загрузки плагинов. Вы увидите сообщение{' '}
              <TextHighlight>Background Loader: finished</TextHighlight>, когда загрузка программы
              завершится.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Щелкните правой кнопкой мыши любой плагин в списке в левой части экрана.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Во всплывающем меню перейдите в раздел <TextHighlight>Other → Options</TextHighlight>;
              Должно появиться новое всплывающее окно.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Снимите галочку с{' '}
              <TextHighlight>
                Simple records LAND, NAVI, NAVM, CELL, WRLD (requires restart)
              </TextHighlight>
              .
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Нажмите OK.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Выйдите из SSEEdit.</Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Также в Options вы можете перейти на вкладку UI Theme и настроить тему по вашему вкусу (у
          меня выбрана Windows 11 Modern Dark).
        </Paragraph>
      </TextBlock>

      <NavigationControls
        prevPage={{ to: '/commoninstructions', name: 'Общие инструкции' }}
        nextPage={{ to: '/preinstall', name: 'Установка модов - Часть 1' }}
      />
    </>
  );
};

export default PreInstallPage;
