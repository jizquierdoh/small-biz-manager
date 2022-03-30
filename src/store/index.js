import create from 'zustand';
import { devtools } from 'zustand/middleware'

const setRegistersList = (set, list) => {
  set(() => ({
    lastRegisters: list
  }), false, 'setRegistersList');
};

const addRegister = (set, register) => {
  set(state => ({
    lastRegisters: [...state.lastRegisters, register]
  }), false, 'addRegister');
};

const store = create(
  devtools(
    (set) => ({
      lastRegisters: [],
      setRegistersList: list => setRegistersList(set, list),
      addRegister: register => addRegister(set, register)
    })
  )
);

export const useStoreForApp = store;