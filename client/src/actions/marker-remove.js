import { actionTypes, urls } from 'Constants';
import { HttpClient } from 'Helpers';

//-------------------- action initializiation
const { MARKERS_REMOVE: actionType } = actionTypes;

//-------------------- action creators
const _requested = () => ({
    type: actionType.REMVOE_REQUESTED
});

const _failed = message => ({
    type: actionType.REMOVE_FAILED,
    payload: message
});

const _received = result => ({
    type: actionType.REMOVE_SUCCEEDED,
    payload: result
});

//-------------------- methods
const _api = (id) => HttpClient().deleteAsync(`${urls.MARKERS}/${id}`);

export const removeMarker = (id) => async (dispatch) => {
    dispatch(_requested());
    try {
        let { status, message, result } = await _api(id);
        if (status && result) {
            dispatch(_received(id));
            return Promise.resolve(message);
        } else {
            dispatch(_failed(message || "There was an error in deleting this marker"));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};
