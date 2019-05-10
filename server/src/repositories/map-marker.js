let IN_MEMORY_DB = [];

export default class MapMarkerRepository {
    get = async (id) => Promise.resolve((!id) ? IN_MEMORY_DB : IN_MEMORY_DB.filter(t => t.id == id));

    async add(marker) {
        IN_MEMORY_DB.push(marker);
        return Promise.resolve(marker);
    }

    async update({ id, marker }) {
        let updatedMarker = null;
        IN_MEMORY_DB = IN_MEMORY_DB.map(t => {
            if (t.id != id) return t;
            updatedMarker = { ...t, title: marker.title, lng: marker.lng, lat: marker.lat };
            console.log(updatedMarker);
            return updatedMarker;
        });
        return Promise.resolve(updatedMarker)
    }

    async remove(id) {
        try {
            let count = IN_MEMORY_DB.length;
            IN_MEMORY_DB = IN_MEMORY_DB.filter(marker => marker.id != id);
            return (IN_MEMORY_DB.length != count) ? Promise.resolve(true) : Promise.reject(false);
        } catch (err) {
            console.log(err);
        }
    }
}