import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface Plant {
  id: number;
  name: string;
  edible: boolean;
  pictureUri: string;
}

export const initialState: Plant[] = [];

export const plantSlice = createSlice({
  name: "plantSlice",
  initialState,
  reducers: {
    addPlant: (state: Plant[], action: PayloadAction<Plant>) => [
      ...state,
      action.payload,
    ],
    removePlant: (state: Plant[], action) =>
      state.filter((s) => s.id != action.payload.id),
  },
});

export const { addPlant, removePlant } = plantSlice.actions;
export const selectPlant = (state: RootState) => state.plants;
export default plantSlice.reducer;
