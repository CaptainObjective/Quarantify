import React, {useState} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({coords, setCoords, google}) => {
    const [marker, setMarker] = useState(null)

    return (
        <div style={{width: '200px', height: '200px'}}>
            <Map
                google={google}
                zoom={13}
                initialCenter={{ lat: 51.1, lng: 17.03}}
                containerStyle={{width: '200px', height: '200px'}}
                panControl={false}
                rotateControl={false}
                streetViewControl={false}
                fullscreenControl={false}
                keyboardShortcuts={false}
                disableDefaultUI={true}
                onClick={(a, b, {latLng}) => {
                    setMarker({
                        position: {
                            lat: latLng.lat(),
                            lng: latLng.lng()
                        },
                    })
                    console.log({
                        lat: latLng.lat(),
                        lng: latLng.lng()
                    })
                    setCoords({
                        latitude: latLng.lat(),
                        longitude: latLng.lng()
                    })
                }}
            >
                {marker && <Marker position={marker.position} />}
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey:  process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapContainer)