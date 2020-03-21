import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const MyLoader = () => {
  return (
    <Dimmer active>
      <Loader>Loading....</Loader>
    </Dimmer>
  );
};
export default MyLoader;
