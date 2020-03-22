import React, {useState} from 'react'
import {Modal, Dropdown, Button} from "semantic-ui-react";
import {styles} from "./styles";

const AddActivityModal = ({isOpen, closeModal, activities, takeChallenge}) => {
    const [selectedActivity, setSelectedActivity] = useState(null)

    const currentActivity = activities.find(activity => activity.name === selectedActivity)

    return (
        <Modal
            open={isOpen}
            size="huge"
        >
            <div style={styles.modalTitle}>
                Add new activity
            </div>
            <div style={styles.modalDropdown}>
                <div style={{width: '70%'}}>
                    <Dropdown
                        value={selectedActivity}
                        onChange={(e, {value}) => setSelectedActivity(value)}
                        options={activities.map(activity => ({
                            value: activity.name,
                            text: activity.name,
                            key: activity.name,
                        }))}
                        selection
                        placeholder="Select activity"
                        fluid
                    />
                </div>
                <div style={{width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {currentActivity?.points} <img src="/Star-1.png" />
                </div>
            </div>
            <Button style={styles.modalAdd} onClick={() => {
                takeChallenge(currentActivity)
                closeModal()
            }}>
                Add
            </Button>
            <Button onClick={closeModal} style={styles.modalClose}>
                Close
            </Button>
        </Modal>
    )
}

export default AddActivityModal
