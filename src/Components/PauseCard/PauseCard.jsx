import React from 'react'
import {Button, Card} from "semantic-ui-react";
import {styles} from "./styles";

import './pauseCard.css'

const PauseCard = () => (
    <Card style={styles.card}>
        <div style={styles.title}>
            I need to go!
        </div>
        <Button
            style={styles.button}
          circular
        >
            Pause
        </Button>
    </Card>
)

export default PauseCard