import { ActionCreator } from 'redux';
import { ADD_PLANT, REMOVE_PLANT, Plant, PlantActionTypes } from '../types';

export const addPlant: ActionCreator<PlantActionTypes> = (plant: Plant) => {
  return { type: ADD_PLANT, payload: plant };
}
export const removePlant: ActionCreator<PlantActionTypes> = (plant: Plant) => {
  return { type: REMOVE_PLANT, payload: plant };
}








  
