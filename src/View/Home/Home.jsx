import React, { useEffect, useState } from 'react';
import { useAuthorization } from '../../hooks/useAuthorization';
import { styles } from './styles';
import { Card } from 'semantic-ui-react';
import DaysCounter from '../../Components/DaysCounter/DaysCounter';
import DashboardChart from '../../Components/DashboardChart/DashboardChart';
import PauseCard from '../../Components/PauseCard/PauseCard';

import './home.css';
import DailyModal from './DailyModal';
import PauseModal from './PauseModal';
import MyLoader from '../../Components/MyLoader/MyLoader';
import {updateScore} from "../../db/updateScore";

const Home = () => {
  const user = useAuthorization();
  const currentDate = new Date();
  const [isDailyModalOpen, setIsDailyModalOpen] = useState(false);
  const [isPauseModalOpen, setPauseModalOpen] = useState(false);
  const startDate = user && user.startDate ? user.startDate.toDate() : new Date();
  const datesDifference = Math.abs(currentDate - startDate);
  const numberOfDays = Math.round(datesDifference / (1000 * 3600 * 24)) + 1;

  useEffect(() => {
    const lastModalDate = user?.lastModalDate?.toDate();
    const lastModalDisplayedDifference = Math.abs(currentDate - lastModalDate);
    const shouldModalBeDisplayed = Math.round(lastModalDisplayedDifference / (1000 * 3600 * 24)) >= 1;

    if (shouldModalBeDisplayed) {
      updateScore(user, numberOfDays * 100)
    }

    setIsDailyModalOpen(shouldModalBeDisplayed);
  }, [user]);



  if (!user) {
    return <MyLoader />;
  }

  return (
    <>
      <div style={styles.container}>
        <Card style={styles.card}>
          <div style={styles.description}>
            <div style={styles.title}>{`Hello ${user?.username},`}</div>
            <div style={styles.content}>
              <p>Thank you for being with us!</p>
              Take care and have a good day.
            </div>
          </div>
          <div style={styles.calendar}>
            <DaysCounter numberOfDays={numberOfDays} />
          </div>
        </Card>
        <DashboardChart />
        <PauseCard setPauseModalOpen={setPauseModalOpen} />
      </div>
      <DailyModal
        isOpen={isDailyModalOpen}
        closeModal={() => setIsDailyModalOpen(false)}
        user={user}
        numberOfDays={numberOfDays}
      />
      <PauseModal isOpen={isPauseModalOpen} closeModal={() => setPauseModalOpen(false)} />
    </>
  );
};

export default Home;
