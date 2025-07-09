import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { ModStore } from './modStore';

export class RootStore {
  modStore: ModStore;

  constructor() {
    this.modStore = new ModStore();
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();

// React Context для store
export const StoreContext = createContext(rootStore);

// Hook для использования store в компонентах
export const useStore = () => {
  return useContext(StoreContext);
};
