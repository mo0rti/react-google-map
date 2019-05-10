
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMarkers } from "Actions";
import { actionTypes, urls } from 'Constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('map markers list async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates MARKERS_LIST.LIST_RECEIVED action type when fetching map markers has done', () => {
        // arrange
        const url = `${urls.MARKERS}`;
        const result = [
            {
                id: 'newid1200045',
                title: 'Leipzig',
                lat: 51.33,
                lng: 12.37
            }
        ];

        fetchMock
            .getOnce(url,
                {
                    body: {
                        "status": true,
                        "result": result
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_LIST.LOAD_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_LIST.LIST_RECEIVED, payload: result }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(getMarkers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates MARKERS_LIST.LOAD_FAILED action type when fetching map markers has failed', () => {
        // arrange
        const url = `${urls.MARKERS}`;
        const message = "Some unexpected error";

        fetchMock
            .getOnce(url,
                {
                    body: {
                        "status": false,
                        "message": message
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_LIST.LOAD_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_LIST.LOAD_FAILED, payload: message }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(getMarkers())
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
});
