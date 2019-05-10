import React from "react";
import { tMapMarkers, tMapCenter } from 'Types';
import GoogleMap from "./Google-Map";

const Layout = ({ center, markers }) =>
    <div className="medwing-map-container">        
            <GoogleMap
                center={center}
                markers={markers}
            />        
    </div>

Layout.propTypes = {
    markers: tMapMarkers.isRequired,
    center: tMapCenter.isRequired
}

export default Layout;