import React from 'react';
import {
    BarChart, Bar, Cell, XAxis
} from 'recharts';
import {styles} from "./styles";
import {useAuthorization} from "../../hooks/useAuthorization";

const data = [
    {
        day: 1, points: 40,
    },
    {
        day: 2, points: 80,
    },
    {
        day: 3, points: 240,
    },
    {
        day: 4, points: 400,
    },
    {
        day: 5, points: 540,
    },
    {
        day: 6, points: 760,
    },
    {
        day: 7, points: 1000,
    },
    {
        day: 8, points: 2000,
    },
    {
        day: 9, points: 3000,
    },
    {
        day: 10, points: 4000,
    },
    {
        day: 11, points: 5000,
    },
    {
        day: 12, points: 6000,
    },
    {
        day: 13, points: 7000,
    },
    {
        day: 14, points: 8000,
    },
];

const Stepper = () =>  {
    const user = useAuthorization()
    const currentDate = new Date()
    const startDate = user && user.startDate ? user.startDate.toDate() : new Date();
    const datesDifference = Math.abs(currentDate - startDate);
    const numberOfDays = Math.round(datesDifference / (1000 * 3600 * 24));

    const dataToDisplay = data.filter(item => item.day === numberOfDays || (item.day >= numberOfDays - 4 && item.day <= numberOfDays + 3))

    return (
        <div style={styles.container}>
            <BarChart width={320} height={100} data={dataToDisplay}>
                <XAxis dataKey="day" stroke="white"/>
                <Bar dataKey="points" fill="#F7B15C" label={{
                        position: 'top',
                            fill: 'white'
                    }}>
                    {dataToDisplay.map(item => {
                        const color = item.day <= numberOfDays ? '#F7B15C' : '#A5BB8D'

                        return <Cell fill={color}  />
                    })}
                </Bar>
            </BarChart>
        </div>
    )
}

export default Stepper
