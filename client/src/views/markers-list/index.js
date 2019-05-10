import React from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { ServiceErrorHandler } from "Helpers";
import { getMarkers, addMarker, removeMarker } from "Actions";
import Layout from "./Layout";
import "./styles.css";

class MarkersListView extends React.Component {

    state = {
        isLoading: false
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const { getMarkers } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await getMarkers();
            } catch (error) {
                ServiceErrorHandler().error(error);
                toast.error(error.message);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    _onMarkerSelect = (selectedMarker) => {
        this.setState({ selectedMarker });
    }

    _onMarkerAdd = (marker) => {
        const { addMarker } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await addMarker(marker);
            } catch (error) {
                ServiceErrorHandler().error(error);
                toast.error(error.message);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    _onMarkerEdit = (marker) => {
        this.props.history.push(`marker/${marker.id}`);
    }

    _gotoAddView = () => {
        this.props.history.push('marker');
    }

    _onMarkerRemove = ({ marker }, fnCallback) => {
        const { removeMarker } = this.props;
        if (!removeMarker) return;

        this.setState({ isLoading: true }, async () => {
            try {
                await removeMarker(marker.id);
            } catch (error) {
                ServiceErrorHandler().error(error);
                toast.error(error.message);
            } finally {
                this.setState({ isLoading: false });
                if (fnCallback)
                    fnCallback();
            }
        });
    }

    render() {
        const { markers } = this.props;
        const { selectedMarker, isLoading } = this.state;

        return (
            <Layout
                markers={markers || []}
                selectedMarker={selectedMarker}
                isLoading={isLoading}
                gotoAddView={this._gotoAddView}
                onMarkerEdit={this._onMarkerEdit}
                onMarkerRemove={this._onMarkerRemove}
                onMarkerSelect={this._onMarkerSelect}
            />
        );
    }
}

const mapStateToProps = ({ markers }) => ({
    markers: markers.markers
});

export default connect(mapStateToProps, { getMarkers, addMarker, removeMarker })(MarkersListView);
