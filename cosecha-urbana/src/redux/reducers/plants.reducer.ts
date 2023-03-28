import { ADD_PLANT, Plant, PlantActionTypes, REMOVE_PLANT } from '../types'

export const initialState: Plant[] = [{
    id: 1,
    name: "chorola",
    edible: false
}]

export function plantReducer(state: Plant[] = initialState, action: PlantActionTypes): Plant[] {
    switch (action.type) {
      case ADD_PLANT: 
        return([...state,action.payload ]);
      break
      case REMOVE_PLANT: 
        const newState = state.filter((s)=> s.id != action.payload.id)
        return (newState);
      break
      default:
        return state
    }
  };