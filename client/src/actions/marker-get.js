import { urls } from 'Constants';
import { HttpClient } from 'Helpers';

const _api = (id) => HttpClient().getAsync(`${urls.MARKERS}/${id}`);

export const getMarker = async (id) => {
    try {
        let { status, message, result } = await _api(id);
        if (status && result.length != 0) {
            const marker = result[0];
            return Promise.resolve(marker);
        } else {
            const errorMessage = message || 'No marker found';
            return Promise.reject({ message: errorMessage });
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
