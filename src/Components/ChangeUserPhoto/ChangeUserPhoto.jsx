import React, { useRef } from 'react';
import { Modal, Form } from 'semantic-ui-react';

import { useAuthorization } from '../../hooks/useAuthorization';
import { uploadImage } from '../../db/uploadImage';
import { changeAvatar } from '../../db/changeAvatar';
import { styles } from './styles';

const ChangeUserPhoto = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const user = useAuthorization();

  const fileRef = useRef();
  const handleSubmit = async e => {
    e.preventDefault();
    const photo = fileRef.current.files[0];
    const url = await uploadImage(photo, 'Avatars');
    console.log(user.id);
    console.log(url);
    changeAvatar(user.id, url);
    // createPost(user.id, text, url);
  };
  return (
    <>
      <Modal.Header>Add your avatar</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Form.Input label="Add Photo" type="file" name="image" id="image">
            <input type="file" ref={fileRef} accept="image/*" capture="user" />
          </Form.Input>
          <Form.Button floated="right" color="orange" type="submit">
            Publish
          </Form.Button>
        </Form>
      </Modal.Content>
    </>
  );
};

export default ChangeUserPhoto;
