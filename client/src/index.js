import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Store';
import { MedwingErrorHandler } from 'Components';
import App from 'Views';
import * as serviceWorker from './serviceWorker';

const Root = () =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MedwingErrorHandler>
                <App />
            </MedwingErrorHandler>
        </PersistGate>
    </Provider>

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();