import { firestore } from 'firebase';

export const updateScore = async (user, delta) => {
  const newAmount = user.score + delta;
  try {
    const userRef = await firestore()
      .collection('Users')
      .doc(user.id)
      .set({ score: newAmount }, { merge: true });
    return userRef;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
