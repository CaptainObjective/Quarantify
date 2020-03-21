import React from 'react'
import {styles} from "./styles";

const DaysCounter = ({numberOfDays}) => {
    return (
            <div style={styles.counter}>
                <div style={styles.topBorder}>
                </div>
                <div style={styles.number}>
                    {numberOfDays}
                </div>
                <div style={styles.text}>
                    DAY
                </div>
            </div>
    )
}

export default DaysCounter