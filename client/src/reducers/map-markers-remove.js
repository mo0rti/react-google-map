import { actionTypes } from 'Constants';

const { MARKERS_REMOVE: actionType } = actionTypes;

//-------------------- reducer implementation
const mapMarkersRemove = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionType.REMVOE_REQUESTED: {
            return Object.assign({}, state, { isLoading: true, error: { message: "" } });
        }
        case actionType.REMOVE_FAILED: {
            // TODO: reducer logger >> must call an error logger
            return Object.assign({}, state, {
                isLoading: false,
                error: { message: payload || "No error message specified" }
            });
        }
        case actionType.REMOVE_SUCCEEDED: {
            const newMarkers = state.markers.filter(t => t.id !== payload);
            return Object.assign({}, state, { isLoading: false, markers: newMarkers, error: { message: "" } });
        }
        default: return state;
    }
};

export default mapMarkersRemove;
