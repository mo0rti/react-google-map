import React from "react";
import { tMapMarkers, tFunc } from 'Types';
import MarkerItem from "../List-Item";
import "./styles.css";

const MarkersList = ({ items, onMarkerEdit, onMarkerRemove, onMarkerSelect }) =>
    <div className="makers-list-container">
        <ul>
            {
                items.map((item, index) =>
                    <MarkerItem
                        key={item.id}
                        index={index}
                        item={item}
                        onMarkerEdit={onMarkerEdit}
                        onMarkerRemove={onMarkerRemove}
                        onMarkerSelect={onMarkerSelect}
                    />
                )
            }
        </ul>
    </div>

MarkersList.propTypes = {
    items: tMapMarkers,
    onMarkerEdit: tFunc,
    onMarkerRemove: tFunc,
    onMarkerSelect: tFunc
}

export default MarkersList;