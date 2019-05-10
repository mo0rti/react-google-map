import { urls } from 'Constants';
import { HttpClient } from 'Helpers';

//-------------------- methods
const _api = ({ id, marker }) => HttpClient().putAsync(`${urls.MARKERS}/${id}`, marker);

export const updateMarker = async (request) => {
    try {
        let { status, message, result } = await _api(request);
        if (status) {
            return Promise.resolve({ id: request.id, marker: result });
        } else {
            return Promise.reject({ message });
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
