import { type ModProps } from '../components/Mod/Mod';

// Импорт всех секций модов для InstallModsPart1Page
import { optimizedBaseTextures } from './InstallModsPart1Sections/OptimizedBaseTextures';
import { engineFixes } from './InstallModsPart1Sections/EngineFixes';
import { extendedFunctionality } from './InstallModsPart1Sections/ExtendedFunctionality';
import { animationBehaviorEngine } from './InstallModsPart1Sections/AnimationBehaviorEngine';
import { perksProgression } from './InstallModsPart1Sections/PerksProgression';
import { unofficialPatches } from './InstallModsPart1Sections/UnofficialPatches';
import { basicBugFixes } from './InstallModsPart1Sections/BasicBugFixes';
import { interfaceConsole } from './InstallModsPart1Sections/InterfaceConsole';
import { interfaceMenu } from './InstallModsPart1Sections/InterfaceMenu';
import { interfaceHUD } from './InstallModsPart1Sections/InterfaceHUD';
import { interfaceIcons } from './InstallModsPart1Sections/InterfaceIcons';
import { interfaceCamera } from './InstallModsPart1Sections/InterfaceCamera';
import { interfaceControls } from './InstallModsPart1Sections/InterfaceControls';
import { characterCreation } from './InstallModsPart1Sections/CharacterCreation';
import { worldMap } from './InstallModsPart1Sections/WorldMap';
import { dynamicLOD } from './InstallModsPart1Sections/DynamicLOD';
import { newLandsQuests } from './InstallModsPart1Sections/NewLandsQuests';

// Объединение всех секций модов для InstallModsPart1Page
export const installModsPart1Mods: ModProps[] = [
  ...optimizedBaseTextures,
  ...engineFixes,
  ...extendedFunctionality,
  ...animationBehaviorEngine,
  ...perksProgression,
  ...unofficialPatches,
  ...basicBugFixes,
  ...interfaceConsole,
  ...interfaceMenu,
  ...interfaceHUD,
  ...interfaceIcons,
  ...interfaceCamera,
  ...interfaceControls,
  ...characterCreation,
  ...worldMap,
  ...dynamicLOD,
  ...newLandsQuests,
];
