import React from "react";
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import { connect } from 'react-redux';
import { calculateMiddle, determineZoom } from '../../helpers';

class MapContainer extends React.Component {
    render() {
        const to = this.props.address.to;
        const toLatLng = {lat: to.latitude, lng: to.longitude };
        const from = this.props.address.from
        const fromLatLng = {lat: from.latitude, lng: from.longitude};
        const center = calculateMiddle(to.latitude, to.longitude, from.latitude, from.longitude)
        const zoom = determineZoom(to, from);
        return (
            <Map 
                style={{height: "100vh", width: "75%"}} 
                zoom={zoom}
                google={this.props.google}
                initialCenter={center}
             >
                <Marker position={toLatLng} name={'TO'} />
                <Marker position={fromLatLng} name={'FROM'} />
                <Polyline
                    path={[toLatLng, fromLatLng]}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
            </Map>
        );
    }
}
function MapStateToProps(state) {
    return {
        address: state.AppReducer.address
    }
}


const MapWithGoogle = GoogleApiWrapper({apiKey: "AIzaSyCSMAF656wciWJUlSWgVDEPD648qVu0iqI"})(MapContainer)
export default connect(MapStateToProps)(MapWithGoogle)

