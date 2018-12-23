import React from 'react';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { getPosts } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getPosts());
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();