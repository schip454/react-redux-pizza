import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilterSliceState, SortPropertyEnum, SortType } from "./types";

const initialState: IFilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: { name: "популярности", sortProperty: SortPropertyEnum.RATING },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, { payload }: PayloadAction<number>) => {
      state.categoryId = payload;
    },
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    setSort: (state, { payload }: PayloadAction<SortType>) => {
      state.sort = payload;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setFilters: (state, { payload }: PayloadAction<IFilterSliceState>) => {
      if (Object.keys(payload).length) {
        state.sort = payload.sort;
        state.currentPage = Number(payload.currentPage);
        state.categoryId = Number(payload.categoryId);
      } else {
        state.sort = {
          name: "популярности",
          sortProperty: SortPropertyEnum.PRICE,
        };
        state.currentPage = 1;
        state.categoryId = 0;
      }
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
