import React from "react";
import { ServiceErrorHandler } from "Helpers";
import Layout from "./Layout";

class MedwingErrorHandler extends React.Component {
    state = { hasError: false }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        ServiceErrorHandler().fatalError({ error, info });
    }

    render() {
        return this.state.hasError ?
            <Layout /> :
            this.props.children
    }
}

export default MedwingErrorHandler;