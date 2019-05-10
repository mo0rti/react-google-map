import React from "react";
import { withRouter } from "react-router";
import { toast } from 'react-toastify';
import { tString } from 'Types';
import { ServiceErrorHandler } from "Helpers";
import { getMarker, updateMarker } from "Actions";
import Layout from "./Layout";

class MarkerViewUpdate extends React.Component {

    state = {
        isLoading: false
    }

    async componentDidMount() {
        await this._getMarker();
    }

    _getMarker = async () => {
        const { id, history } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                const selectedMarker = await getMarker(id);
                this.setState({ selectedMarker });
            } catch (error) {
                ServiceErrorHandler().error(error);
                toast.error(error.message);
                history.goBack();
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    _onAddressSearch = (foundedMarker) => {
        if (foundedMarker) {
            this.setState({ selectedMarker: { ...foundedMarker } });
        }
    }

    _handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        const { selectedMarker } = this.state;

        const { history, id } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await updateMarker({ id, marker: selectedMarker });
                history.goBack();
            } catch (err) {
                // TODO: should have an error logger here
                toast.error(err.message);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    render() {
        const { selectedMarker, isLoading } = this.state;
        return (
            <Layout
                isLoading={isLoading}
                selectedMarker={selectedMarker}
                handleSubmitForm={this._handleFormSubmit}
                onAddressSearch={this._onAddressSearch}
            />
        );
    }
}

MarkerViewUpdate.propTypes = {
    id: tString.isRequired
}

export default withRouter(MarkerViewUpdate);
