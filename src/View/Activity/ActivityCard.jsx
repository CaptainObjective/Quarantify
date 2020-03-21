import React from 'react'
import {Card} from 'semantic-ui-react'
import {styles} from "./styles";

const ActivityCard = ({name, points}) => (
    <Card style={styles.activityCard}>
        <div style={styles.activityCard}>
            <div style={styles.activityCardName}>
                {name}
            </div>
            <div style={styles.activityCardPoints}>
                <img src="/Star-1.png" />
                {points}
            </div>
        </div>
    </Card>
)

export default ActivityCard