import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface Plant {
  id?: string;
  name: string;
  edible: boolean;
  photoUri: string;
}

export const initialState: Plant[] = [];

export const plantSlice = createSlice({
  name: "plantSlice",
  initialState,
  reducers: {
    addPlantToLocalStore: (state: Plant[], action: PayloadAction<Plant>) => [
      ...state,
      action.payload,
    ],
    addAllPlantsfromDB: (state: Plant[], action: PayloadAction<Plant[]>) =>
      action.payload,
    removePlant: (state: Plant[], action: PayloadAction<Plant>) =>
      state.filter((p) => p.id !== action.payload.id),
    logOutCleanUp: () => [],
  },
});

export const {
  addPlantToLocalStore,
  addAllPlantsfromDB,
  removePlant,
  logOutCleanUp,
} = plantSlice.actions;
export const selectPlant = (state: RootState) => state.plants;
export default plantSlice.reducer;
