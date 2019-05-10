import React from "react";
import "./style.css";

class MedwingButton extends React.Component {
    render() {
        const { onClick, className, children, ...rest } = this.props;
        const childClassName = className ? ' ' + className : '';
        return (
            <button onClick={onClick} className={`medwing-button${childClassName}`} {...rest}>
                {children}
            </button>
        )
    }
}

export default MedwingButton;
