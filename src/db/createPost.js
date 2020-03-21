import { firestore } from 'firebase';

export const createPost = async (userId, text, url = null) => {
  try {
    const userRef = firestore()
      .collection('Users')
      .doc(userId);
    const newPost = await firestore()
      .collection('Posts')
      .add({
        text,
        image: url,
        author: userRef,
        timestamp: firestore.Timestamp.now()
      });
    return newPost;
  } catch (ex) {
    console.error(ex);
    return ex;
  }
};
//f9eYzQ0NZmh0OYwd62hG
