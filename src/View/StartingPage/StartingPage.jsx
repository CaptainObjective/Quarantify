import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from "semantic-ui-react";
import TitleHeader from '../../Components/TitleHeader/TitleHeader'
import MainText from "../../Components/MainText/MainText";
import {styles} from "./styles";
import MyMap from "./Map";
import {useAuthorization} from "../../hooks/useAuthorization";
import * as firebase from "firebase";
import EditableMap from "./EditableMap";

const getTexts = user => ({
    1 : {
        title: `Hello, ${user ? user.username : ''}!`,
        content: 'The app requires an access to your location!',
        button: 'Turn on your GPS',
    },
    2 : {
        title: 'Are we good?',
        content: 'Please confirm if the location is correct!',
        button: 'Confirm',
    },
    3 : {
        title: 'We\'re good!',
        content: 'You are ready to join the community and fight the outbreak!',
        button: 'Let\s go!',
    }
})

const StartingPage = () => {
    const [step, setStep] = useState(1)
    const [coords, setCoords] = useState({
        lat: null,
        lng: null,
    })
    const [isSettingManually, setIsSettingManually] = useState(false)
    const history = useHistory()
    const user = useAuthorization()

    if (user && user.localization) {
        history.push('/')
    }

    const renderMainContent = () => {
        switch (step) {
            case 1:
                return <img src="/mapMarker.png" style={styles.img}/>
            case 2:
                return isSettingManually ? <EditableMap coords={coords} setCoords={setCoords} /> : <MyMap lat={coords.lat} lng={coords.lng} />
            case 3:
                return <img src="/world.png" style={styles.img}/>
        }
    }

    const renderBottomText = () => {
        switch (step) {
            case 1:
                return (
                    <div style={styles.bottomTextStepTwo}>
                        <div>
                            Something's wrong?
                        </div>
                        <div onClick={() => {
                            setIsSettingManually(true)
                            setStep(2)
                        }}>
                            Set your location manually
                        </div>
                    </div>
                )
        }
    }

    return (
            <div style={styles.container}>
            <TitleHeader />
            <MainText
                title={getTexts(user)[step].title}
                content={getTexts(user)[step].content}
            />
                {renderMainContent()}
            <Button
                onClick={() => {
                    if (isSettingManually) {
                        if (step < 3) {
                            setStep(step + 1)
                        } else {
                            console.log({coords})
                            firebase.firestore().collection('Users').doc(user.id).update({
                                localization: new firebase.firestore.GeoPoint(coords.latitude, coords.longitude),
                                startDate: new Date()
                            })

                            history.push('/')
                        }
                    }

                    if (navigator.geolocation && !isSettingManually) {
                        navigator.geolocation.getCurrentPosition(({coords}) => {
                            setCoords({
                                lat: coords.latitude,
                                lng: coords.longitude,
                            });

                            if (step < 3) {
                                setStep(step + 1)
                            } else {
                                console.log({coords})
                                firebase.firestore().collection('Users').doc(user.id).update({
                                    localization: new firebase.firestore.GeoPoint(coords.latitude, coords.longitude),
                                    startDate: new Date()
                                })

                                history.push('/')
                            }
                        })
                    }
                }}
            >
                {getTexts(user)[step].button}
            </Button>
                {renderBottomText()}
        </div>
    )
}

export default StartingPage