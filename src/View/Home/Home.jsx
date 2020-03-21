import React from 'react';
import {useAuthorization} from "../../hooks/useAuthorization";
import {styles} from "./styles";
import {Card} from "semantic-ui-react";
import DaysCounter from "../../Components/DaysCounter/DaysCounter";
import DashboardChart from "../../Components/DashboardChart/DashboardChart";
import PauseCard from "../../Components/PauseCard/PauseCard";

import './home.css'

const Home = () => {
  const user = useAuthorization()

    console.log({user})

    if (!user) {
        return null
    }

  return (
     <div style={styles.container}>
         <Card style={styles.card}>
             <div style={styles.description}>
                 <div style={styles.title}>
                     {`Hello ${user?.username},`}
                 </div>
                 <div style={styles.content}>
                    <p>Thank you for being with us!</p>
                     Take care and have a good day.
                 </div>
             </div>
             <div style={styles.calendar}>
                 <DaysCounter />
             </div>
         </Card>
         <DashboardChart />
         <PauseCard />
     </div>
   )
};

export default Home;
