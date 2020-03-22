import React, {useState} from 'react';
import firebase from 'firebase'
import {Card, Button} from "semantic-ui-react";
import {styles} from "./styles";
import {useAuthorization} from "../../hooks/useAuthorization";
import ActivityCard from "./ActivityCard";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "firebase";
import AddActivityModal from "./AddActivityModal";

const Activity = () => {
    const user = useAuthorization()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [value, loading, error] = useCollectionData(firestore().collection('Activities'));
    if (loading || error) return null
    const todaysChallenge = value.find(activity => activity.day === new Date().getDate()) || value[0]

    const isTodaysChallengeDone = user?.activities.map(activity => activity.name).includes(todaysChallenge.name)

    const takeChallenge = (activity) => {
        firebase.firestore().collection('Users').doc(user.id).update({
            activities: [...user.activities, {name: activity.name, points: activity.points, date: new Date()}]
        })
    }

    return (
        <>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{borderRadius: '5px', marginBottom: '5px', background: '#54C6BE', minHeight: '55px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', color: '#FEFEFE', fontWeight: 600}}>
                Get new <img src="/Star-1.png" style={{margin: '5px'}}/> by action!
            </div>
            <div style={{width: '100%'}}>
                <div style={styles.newTitle}>
                    New activity
                </div>
                <Card style={styles.newCard}>
                    <div style={styles.newCard}>
                        <span style={styles.newCardLabel}>
                            Type activity
                        </span>
                        <span style={styles.newCardButton} onClick={() => setIsModalOpen(true)}>
                            Add
                        </span>
                    </div>
                </Card>
                <div style={styles.newTitle}>
                    Last activities
                </div>
                {user && user.activities.sort((a, b) => b.date - a.date).filter((_, i) => i <= 1).map(activity => <ActivityCard {...activity} />)}
                <div style={styles.seeAll}>
                    See all
                </div>
                <Card style={styles.todaysChallengeCard}>
                    <div style={styles.todaysChallengeCard}>
                        <div style={styles.todaysChallengeCardTitle}>
                            Today's challenge
                        </div>
                        <div style={styles.todaysChallengeCardSubtitle}>
                            {todaysChallenge.name}
                        </div>
                        <div style={styles.todaysChallengeCardPoints}>
                            <img src="/Star-1.png" /> {todaysChallenge.points} <img src="/Star-1.png" />
                        </div>
                        {isTodaysChallengeDone ? (
                            <div>
                                You've already done this challenge
                            </div>
                            ) : (
                            <Button style={styles.todaysChallengeCardButton} onClick={() => takeChallenge(todaysChallenge)}>
                                Take challenge
                            </Button>
                            )}
                    </div>
                </Card>
            </div>
        </div>
        <AddActivityModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} activities={user?.activities || []} takeChallenge={takeChallenge}/>
        </>
    );
};

export default Activity;
