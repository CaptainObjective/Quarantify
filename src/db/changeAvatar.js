import { firestore } from 'firebase';

export const changeAvatar = async (userId, url) => {
  try {
    const userRef = await firestore()
      .collection('Users')
      .doc(userId)
      .set({ avatar: url }, { merge: true });
    return userRef;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
