import { firestore } from 'firebase';

export const createChallenge = async (author, email) => {
  console.log(author);
  try {
    const userRef = firestore()
      .collection('Users')
      .doc(author.id);
    const newChallenge = await firestore()
      .collection('Challenges')
      .add({
        approved: false,
        author: userRef,
        markedForReview: false,
        recipientID: email,
        photo: '',
        startedOn: firestore.Timestamp.now()
      });
    return newChallenge;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
