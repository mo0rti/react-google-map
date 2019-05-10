import React from "react";
import { withRouter } from "react-router";
import MedwingButton from "../Medwing-Button";
import "./style.css";

class MedwingBackButton extends React.Component {

    _onBackClick = () => this.props.history.goBack();

    render() {
        return (
            <MedwingButton onClick={this._onBackClick} className="medwing-button-back">
                Back
            </MedwingButton>
        )
    }
}

export default withRouter(MedwingBackButton);