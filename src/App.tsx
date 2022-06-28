import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './stores/store';

import '#Locales/i18n';
import { ModuleMain } from '#Components/cores/Main';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <PersistGate loading={null} persistor={persistor}>
                    <ModuleMain />
                </PersistGate>
            </div>
        </Provider>
    );
}

export default App;
