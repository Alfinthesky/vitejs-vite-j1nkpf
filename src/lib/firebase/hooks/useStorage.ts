import { 
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from '../config';
import { useCallback } from 'react';

export const useStorage = (path: string) => {
  const upload = useCallback(async (file: File) => {
    try {
      const storageRef = ref(storage, `${path}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }, [path]);

  const remove = useCallback(async (fileName: string) => {
    try {
      const storageRef = ref(storage, `${path}/${fileName}`);
      await deleteObject(storageRef);
      return true;
    } catch (error) {
      console.error('Error removing file:', error);
      throw error;
    }
  }, [path]);

  return {
    upload,
    remove
  };
};