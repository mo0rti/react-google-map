import { actionTypes } from 'Constants';

const { MARKERS_LIST: actionType } = actionTypes;

//-------------------- reducer implementation
const mapMarkersList = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionType.LOAD_REQUESTED: {
            return Object.assign({}, state, { isLoading: true, error: { message: "" } });
        }
        case actionType.LOAD_FAILED: {
            // TODO: reducer logger >> must call an error logger
            return Object.assign({}, state, {
                isLoading: false,
                error: { message: payload || "No error message specified" }
            });
        }
        case actionType.LIST_RECEIVED: {
            return Object.assign({}, state, { isLoading: false, markers: payload, error: { message: "" } });
        }
        default: return state;
    }
};

export default mapMarkersList;
