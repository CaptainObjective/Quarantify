import React, { useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const MyLoader = () => {
  const [render, setRender] = useState(false);
  setTimeout(() => {
    setRender(true);
  }, 500);
  if (!render) return null;
  return (
    <Dimmer active>
      <Loader>Loading....</Loader>
    </Dimmer>
  );
};
export default MyLoader;
