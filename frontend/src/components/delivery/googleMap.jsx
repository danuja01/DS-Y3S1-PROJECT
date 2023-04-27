import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px',
    float: 'right' 
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const boralesgamuwa = {
    lat: 6.841166,
    lng: 79.902478
};

function GoogleMaps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: "AIzaSyB1ImSb6QNfp0o4C9LWrswVfaUfQmJnlSw"
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_APS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(boralesgamuwa);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <>
            <div>
                <center>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={boralesgamuwa}
                    zoom={5}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker position={boralesgamuwa} />
                    <></>
                </GoogleMap>
                </center>
            </div>
        </>
    ) : <></>
}

export default React.memo(GoogleMaps)