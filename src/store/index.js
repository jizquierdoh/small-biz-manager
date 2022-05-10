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

const setCurrentUser = (set, user) => {
  set(() => ({
    currentUser: user
  }), false, 'setCurrentUser');
};

const clearStore = (set) => {
  set(() => ({
    lastRegisters: [],
    businesses: [],
    currentUser: null,
    selectedBusinessId: null
  })
  );
};

const setSelectedBusinessId = (set, businessId) => {
  set(() => ({ selectedBusinessId: businessId }), false, 'setSelectedBusinessId');
};

const store = create(
  devtools(
    (set) => ({
      currentUser: null,
      selectedBusinessId: null,
      lastRegisters: [],
      businesses: [],
      setRegistersList: list => setRegistersList(set, list),
      addRegister: register => addRegister(set, register),
      setBusinessesList: list => setBusinessesList(set, list),
      addBusiness: business => addBusiness(set, business),
      setCurrentUser: user => setCurrentUser(set, user),
      clearStore: () => clearStore(set),
      setSelectedBusinessId: businessId => setSelectedBusinessId(set, businessId)
    })
  )
);

export const useStoreForApp = store;