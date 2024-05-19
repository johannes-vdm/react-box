// src/App.js
import { Provider } from 'react-redux';
import store from './store';
import CakeContainer from './CakeContainer';

export function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
            </div>
        </Provider>
    );
}
