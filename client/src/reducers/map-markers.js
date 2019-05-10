import mapMarkersList from "./map-markers-list";
import mapMarkersRemove from "./map-markers-remove";

//-------------------- reducer initializiation
const initState = {
    isLoading: false,
    error: { message: "" },
    markers: []
};

//-------------------- reducer implementation
const markersList = (state = initState, action) => {
    state = mapMarkersList(state, action);
    state = mapMarkersRemove(state, action);
    return state;
};

export default markersList;
