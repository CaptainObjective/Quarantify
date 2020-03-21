import React, { useState } from 'react';
import Cam from '../Components/Cam';
import PendingChallenge from '../Components/PendingChallenge/PendingChallenge';
import { Modal, Form, Image } from 'semantic-ui-react';
import { createPost } from '../db/createPost';
import { uploadImage } from '../db/uploadImage';
import { useAuthorization } from '../hooks/useAuthorization';
import { urltoFile } from '../Utils';

const Challenge = () => {
  const [state, setState] = useState('challenge'); //'', 'submit'
  const [photo, setPhoto] = useState(null);
  const [checkbox, setCheckBox] = useState(false);

  const user = useAuthorization();

  const handleChallengeAccept = id => {
    setState('takingPhoto');
  };

  const handleTakePhoto = dataUri => {
    // Do stuff with the photo...
    setPhoto(dataUri);
    setState('submit');
  };
  const handleSubmit = async (e, o) => {
    e.preventDefault();
    console.log(photo);
    const file = await urltoFile(photo, Date.now(), 'image/png');

    const url = await uploadImage(file, 'Selfies');
    //Publish Challenge ()
    console.log(url);
    console.log(checkbox);
    if (checkbox) createPost(user.id, 'I just completed selfie challenge!', url);
    setState('challenge');
  };
  if (state === 'takingPhoto') return <div>{<Cam handleTakePhoto={handleTakePhoto} />}</div>;
  return (
    <>
      <Modal open={state === 'submit'} onClose={() => setState('takingPhoto')}>
        <Modal.Header>Would u like to submit this photo?</Modal.Header>
        <Modal.Content>
          <Image src={photo} />
          <Form onSubmit={handleSubmit}>
            <Form.Checkbox label="Also post on public board" onClick={() => setCheckBox(!checkbox)} />
            <Form.Button floated="right" color="green" type="submit">
              Publish
            </Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
      <PendingChallenge handleChallengeAccept={handleChallengeAccept} />
    </>
  );
};

export default Challenge;
