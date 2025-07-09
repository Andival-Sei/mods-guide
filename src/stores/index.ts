import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

export class RootStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

export const rootStore = new RootStore();

// React Context для store
export const StoreContext = createContext(rootStore);

// Hook для использования store в компонентах
export const useStore = () => {
  return useContext(StoreContext);
};
