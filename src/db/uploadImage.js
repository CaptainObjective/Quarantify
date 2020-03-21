import { storage } from 'firebase';

export const uploadImage = async (photo, folderName = 'NotAssigned') => {
  try {
    const photoRef = storage().ref(folderName + '/' + photo.name);
    await photoRef.put(photo);
    const url = await photoRef.getDownloadURL();
    return url;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
