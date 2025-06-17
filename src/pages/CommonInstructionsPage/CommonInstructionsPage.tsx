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
import UnorderedList from '../../components/UnorderedList/UnorderedList.tsx';

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

      <TitleBlock title="Извлечение файлов BSA" />

      <TextBlock>
        <Paragraph>
          Файл Bethesda Softworks Archive (BSA) — это тип файла сжатия (аналогичный ZIP, 7ZIP или
          аналогичному файлу), который Skyrim использует для хранения ресурсов, используемых файлом
          плагина. Обычно это включает в себя такие вещи, как файлы текстур, звуковые файлы, скрипты
          и другие подобные ресурсы. В большинстве случаев, если автор модификаций (MA) упаковывает
          свои активы в BSA, мы оставляем его в покое и позволяем ему работать так, как он был
          задуман.
        </Paragraph>

        <Paragraph>
          Для целей текущего руководства мы будем извлекать файлы BSA в нескольких случаях:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              BSA поставляется с файлом плагина "Dummy". Это означает, что в файле плагина нет
              фактических записей, и что файл плагина существует только для того, чтобы BSA был
              прочитан игрой. В этом нет никакой необходимости, поэтому в этой ситуации мы извлечем
              BSA и удалим плагин.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Мы будем использовать плагин как часть Merge - слияния, что лишит файл плагина
              возможности считывать этот BSA, что означает, что активы останутся неиспользованными.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Для этого мы будем использовать плагин BSA Extractor, который входит в состав Mod
          Organizer 2. Есть два способа добиться этого.
        </Paragraph>

        <Paragraph>
          <TextHighlight underline>Вариант 1: Обычный, автомагический способ</TextHighlight>
        </Paragraph>

        <Paragraph>
          Плагин включен по умолчанию, но мы хотим изменить одну из настроек плагина, выполнив
          следующие действия:
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Нажмите на значок «гаечный ключ и отвертка» в левом верхнем углу MO2.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Перейдите на вкладку Плагины.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Найдите и выберите плагин BSA Extractor.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              С правой стороны убедитесь, что для параметра{' '}
              <TextHighlight>only_alternate_source</TextHighlight> установлено значение false.
            </Paragraph>
          </ListItem>
        </OrderedList>

        <Paragraph>
          Каждый раз, когда устанавливается мод, содержащий файл BSA, появляется запрос с вопросом,
          хотите ли вы извлечь файл BSA. Есть три варианта -{' '}
          <TextHighlight>будьте внимательны, какую кнопку вы нажимаете.</TextHighlight> Для модов,
          которые вы хотите извлечь (помечены значком тегом),{' '}
          <TextHighlight>ВЫБЕРИТЕ ДА.</TextHighlight> Будьте осторожны и не отключите подсказку!
          Если вы это сделаете, вы можете снова включить их на вкладке «Общие» в разделе
          «Настройки», нажав кнопку «Сбросить выбор диалогового окна».
        </Paragraph>
        <Paragraph>
          Запрос BSA Extractor также спросит, хотите ли вы удалить BSA после извлечения - выберите
          Да для этого тоже.
        </Paragraph>
        <Paragraph>
          Для всех остальных модов <TextHighlight>ВЫБЕРИТЕ НЕТ.</TextHighlight>
        </Paragraph>
        <Paragraph>
          На этом этапе вы получите уведомление во время установки для любого мода, который включает
          BSA, с вопросом, хотите ли вы извлечь его. Если в инструкциях указано, что это необходимо,
          нажмите «Да»; в противном случае нажмите кнопку Нет. В последней версии MO2 экстрактор BSA
          также спросит, хотите ли вы удалить BSA после его извлечения. Скажите «да».
        </Paragraph>
        <Paragraph>
          <TextHighlight underline>Вариант 2: Ручной способ</TextHighlight>
        </Paragraph>
        <Paragraph>
          Если вы случайно отключили приглашение или по какой-то другой причине поняли, что не
          извлекли нужный BSA, вы можете сделать это вручную.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>Выберите вкладку «Архив» на правой панели MO2.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Прокрутите список архивов BSA (они перечислены вместе с файлом плагина, с которым они
              связаны).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Как только вы найдете файл, который хотите извлечь,{' '}
              <TextHighlight>щелкните правой кнопкой</TextHighlight> мыши имя файла и выберите{' '}
              <TextHighlight>ИЗВЛЕЧЬ.</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Вам будет предложено указать место извлечения. Найдите папку, которая совпадает с
              названием мода, с которым связана BSA.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Файлы будут извлечены, но BSA-файл все еще будет присутствовать. Его можно удалить из
              своего местоположения с помощью обычных методов проводника.
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Cathedral Assets Optimizer" />

      <TextBlock>
        <Paragraph>
          Последняя общая задача, которая появится в руководстве для работы, — это запуск мода через
          Cathedral Asset Optimizer (CAO). Как упоминалось в разделе «Конвертация плагинов»,
          некоторые из модов, которые мы используем, взяты из Skyrim: LE, а сетки и текстуры,
          которые с ними связаны, не всегда хорошо сочетаются со Skyrim: SE. Чтобы ваша игровая
          система не взорвалась, было создано несколько различных профилей:
        </Paragraph>

        <UnorderedList>
          <ListItem>
            <Paragraph>
              Lexy's LOTD SE - BSA: Оптимизирует сетки и текстуры, а затем упаковывает их в BSA.
            </Paragraph>
            <Paragraph>
              Lexy's LOTD SE - No BSA: Оптимизирует сетки и текстуры, но оставляет их в виде
              свободных файлов.
            </Paragraph>
            <Paragraph>
              Lexy's LOTD SE - WICO: Специально настроен для оптимизации сеток и текстур для WICO -
              Windsong Immersive Character Overhaul, следуя специальным инструкциям руководства для
              него.
            </Paragraph>
            <Paragraph>
              SSE - Downsize Textures - 1K: Уменьшает любую текстуру, размер которой превышает 1024
              x 1024, до 1K. Если вы попытаетесь сохранить немного видеопамяти, не стесняйтесь
              использовать этот профиль для уменьшения некоторых текстур там, где вы считаете это
              целесообразным.
            </Paragraph>
            <Paragraph>
              SSE - Downsize Textures - 2K: Уменьшает любую текстуру, размер которой превышает 2048
              x 2048, до 2K. Если вы попытаетесь сохранить немного видеопамяти, не стесняйтесь
              использовать этот профиль для уменьшения некоторых текстур там, где вы считаете это
              целесообразным.
            </Paragraph>
          </ListItem>
        </UnorderedList>

        <Paragraph>
          Моды, требующие такой обработки, будут иметь тег CAO вместе с тем, какой профиль вам
          следует использовать.
        </Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              <TextHighlight>ЗАКРОЙТЕ MO2.</TextHighlight> CAO предназначен для работы ВНЕ Mod
              Organizer. Не стоит его минимизировать. ЗАКРОЙТЕ ЕГО.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Запустите CAO из исполняемого файла в папке установки.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Посмотрите на мод Особые указания. В нем будет указан тип профиля для использования в
              CAO. Убедитесь, что вы используете правильный профиль.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите на кнопку <TextHighlight>«Открыть каталог».</TextHighlight> Перейдите в папку
              с модом, который требует конвертации. Выберите эту папку.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите на кнопку <TextHighlight>«Журнал».</TextHighlight> Это покажет вам, что будет
              обрабатывать CAO.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите кнопку <TextHighlight>Выполнить.</TextHighlight>
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Когда CAO завершит свой прогон, закройте программу.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Повторите шаги 2 - 7 для всех загруженных файлов для этого мода (основных,
              необязательных и прочих).
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <TitleBlock title="Mod Organizer 2 Removal Tool" />

      <TextBlock>
        <Paragraph>
          Последняя общая задача, которая появится в Руководстве для работы, — это запуск мода через
          Mod Organizer Removal Tool. Инструмент упрощает удаление файлов из модов.
        </Paragraph>
        <Paragraph>Моды, требующие такой обработки, будут иметь соответствующий тег.</Paragraph>

        <OrderedList>
          <ListItem>
            <Paragraph>
              Выберите опцию "MO2 Removal Tool" в меню инструментов на панели инструментов MO2
              (значок головоломки).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Посмотрите на мод Особые указания. В нем будут перечислены все файлы, которые
              необходимо удалить.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Введите название мода, из которого вы хотите удалить файлы/папки (последний мод в
              вашем списке модов выбран по умолчанию).
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Скопируйте и вставьте контуры в поле под селектором мода.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>Нажмите кнопку Выполнить. Откроется еще одно диалоговое окно.</Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Просмотрите файлы, которые будут удалены. Все пути с подстановочными знаками будут
              развернуты, чтобы показать, какие файлы были выбраны.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              Нажмите «Удалить все», чтобы завершить удаление. Обратите внимание, что вы также
              можете инвертировать выбор, чтобы удалить все, КРОМЕ того, что вы изначально ввели.
              ЭТО ЭКСПЕРИМЕНТАЛЬНО. Помните, что вы НЕ МОЖЕТЕ отменить удаление из этого
              инструмента, я лично рекомендую использовать опцию "mohidden" при использовании этой
              функции.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              В корневой папке мода будет создан файл для регистрации сделанных вами удалений. Файл
              будет называться {`{ modName }`}. {`{ 'delete' | 'mohidden'}`}.log
            </Paragraph>
          </ListItem>
        </OrderedList>
      </TextBlock>

      <NavigationControls
        prevPage={{ to: '/welcome', name: 'Знакомство' }}
        nextPage={{ to: '/preinstall', name: 'Предустановки' }}
      />
    </>
  );
};

export default CommonInstructionsPage;
