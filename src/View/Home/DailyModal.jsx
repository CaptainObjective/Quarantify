import React, { useEffect } from 'react';
import firebase from 'firebase';
import { Modal, Button } from 'semantic-ui-react';
import { styles } from './styles';

const DailyModal = ({ isOpen, closeModal, user, numberOfDays }) => {
  useEffect(() => {
    firebase
      .firestore()
      .collection('Users')
      .doc(user.id)
      .update({
        lastModalDate: new Date()
      });
  }, []);

  const getNumberOfDays = () => {
    switch (numberOfDays) {
      case 1:
        return "1'st";
      case 2:
        return "2'nd";
      case 3:
        return "3'rd";
      default:
        return `${numberOfDays}'th`;
    }
  };

  return (
    <Modal open={isOpen} style={styles.modal} centered={false}>
      <div style={styles.modalContainer}>
        <img src="/medal-2.png" style={styles.img} alt="" />
        <div style={styles.title}>{`${user?.username} it's your ${getNumberOfDays()} day`}</div>
        <div style={styles.subtitle}>Good job!</div>
        <div style={styles.points}>
          <img src="/Star-1.png" alt="" /> <span style={styles.pointsNumber}>{numberOfDays * 100}</span> <img src="/Star-1.png" alt="" />
        </div>
        <Button onClick={closeModal} circular style={styles.button}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default DailyModal;
