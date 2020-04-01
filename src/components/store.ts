
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/mainReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window { devToolsExtension: any; }
}


export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);