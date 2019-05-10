import { actionTypes, urls } from 'Constants';
import { HttpClient } from 'Helpers';

//-------------------- action initializiation
const { MARKERS_LIST: actionType } = actionTypes;

//-------------------- action creators
const _requested = () => ({
    type: actionType.LOAD_REQUESTED
});

const _failed = (message) => ({
    type: actionType.LOAD_FAILED,
    payload: message
});

const _received = (result) => ({
    type: actionType.LIST_RECEIVED,
    payload: result
});

//-------------------- methods
const _api = () => HttpClient().getAsync(`${urls.MARKERS}`);

export const getMarkers = () => async (dispatch) => {
    dispatch(_requested());
    try {
        let { status, message, result } = await _api();
        if (status) {
            dispatch(_received(result));
            return Promise.resolve(message);
        } else {
            dispatch(_failed(message));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};