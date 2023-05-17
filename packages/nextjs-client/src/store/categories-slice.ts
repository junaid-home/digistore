import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";

interface CategoryState {
  categories: { id: string; name: string; slug: string }[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload.categories;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const selectCategoriesState = (state: AppState) => state.category;

export default categorySlice.reducer;
