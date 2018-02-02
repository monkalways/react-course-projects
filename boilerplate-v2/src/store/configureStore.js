import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import loggerMiddleware from 'redux-logger'

import authReducer from '../reducers/auth';
import siteReducer from '../reducers/site';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => {
    const middlewares = [
        // loggerMiddleware,
        thunkMiddleware,
        routerMiddleware(history)
    ];

    /* eslint-disable no-underscore-dangle */
    const store = createStore(
        combineReducers({
            site: siteReducer,
            auth: authReducer,
            router: routerReducer // Add the reducer to your store on the `router` key
        }),
        composeEnhancers(applyMiddleware(...middlewares)) // apply router middleware for navigating
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    /* eslint-enable */

    return store;
};
