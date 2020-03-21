import React, { useState } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { styles } from './styles';
import { firestore } from 'firebase';

const AddPost = () => {
  const [text, setText] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const userRef = firestore()
      .collection('Users')
      .doc('f9eYzQ0NZmh0OYwd62hG');
    firestore()
      .collection('Posts')
      .add({
        text,
        image: null,
        author: userRef
      });
  };
  return (
    <Modal trigger={<Button style={styles.trigger} color="orange" icon="add" circular size="huge"></Button>}>
      <Modal.Header>What would you like to share?</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Form.TextArea label="Add text" name="text" id="text" value={text} onChange={e => setText(e.target.value)} />
          <Form.Input label="Add Photo" type="file" name="image" id="image"></Form.Input>
          <Form.Button floated="right" color="orange" type="submit">
            Publish
          </Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddPost;
