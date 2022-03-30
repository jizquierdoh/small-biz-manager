import { db } from './firebase'
import { collection, addDoc, Timestamp, getDocs, orderBy, limit, query, onSnapshot } from 'firebase/firestore'

const addRegister = async (register) => {
  const regCollection = collection(db, 'registers');
  return await addDoc(
    regCollection,
    {
      ...register,
      createdAt: Timestamp.now()
    });
};

const getRegisters = async (howMany) => {
  const regCollection = collection(db, 'registers');
  const q = query(regCollection, orderBy('createdAt', 'desc'), limit(howMany));
  return await getDocs(q);
};

const observeRegisters = (howMany, snapshot, error) => {
  const regCollection = collection(db, 'registers');
  const q = query(regCollection, orderBy('date', 'desc'), limit(10));
  return onSnapshot(q, snapshot, error);
};

export { getRegisters, addRegister, observeRegisters };