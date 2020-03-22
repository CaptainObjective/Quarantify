import React, { useState } from 'react';
import Cam from '../Components/Cam';
import { Modal, Form, Image } from 'semantic-ui-react';
import { createPost } from '../db/createPost';
import { uploadImage } from '../db/uploadImage';
import { useAuthorization } from '../hooks/useAuthorization';
import { urltoFile } from '../Utils';
import { ChallengeList } from '../Components/ChallengeList/ChallengeList';
import { completeChallenge } from '../db/completeChallenge';
import { updateScore } from '../db/updateScore';

const Challenge = () => {
  const [state, setState] = useState('challenge'); //'', 'submit'
  const [selectedId, setSelectedId] = useState(''); //'', 'submit'

  const [photo, setPhoto] = useState(null);
  const [checkbox, setCheckBox] = useState(false);

  const user = useAuthorization();

  const handleChallengeAccept = id => {
    setSelectedId(id);
    setState('takingPhoto');
  };

  const handleTakePhoto = dataUri => {
    // Do stuff with the photo...
    setPhoto(dataUri);
    setState('submit');
  };
  const handleSubmit = async (e, o) => {
    e.preventDefault();
    const file = await urltoFile(photo, Date.now(), 'image/png');

    const url = await uploadImage(file, 'Selfies');
    completeChallenge(selectedId, url);
    if (checkbox) createPost(user.id, 'I just completed selfie challenge!', url);
    updateScore(user, 50);
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Button inline color="red" type="reset" onClick={() => setState('challenge')}>
                Discard
              </Form.Button>
              <Form.Button inline color="green" type="submit">
                Publish
              </Form.Button>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
      <ChallengeList handleChallengeAccept={handleChallengeAccept} />
    </>
  );
};

export default Challenge;
