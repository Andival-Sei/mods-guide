import { supabase } from '../lib/supabase';
import type { ModFile, ModProps } from '../components/Mod/Mod';

export async function getModByName(name: string): Promise<ModProps | null> {
  try {
    // Используем RPC функцию для получения основной информации о моде
    const { data, error: modError } = await supabase.rpc('get_mod_by_exact_name', {
      mod_name: name,
    });

    if (modError) {
      return null;
    }

    // RPC может вернуть массив, даже если результат один объект
    const mod = Array.isArray(data) ? data[0] : data;

    if (!mod) {
      return null;
    }

    // Получаем файлы мода
    const { data: files, error: filesError } = await supabase
      .from('mod_files')
      .select('*')
      .eq('mod_name', name);

    if (filesError) {
      return null;
    }

    // Получаем теги мода
    const { data: tagData, error: tagsError } = await supabase
      .from('mod_tags')
      .select('tag')
      .eq('mod_name', name);

    if (tagsError) {
      return null;
    }

    // Преобразуем теги в нужный формат
    const tags = tagData.map((t) => t.tag);

    // Собираем все данные в формат ModProps
    return {
      name: mod.name,
      version: mod.version,
      author: mod.author,
      description: mod.description,
      downloadLink: mod.downloadlink || mod.downloadLink, // Учитываем возможное различие в регистре
      files: files as ModFile[],
      tags: tags,
    };
  } catch (error) {
    return null;
  }
}

// Функция для получения списка всех модов
export async function getAllMods(): Promise<ModProps[]> {
  try {
    const { data: mods, error } = await supabase.from('mods').select('*');

    if (error) {
      return [];
    }

    // Получаем файлы и теги для каждого мода
    const modsWithDetails = await Promise.all(
      mods.map(async (mod) => {
        return await getModByName(mod.name);
      })
    );

    return modsWithDetails.filter((mod) => mod !== null) as ModProps[];
  } catch (error) {
    return [];
  }
}

// Функция для добавления нового мода
export async function addMod(mod: ModProps): Promise<boolean> {
  try {
    // Добавляем основную информацию о моде
    const { error: modError } = await supabase.from('mods').insert([
      {
        name: mod.name,
        version: mod.version,
        author: mod.author,
        description: mod.description,
        downloadLink: mod.downloadLink,
      },
    ]);

    if (modError) {
      return false;
    }

    // Добавляем файлы мода
    if (mod.files && mod.files.length > 0) {
      const filesData = mod.files.map((file) => ({
        mod_name: mod.name,
        type: file.type,
        name: file.name,
        version: file.version,
      }));

      const { error: filesError } = await supabase.from('mod_files').insert(filesData);

      if (filesError) {
        return false;
      }
    }

    // Добавляем теги мода
    if (mod.tags && mod.tags.length > 0) {
      const tagsData = mod.tags.map((tag) => ({
        mod_name: mod.name,
        tag: tag,
      }));

      const { error: tagsError } = await supabase.from('mod_tags').insert(tagsData);

      if (tagsError) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}
