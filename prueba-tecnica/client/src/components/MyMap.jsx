import { useMemo } from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";


const MyMap = ({setUbi,currentZoom,zoom}) => {

    const API_KEY = ''

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: API_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>;



    return <Map setUbi = {setUbi} currentZoom={currentZoom} zoom={zoom}/>;
}

function Map({setUbi,zoom}){
    

    const center = useMemo(()=> ({ lat: -33.447487 , lng:-70.673676 }),[]);
    return(
        <>
            <GoogleMap
                onClick={(e) => {
                    setUbi(e.latLng.lat(),e.latLng.lng());
                }}
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                >

            </GoogleMap>
        </>
    )
}

export default MyMap;
