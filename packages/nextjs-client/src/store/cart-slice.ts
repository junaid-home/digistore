import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { AppState } from "./index";

interface CartState {
  items: {
    id: string;
    name: string;
    thumbnail: string;
    selling_price: number;
    size: string;
    color: string;
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items = [...state.items, action.payload];
    },
    updateCartItemQuantity(state, action) {
      const productId = action.payload.id;
      const newQuantity = action.payload.quantity;

      const newCartItems = state.items.map((item) => {
        if (item.id === productId) {
          item.quantity = newQuantity;
        }

        return item;
      });

      state.items = newCartItems;
    },
    clearCart(state, action) {
      state.items = [];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addToCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart;

export default cartSlice.reducer;
