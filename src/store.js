import {createStore, compose} from 'redux';
import reducer from './reducer';


const composeEnhancers = window._REUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    reducer,
    composeEnhancers()
);

export default store;
