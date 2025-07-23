import { type ModProps } from '../components/Mod/Mod';

// Импорт модов для PreInstallPage
import { preInstallMods } from './PreInstallMods';

// Импорт модов для InstallModsPart1Page
import { installModsPart1Mods } from './InstallModsPart1Mods';

// Реэкспорт для удобства
export { preInstallMods, installModsPart1Mods };

// Объединение всех модов в один массив для обратной совместимости
export const modsData: ModProps[] = [...preInstallMods, ...installModsPart1Mods];
