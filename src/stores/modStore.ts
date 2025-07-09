import { makeAutoObservable } from 'mobx';
import { modsData } from '../data/mods';
import type { ModProps } from '../components/Mod/Mod';

export class ModStore {
  private modsMap = new Map<string, ModProps>();
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initializeMods();
  }

  private initializeMods() {
    // Загружаем все моды в Map для быстрого доступа по имени
    modsData.forEach((mod) => {
      this.modsMap.set(mod.name, mod);
    });
  }

  getMod(modName: string): ModProps | null {
    return this.modsMap.get(modName) || null;
  }

  getAllMods(): ModProps[] {
    return Array.from(this.modsMap.values());
  }

  getModsByTag(tag: string): ModProps[] {
    return this.getAllMods().filter((mod) => mod.tags?.includes(tag as any));
  }

  // Метод для поиска модов (если понадобится в будущем)
  searchMods(query: string): ModProps[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllMods().filter(
      (mod) =>
        mod.name.toLowerCase().includes(lowerQuery) ||
        mod.description.toLowerCase().includes(lowerQuery) ||
        mod.author.toLowerCase().includes(lowerQuery)
    );
  }

  // Геттер для получения общего количества модов
  get modsCount(): number {
    return this.modsMap.size;
  }

  // Метод для проверки существования мода
  hasMod(modName: string): boolean {
    return this.modsMap.has(modName);
  }
}
