import { ADD_PLANT, Plant, PlantActionTypes, REMOVE_PLANT } from '../types'

export const initialState: Plant[] = []

export function plantReducer(state: Plant[] = initialState, action: PlantActionTypes): Plant[] {
    switch (action.type) {
      case ADD_PLANT: 
        return([...state,action.payload ]);
      break
      case REMOVE_PLANT: 
        return state.filter((s)=> s.id != action.payload.id)
      break
      default:
        return state
    }
  };