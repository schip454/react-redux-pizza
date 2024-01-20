import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem, ICartSliceState } from "./types";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

const { items, totalPrice } = getCartFromLS();

const initialState: ICartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem: (state, { payload }: PayloadAction<string>) => {
      const findItem = state.items.find((item) => item.id === payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== payload);

      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
