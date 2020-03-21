import React from 'react'
import {useAuthorization} from "../../hooks/useAuthorization";
import {styles} from "./styles";

const DaysCounter = () => {
    const user = useAuthorization()
    const currentDate = new Date()
    const startDate = user && user.startDate ? user.startDate.toDate() : new Date();
    const datesDifference = Math.abs(currentDate - startDate);
    const numberOfDays = Math.round(datesDifference / (1000 * 3600 * 24));

    return (
        <div style={styles.background}>
            <div style={styles.counter}>
                <div style={styles.number}>
                    {numberOfDays}
                </div>
                <div style={styles.text}>
                    DAYS
                </div>
            </div>
        </div>
    )
}

export default DaysCounter