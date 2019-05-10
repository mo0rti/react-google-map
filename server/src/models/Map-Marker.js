import uuidv4 from 'uuid/v4';

export default class MapMarker {

    constructor({ title, lng, lat }) {
        this.id = uuidv4();
        this.title = title || "Untitled marker"
        this.lng = lng || 0.0;
        this.lat = lat || 0.0;
    }
}