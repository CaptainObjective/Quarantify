import React from 'react'
import {styles} from "./styles";

const MainText = ({title, content}) => (
    <>
        <div style={styles.title}>
            {title}
        </div>
        <div style={styles.content}>
            {content}
        </div>
    </>
)

export default MainText