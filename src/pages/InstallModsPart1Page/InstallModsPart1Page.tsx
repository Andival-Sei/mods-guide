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

      <Mod modName="Equip Enchantment Fix" />

      <Mod modName="Fix Note icon for SkyUI (SKSE64 plugin)" />

      <Mod modName="I'm Walkin' Here NG with Pets" />

      <Mod modName="Keyword Item Distributor (KID)" />

      <Mod modName="Mum's the Word NG" />

      <Mod modName="NPC AI Process Position Fix - NG" />

      <Mod modName="powerofthree's Papyrus Extender" />

      <Mod modName="Papyrus Tweaks NG" />

      <Mod modName="powerofthree's Tweaks" />

      <Mod modName="Recursion Monitor" />

      <Mod modName="Scaleform Translation Plus Plus NG" />

      <Mod modName="Scrambled Bugs" />

      <Mod modName="Skyrim Priority SE AE - CPU Performance FPS Optimizer" />

      <Mod modName="SSE Display Tweaks" />

      <TitleBlock title="Фреймворки расширений - Расширенная функциональность" />

      <Mod modName="Base Object Swapper" />

      <Mod modName="Behavior Data Injector" />

      <Mod modName="Behavior Data Injector Universal Support" />

      <Mod modName="Better Combat Escape - SSE" />

      <Mod modName="Better Combat Escape - NG" />

      <Mod modName="Container Distribution Framework" />

      <Mod modName="Crash Logger SSE AE VR - PDB support" />

      <Mod modName="Don't send me there again (dosemetha)" />

      <Mod modName="Dynamic String Distributor (DSD)" />

      <Mod modName="FormList Manipulator - FLM" />

      <Mod modName="Favorite Misc Items" />

      <Mod modName="MergeMapper" />

      <Mod modName="Object Categorization Framework" />

      <Mod modName="PAPER" />

      <Mod modName="Regional Save Names" />

      <Mod modName="Simple Offence Suppression" />

      <Mod modName="Skyrim Save System Overhaul 3 (SSSO 3)" />

      <Mod modName="Spell Perk Item Distributor (SPID)" />

      <Mod modName="Whose Quest is it Anyway NG" />

      <NavigationControls
        prevPage={{ to: '/preinstall', name: 'Предустановки' }}
        nextPage={{ to: '/installmodspart1', name: 'Установка модов — Часть 2 (заглушка)' }}
      />
    </>
  );
};

export default InstallModsPart1Page;
