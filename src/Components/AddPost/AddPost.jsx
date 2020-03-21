import React, { useState, useRef } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

import { styles } from './styles';
import { createPost } from '../../db/createPost';
import { uploadImage } from '../../db/uploadImage';
import { useAuthorization } from '../../hooks/useAuthorization';

const AddPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileRef = useRef();
  const user = useAuthorization();
  const [text, setText] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const photo = fileRef.current.files[0];
    if (photo) {
      const url = await uploadImage(photo, 'PostsPhotos');
      createPost(user.id, text, url);
    } else {
      createPost(user.id, text);
    }
    setIsOpen(false);
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <Button
          onClick={() => setIsOpen(true)}
          style={styles.trigger}
          color="orange"
          icon="add"
          circular
          size="huge"
        ></Button>
      }
    >
      <Modal.Header>What would you like to share?</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Form.TextArea label="Add text" name="text" id="text" value={text} onChange={e => setText(e.target.value)} />
          <Form.Input label="Add Photo" type="file" name="image" id="image">
            <input type="file" ref={fileRef} />
          </Form.Input>
          <Form.Button floated="right" color="orange" type="submit">
            Publish
          </Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddPost;
