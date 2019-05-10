import mapMarkers from 'Reducers/map-markers'
import { actionTypes } from 'Constants';

describe('map marker remove reducer', () => {

    it('should handle the map marker remove request action', () => {

        // arrange
        const expectedState = {
            isLoading: true,
            error: { message: "" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_REMOVE.REMVOE_REQUESTED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the remove map marker failed action', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "Some unexpected error happened" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_REMOVE.REMOVE_FAILED,
                payload: "Some unexpected error happened"
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the remove map marker failed action when no error message passed', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "No error message specified" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_REMOVE.REMOVE_FAILED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the remove map marker successfull action', () => {

        const removedMarker = { id: 'newid12345', title: 'Berlin', lat: 9.9, lng: 10.2 };

        // arrange
        const initialState = {
            isLoading: false,
            error: { message: "" },
            markers: [removedMarker]
        };

        const expectedState = {
            isLoading: false,
            error: { message: "" },
            markers: []
        };

        // act
        const actualState = mapMarkers(initialState,
            {
                type: actionTypes.MARKERS_REMOVE.REMOVE_SUCCEEDED,
                payload: 'newid12345'
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });
});