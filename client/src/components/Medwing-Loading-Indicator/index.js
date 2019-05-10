import React from "react";
import { tBool } from 'Types';
import SpinnerSvg from "Assets/animation/spinner-svg";
import "./styles.css";

const MedwingLoadingIndicator = ({ isLoading }) =>
    <div className="Loading-container" style={{ display: isLoading ? "block" : "none" }}>
        <div className="overlay"></div>
        <div className="loading-contnet">
            <SpinnerSvg />
        </div>
    </div>

MedwingLoadingIndicator.propTypes = {
    isLoading: tBool.isRequired
}

export default MedwingLoadingIndicator;