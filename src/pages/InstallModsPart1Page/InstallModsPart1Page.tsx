import type { FC } from 'react';
import NavigationControls from '../../components/NavigationControls/NavigationControls';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Mod from '../../components/Mod/Mod';

// Компонент страницы "Установка модов - Часть 1"
const InstallModsPart1Page: FC = () => {
  return (
    <>
      <TitleBlock title="Оптимизированные базовые текстуры" />

      <Mod modName="Project Clarity AIO - Skyrim Textures Redone" />

      <Mod modName="Creation Club Anniversary Cleaned and Upscaled" />

      <TitleBlock title="Фреймворки расширений - Исправления к движку" />

      <Mod modName="Address Library for SKSE Plugins" />

      <Mod modName="SSE Engine Fixes (skse64 plugin)" />

      <Mod modName="Actor Limit Fix" />

      <Mod modName="Barter Limit Fix" />

      <Mod modName="Bug Fixes SSE" />

      <NavigationControls
        prevPage={{ to: '/preinstall', name: 'Предустановки' }}
        nextPage={{ to: '/installmodspart1', name: 'Установка модов — Часть 2 (заглушка)' }}
      />
    </>
  );
};

export default InstallModsPart1Page;
