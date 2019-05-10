import React from "react";
import { tMapMarker, tNumber, tFunc } from 'Types';
import SpinnerSvg from "Assets/animation/spinner-svg";
import { MedwingButton } from "Components";
import "./styles.css";

class MarkerItem extends React.Component {
    _isMounted = false;

    state = {
        isDeleting: false
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _delete = () => {
        const { index, item, onMarkerRemove } = this.props;
        if (!onMarkerRemove) return;

        this.setState({ isDeleting: true }, () => {
            onMarkerRemove({ marker: item, index },
                (this._isMounted) ? this.setState({ isDeleting: false }) : null);
        });
    }

    _select = () => {
        const { item, onMarkerSelect } = this.props;
        if (onMarkerSelect)
            onMarkerSelect(item);
    }

    render() {
        const { item, onMarkerEdit } = this.props;
        const { isDeleting } = this.state;

        return (
            <div>
                <li className="card">
                    <div className="card-content">
                        <div onClick={this._select} className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.title}</div>
                        <div className="sub-content">Latitude: {item.lng}</div>
                        <div className="sub-content">Longitude: {item.lng}</div>
                    </div>
                    <div className="card-footer">
                        <MedwingButton className="edit-btn" onClick={() => onMarkerEdit(item)}>
                            Edit
                        </MedwingButton>
                        <MedwingButton className="delete-btn" onClick={this._delete}>
                            {isDeleting ? <SpinnerSvg width={50} height={50} viewBox="0 0 100 115" /> : "Delete"}
                        </MedwingButton>
                    </div>
                </li>
            </div>
        );
    }
}

MarkerItem.propTypes = {
    item: tMapMarker,
    onMarkerEdit: tFunc,
    onMarkerRemove: tFunc,
    onMarkerSelect: tFunc,
    index: tNumber
}

export default MarkerItem;
