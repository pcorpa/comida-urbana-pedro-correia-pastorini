import { combineReducers } from 'redux';
import {plantReducer} from './plants.reducer'
import { authReducer } from './auth.reducer';


export const rootReducer = combineReducers({
   plant: plantReducer,
   auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


