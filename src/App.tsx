import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './stores/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { ModuleMain } from '#Components/cores/Main';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <PersistGate loading={null} persistor={persistor}>
                    <I18nextProvider i18n={i18next}>
                        <ModuleMain />
                    </I18nextProvider>
                </PersistGate>
            </div>
        </Provider>
    );
}

export default App;
