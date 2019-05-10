import { combineReducers } from 'redux';
import mapMarkers from './map-markers';

const allReducers = combineReducers(
    {
        markers: mapMarkers
    });

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;