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
  const registerQuery = query(regCollection, orderBy('createdAt', 'desc'), limit(howMany));
  return await getDocs(registerQuery);
};

const streamRegisters = (howMany, snapshot, error) => {
  const regCollection = collection(db, 'registers');
  const registersQuery = query(regCollection, orderBy('date', 'desc'), limit(howMany));
  return onSnapshot(registersQuery, snapshot, error);
};

const addBusiness = async (business) => {
  const bizCollection = collection(db, 'businesses');
  return await addDoc(
    bizCollection,
    {
      ...business,
      createdAt: Timestamp.now()
    }
  );
};

const streamBusinesses = (snapshot, error) => {
  const businessCollection = collection(db, 'businesses');
  const businessQuery = query(businessCollection, orderBy('createdAt', 'desc'));
  return onSnapshot(businessQuery, snapshot, error);
};

export {
  getRegisters,
  addRegister,
  streamRegisters,
  addBusiness,
  streamBusinesses
};