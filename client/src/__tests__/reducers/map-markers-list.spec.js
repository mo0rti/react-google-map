import mapMarkers from 'Reducers/map-markers'
import { actionTypes } from 'Constants';

describe('map marker list reducer', () => {
    it('should return the initial state', () => {
        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined, {});

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the map markers list fetch request action', () => {

        // arrange
        const expectedState = {
            isLoading: true,
            error: { message: "" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_LIST.LOAD_REQUESTED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the map markers list fetch failed action', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "Some unexpected error happened" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_LIST.LOAD_FAILED,
                payload: "Some unexpected error happened"
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the map markers list fetch failed action when no error message passed', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "No error message specified" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_LIST.LOAD_FAILED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the map markers list received successfull action', () => {

        const apiResult = [
            { id: 'newid12345', title: 'Berlin', lat: 9.9, lng: 10.2},
            { id: 'newid12346', title: 'Munchen', lat: 91.9, lng: 30.2}
        ];

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "" },
            markers: apiResult
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_LIST.LIST_RECEIVED,
                payload: apiResult
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });
});