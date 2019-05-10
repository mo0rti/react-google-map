import React from "react";
import { toast } from 'react-toastify';
import Geocode from 'react-geocode';
import { tMapMarkers, tFunc } from 'Types';
import { settings } from "Constants";
import { ServiceErrorHandler } from "Helpers";
import Layout from "./Layout";
import "./styles.css";

class MedwingMapSearchable extends React.Component {

    componentDidMount() {
        Geocode.setApiKey(settings.MAP_API_KEY);
    }

    _geoFromAddress = async (address) => {
        const { onSearch } = this.props;
        try {
            const response = await Geocode.fromAddress(address);
            const { lat, lng } = response.results[0].geometry.location;
            const formattedAddress = response.results[0].formatted_address;
            const foundedMarker = { title: formattedAddress, lat, lng };
            if (onSearch) {
                onSearch(foundedMarker);
            }
        } catch (error) {
            ServiceErrorHandler().error(error);
            toast.error("Address not found");
        }
    }

    _handleFormSearch = submitEvent => {
        submitEvent.preventDefault();
        var address = this.elSearchInput.value;
        this._geoFromAddress(address);
    }

    _setSearchInputRef = ref => this.elSearchInput = ref;
    
    _getCenter = (selectedMarkers) => {
        if (selectedMarkers.length !== 0)
            return { lat: selectedMarkers[0].lat, lng: selectedMarkers[0].lng };
    }

    render() {
        const { selectedMarkers } = this.props;
        const center = this._getCenter(selectedMarkers);
        
        return (
            <Layout
                center={center}
                selectedMarkers={selectedMarkers}
                handleFormSearch={this._handleFormSearch}
                setSearchInputRef={this._setSearchInputRef}
            />
        );
    }
}

MedwingMapSearchable.propTypes = {
    selectedMarkers: tMapMarkers.isRequired,
    onSearch: tFunc
}

export default MedwingMapSearchable;