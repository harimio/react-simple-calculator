import { createStore } from 'redux';
import { reducers } from './calculator';


export default function configureStore(initialState) {
 return createStore(reducers, initialState);
};
