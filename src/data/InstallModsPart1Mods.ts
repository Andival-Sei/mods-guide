import { type ModProps } from '../components/Mod/Mod';

// Импорт всех секций модов для InstallModsPart1Page
import { optimizedBaseTextures } from './InstallModsPart1Sections/01-OptimizedBaseTextures';
import { engineFixes } from './InstallModsPart1Sections/02-EngineFixes';
import { extendedFunctionality } from './InstallModsPart1Sections/03-ExtendedFunctionality';
import { animationBehaviorEngine } from './InstallModsPart1Sections/04-AnimationBehaviorEngine';
import { perksProgression } from './InstallModsPart1Sections/05-PerksProgression';
import { unofficialPatches } from './InstallModsPart1Sections/06-UnofficialPatches';
import { basicBugFixes } from './InstallModsPart1Sections/07-BasicBugFixes';
import { interfaceConsole } from './InstallModsPart1Sections/08-InterfaceConsole';
import { interfaceMenu } from './InstallModsPart1Sections/09-InterfaceMenu';
import { interfaceHUD } from './InstallModsPart1Sections/10-InterfaceHUD';
import { interfaceCamera } from './InstallModsPart1Sections/11-InterfaceCamera';
import { interfaceControls } from './InstallModsPart1Sections/12-InterfaceControls';
import { characterCreation } from './InstallModsPart1Sections/13-CharacterCreation';
import { worldMap } from './InstallModsPart1Sections/14-WorldMap';
import { dynamicLOD } from './InstallModsPart1Sections/15-DynamicLOD';
import { newLandsQuests } from './InstallModsPart1Sections/16-NewLandsQuests';

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
  ...interfaceCamera,
  ...interfaceControls,
  ...characterCreation,
  ...worldMap,
  ...dynamicLOD,
  ...newLandsQuests,
];
