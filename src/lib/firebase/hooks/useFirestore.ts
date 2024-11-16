import { 
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  QueryConstraint
} from 'firebase/firestore';
import { db } from '../config';
import { useCallback } from 'react';
import { handleError } from '../utils/error-handler';
import { ApiResponse } from '../types';

export const useFirestore = <T extends { id?: string }>(collectionName: string) => {
  const getAll = useCallback(async (constraints?: QueryConstraint[]): Promise<ApiResponse<T[]>> => {
    try {
      const collectionRef = collection(db, collectionName);
      const q = constraints ? query(collectionRef, ...constraints) : collectionRef;
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
      return { data, error: null };
    } catch (error) {
      return { data: null, error: handleError(error) };
    }
  }, [collectionName]);

  const getOne = useCallback(async (id: string): Promise<ApiResponse<T>> => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        return {
          data: null,
          error: {
            message: 'Document not found',
            code: 'NOT_FOUND'
          }
        };
      }
      const data = { id: docSnap.id, ...docSnap.data() } as T;
      return { data, error: null };
    } catch (error) {
      return { data: null, error: handleError(error) };
    }
  }, [collectionName]);

  const add = useCallback(async (data: Omit<T, 'id'>): Promise<ApiResponse<T>> => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      const newDoc = { id: docRef.id, ...data } as T;
      return { data: newDoc, error: null };
    } catch (error) {
      return { data: null, error: handleError(error) };
    }
  }, [collectionName]);

  const update = useCallback(async (id: string, data: Partial<T>): Promise<ApiResponse<T>> => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data as any);
      return { data: { id, ...data } as T, error: null };
    } catch (error) {
      return { data: null, error: handleError(error) };
    }
  }, [collectionName]);

  const remove = useCallback(async (id: string): Promise<ApiResponse<boolean>> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return { data: true, error: null };
    } catch (error) {
      return { data: null, error: handleError(error) };
    }
  }, [collectionName]);

  return {
    getAll,
    getOne,
    add,
    update,
    remove
  };
};