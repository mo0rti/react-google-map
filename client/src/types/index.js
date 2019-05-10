import { bool, func, shape, number, string, arrayOf } from 'prop-types';

export const tMapMarker = shape({
    id: string,
    title: string.isRequired,
    lat: number.isRequired,
    lng: number.isRequired
});

export const tMapMarkers = arrayOf(tMapMarker);

export const tMapCenter = shape({
    lat: number.isRequired,
    lng: number.isRequired
});

export const tFunc = func;
export const tNumber = number;
export const tBool = bool;
export const tString = string;