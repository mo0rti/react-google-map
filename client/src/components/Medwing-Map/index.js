import React from "react";
import { tMapMarkers, tMapCenter } from 'Types';
import { settings } from "Constants";
import Layout from "./Layout";
import "./styles.css";

class MedwingMap extends React.Component {

    _getCenter = () => {
        const { center } = this.props;
        return center ? center : { ...settings.DEFAULT_MAP_CENTER_POINT };
    }

    render() {
        const { markers = [] } = this.props;
        const center = this._getCenter();
    
        return (
            <Layout
                center={center}
                markers={markers}
            />
        );
    }
}

MedwingMap.propTypes = {
    markers: tMapMarkers.isRequired,
    center: tMapCenter
}

export default MedwingMap;