import React, { useEffect } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { styles } from './styles';
import { useWindowSize } from '../../hooks/useWindowSize';

const Cam = () => {
  const size = useWindowSize();
  useEffect(() => {
    const video = document.querySelector('video');
    const navigation = document.querySelector('#navigation');
    const heightForVideo = window.innerHeight - navigation.offsetHeight;
    video.style.objectFit = 'initial';
    video.style.height = heightForVideo + 'px';
    video.style.width = '100vw';
  }, [size]);

  const handleTakePhoto = dataUri => {
    // Do stuff with the photo...
    console.log(dataUri);
    console.log('takePhoto');
  };

  return (
    <div style={styles.root}>
      <Camera isFullScreen onTakePhoto={handleTakePhoto} />
    </div>
  );
};

export default Cam;
