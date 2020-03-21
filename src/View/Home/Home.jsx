import React from 'react';
import {useAuthorization} from "../../hooks/useAuthorization";
import {styles} from "./styles";
import DaysCounter from "../../Components/DaysCounter/DaysCounter";

const Home = () => {
  const user = useAuthorization()

    if (!user) {
        return null
    }

  return (
     <div style={styles.container}>
          <div style={styles.header}>Dashboard</div>
        <DaysCounter />
     </div>
   )
};

export default Home;
