export interface Plant {
    id: number;
    name: string;
    edible: boolean;
    pictureUri: string;
}

export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

interface AddPlantAction {
    type: typeof ADD_PLANT,
    payload: Plant
}

interface RemovePlantAction  {
    type: typeof REMOVE_PLANT,
    payload: Plant
}

export type PlantActionTypes = AddPlantAction | RemovePlantAction