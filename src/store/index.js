import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

const addRegister = (set, register) => {
  set(state => ({
    lastRegisters: [...state.lastRegisters, register]
  }), false, 'addRegister');
};

const store = create(
  devtools(
    persist(
      (set) => ({
        lastRegisters: [],
        addRegister: register => addRegister(set, register)
      }),
      {
        name: 'small-biz-store'
      }
    )
  )
);

export const useStoreForApp = store;