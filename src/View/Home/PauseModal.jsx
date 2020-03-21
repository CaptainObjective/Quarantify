import React from 'react'
import {styles} from "./styles";
import {Modal, Button} from "semantic-ui-react";
import {useAuthorization} from "../../hooks/useAuthorization";
import * as firebase from "firebase";

const PauseModal = ({isOpen, closeModal}) => {
    const user = useAuthorization()

    const handlePause = () => {
        const currentDate = new Date()
        const pauseUntil = new Date(currentDate.setHours(new Date().getHours() + 1))

        console.log({pauseUntil})

        firebase.firestore().collection('Users').doc(user.id).update({
            pauseUntil,
        })

        closeModal()
    }

    return (
        <Modal
            open={isOpen}
            size="fullscreen"
        >
            <div style={styles.modalContainer}>
                <img src="/Close.png" style={styles.close} onClick={closeModal}/>
                <img src="/image-1.png" style={styles.pauseImg}/>
                <div style={styles.pauseTitle}>
                    ARE YOU SURE YOU WANT TO GO OUT?
                </div>
                <div style={styles.pauseContent}>
                    Remember that going out is hazardous for you and your community.
                    Choose your local stores and ask others if they need something from a shop too.
                    Minimize the amount of going outs.
                    Remember to keep distance from other people and don’t touch your face. Stay safe!
                    If you really need to go press the PAUSE button. We will stop your GPS registration for an hour.
                </div>
                <Button circular style={styles.pauseButton} onClick={handlePause}>
                    Pause
                </Button>
            </div>
        </Modal>
    )
}

export default PauseModal