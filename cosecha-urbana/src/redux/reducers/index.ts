import { combineReducers } from 'redux';
import {plantReducer} from './plants.reducer'


export const rootReducer = combineReducers({
   plant: plantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


