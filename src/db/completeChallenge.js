import { firestore } from 'firebase';

export const completeChallenge = async (id, url) => {
  try {
    const challenge = await firestore()
      .collection('Challenges')
      .doc(id)
      .set({ photo: url, markedForReview: true }, { merge: true });
    return challenge;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
