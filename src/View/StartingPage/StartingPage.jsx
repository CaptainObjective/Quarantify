import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from "semantic-ui-react";
import TitleHeader from '../../Components/TitleHeader/TitleHeader'
import MainText from "../../Components/MainText/MainText";
import {styles} from "./styles";
import MyMap from "./Map";

const texts = {
    1 : {
        title: 'Hello, Lili!',
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
}

const StartingPage = () => {
    const [step, setStep] = useState(1)
    const [coords, setCoords] = useState({
        lat: null,
        lng: null,
    })
    const history = useHistory()

    const renderMainContent = () => {
        switch (step) {
            case 1:
                return <img src="/mapMarker.png" style={styles.img}/>
            case 2:
                return <MyMap lat={coords.lat} lng={coords.lng} />
            case 3:
                return <img src="/world.png" style={styles.img}/>
        }
    }

    const renderBottomText = () => {
        switch (step) {
            case 1:
                return <div style={styles.bottomTextStepOne}>Already turned on</div>
            case 2:
                return (
                    <div style={styles.bottomTextStepTwo}>
                        <div>
                            Something's wrong?
                        </div>
                        <div>
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
                title={texts[step].title}
                content={texts[step].content}
            />
                {renderMainContent()}
            <Button
                onClick={() => {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(({coords}) => {
                            setCoords({
                                lat: coords.latitude,
                                lng: coords.longitude,
                            });
                            // save to db
                            if (step < 3) {
                                setStep(step + 1)
                            } else {
                                history.push('/')
                            }
                        })
                    }
                }}
            >
                {texts[step].button}
            </Button>
                {renderBottomText()}
        </div>
    )
}

export default StartingPage