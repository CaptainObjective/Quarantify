import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({lat, lng, google}) => {
        return (
            <div style={{width: '200px', height: '200px'}}>
                <Map
                    google={google}
                    zoom={13}
                    initialCenter={{ lat, lng}}
                    containerStyle={{width: '200px', height: '200px'}}
                    draggable={false}
                    panControl={false}
                    rotateControl={false}
                    scaleControl={false}
                    zoomControl={false}
                    streetViewControl={false}
                    scrollwheel={false}
                    fullscreenControl={false}
                    keyboardShortcuts={false}
                    disableDefaultUI={true}
                >
                    <Marker position={{lat, lng}} />
                </Map>
             </div>
        )
}

export default GoogleApiWrapper({
    apiKey:  process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapContainer)