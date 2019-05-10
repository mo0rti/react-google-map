import React from "react";
import { tMapMarkers, tMapMarker, tBool, tFunc } from 'Types';
import { MedwingMap, MedwingButton, MedwingLoadingIndicator } from "Components";
import MarkersList from "./List";

const Layout = ({ markers, selectedMarker, isLoading, onMarkerEdit, onMarkerRemove, onMarkerSelect, gotoAddView }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="map-and-list-layout">
            <div className="first-map">
                <MedwingMap
                    center={selectedMarker}
                    markers={markers}
                />
            </div>
            <div className="add-list">
                <MedwingButton className="add-btn" onClick={gotoAddView}>Add</MedwingButton>
                <MarkersList
                    items={markers}
                    onMarkerEdit={onMarkerEdit}
                    onMarkerSelect={onMarkerSelect}
                    onMarkerRemove={onMarkerRemove} />
            </div>
        </div>
    </article>

Layout.propTypes = {
    markers: tMapMarkers.isRequired,
    selectedMarker: tMapMarker,
    onMarkerEdit: tFunc.isRequired,
    onMarkerRemove: tFunc.isRequired,
    onMarkerSelect: tFunc.isRequired,
    gotoAddView: tFunc.isRequired,
    isLoading: tBool.isRequired,
}

export default Layout;
