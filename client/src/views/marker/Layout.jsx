import React from "react";
import { tMapMarker, tBool, tFunc } from 'Types';
import { MedwingMapSearchable, MedwingLoadingIndicator, MedwingButton, MedwingBackButton } from "Components";

const Layout = ({ isLoading, selectedMarker, handleSubmitForm, onAddressSearch }) =>
    <article className="find-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="header-layout">
            <div className="offers-title">
                {`${selectedMarker ? selectedMarker.title : 'Find the address'}`}
            </div>
            <div className="btns-group">
                <MedwingBackButton />
                <MedwingButton className="save-btn" onClick={handleSubmitForm}>
                    Save
                </MedwingButton>
            </div>
        </div>

        <div className="medwing-map-container">
            <div className="map">
                <MedwingMapSearchable
                    selectedMarkers={selectedMarker ? [selectedMarker] : []}
                    onSearch={onAddressSearch}
                />
            </div>
        </div>
    </article>

Layout.propTypes = {
    isLoading: tBool.isRequired,
    selectedMarker: tMapMarker,
    handleSubmitForm: tFunc.isRequired,
    onAddressSearch: tFunc.isRequired
}

export default Layout;
