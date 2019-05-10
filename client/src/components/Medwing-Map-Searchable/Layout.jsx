import React from "react";
import { tMapMarkers, tMapCenter, tFunc } from 'Types';
import MedwingMap from "../Medwing-Map";
import MedwingButton from "../Medwing-Button";

const Layout = ({ selectedMarkers, center, handleFormSearch, setSearchInputRef }) =>
    <div className="medwing-map-container">
        <form className="search-form" onSubmit={handleFormSearch}>
            <input
                type="text"
                id="address"
                className="search-input"
                placeholder="Address..."
                ref={setSearchInputRef}
                required
            />
            <MedwingButton type="submit" className="search-form-button">
                Search
            </MedwingButton>
        </form>
        <div className="search-map">
            <MedwingMap
                center={center}
                markers={selectedMarkers}
            />
        </div>
    </div>

Layout.propTypes = {
    selectedMarkers: tMapMarkers.isRequired,
    center: tMapCenter,
    handleFormSearch: tFunc,
    setSearchInputRef: tFunc
}

export default Layout;