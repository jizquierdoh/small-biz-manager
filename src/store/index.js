import create from 'zustand';
import { devtools } from 'zustand/middleware'

const setRegistersList = (set, list) => {
  set(() => ({
    lastRegisters: list ?? []
  }), false, 'setRegistersList');
};

const addRegister = (set, register) => {
  set(state => ({
    lastRegisters: [...state.lastRegisters, register]
  }), false, 'addRegister');
};

const setBusinessesList = (set, list) => {
  set(() => ({
    businesses: list ?? []
  }), false, 'setBusinessesList'
  );
};

const addBusiness = (set, business) => {
  set(state => ({
    businesses: [...state.businesses, business]
  }), false, 'addBusiness');
};

const store = create(
  devtools(
    (set) => ({
      lastRegisters: [],
      businesses: [],
      setRegistersList: list => setRegistersList(set, list),
      addRegister: register => addRegister(set, register),
      setBusinessesList: list => setBusinessesList(set, list),
      addBusiness: business => addBusiness(set, business)
    })
  )
);

export const useStoreForApp = store;