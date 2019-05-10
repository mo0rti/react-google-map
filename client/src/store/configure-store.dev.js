import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "Reducers";

let logOptions = {
    diff: true
};

const logger = createLogger(logOptions);

const rootPersistConfig = {
    key: 'root',
    storage: storage
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, applyMiddleware(thunk/*, logger*/));
export const persistor = persistStore(store);