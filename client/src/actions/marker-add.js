import { urls } from 'Constants';
import { HttpClient } from 'Helpers';

const _api = (data) => HttpClient().postAsync(`${urls.MARKERS}`, data);

export const addMarker = async (request) => {
    try {
        let { status, message, result } = await _api(request);
        if (status) {
            return Promise.resolve(result);
        } else {
            return Promise.reject({ message });
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
