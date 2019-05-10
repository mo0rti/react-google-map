import MapMarkerRepository from "../repositories/map-marker";
import MapMarker from "../models/map-marker";

export default class MapMarkerService {
    async getAll() {
        return await (new MapMarkerRepository()).get();
    }

    async getById(id) {
        return await (new MapMarkerRepository()).get(id);
    }

    async addMarker({ title, lng, lat }) {
        const mapMarker = new MapMarker({ title, lng, lat });
        return await (new MapMarkerRepository()).add(mapMarker);
    }

    async updateMarker({ id, marker }) {
        return await (new MapMarkerRepository()).update({ id, marker });
    }

    async removeMarker(id) {
        return await (new MapMarkerRepository()).remove(id);
    }
}