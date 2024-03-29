import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import getCountries from './actions/actions-countries';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            {store.getState().countries.countries.map(country => (
                <div key={country.id}>
                    {country.name}
                </div>
            ))}
            <DevTools />
        </div>
        
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries()); // flow redux devtools pokazuje liste w historii