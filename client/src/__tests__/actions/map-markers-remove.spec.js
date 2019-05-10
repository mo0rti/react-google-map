
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeMarker } from "Actions";
import { actionTypes, urls } from 'Constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('map markers remove async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates MARKERS_REMOVE.REMVOE_REQUESTED action type when removing a map marker succeed', () => {
        // arrange
        const id = "someid123";
        const url = `${urls.MARKERS}/${id}`;
        const response = true;

        fetchMock
            .deleteOnce(url,
                {
                    body: {
                        "status": true,
                        "result": response
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_REMOVE.REMVOE_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_REMOVE.REMOVE_SUCCEEDED, payload: id }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(removeMarker(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates MARKERS_REMOVE.REMOVE_SUCCEEDED action type when removing a map marker failed', () => {
        // arrange
        const id = "someid123";
        const url = `${urls.MARKERS}/${id}`;
        const message = "Some unexpected error";

        fetchMock
            .deleteOnce(url,
                {
                    body: {
                        "status": false,
                        "message": message
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_REMOVE.REMVOE_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_REMOVE.REMOVE_FAILED, payload: message }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(removeMarker(id))
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
});
