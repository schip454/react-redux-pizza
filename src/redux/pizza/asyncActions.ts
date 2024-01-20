import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISearchPizzaParams, PizzaType } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<PizzaType[], ISearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category, search, currentPage, sortBy } = params;
    const { data } = await axios<PizzaType[]>(
      `https://659c1d9fd565feee2dac71dd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=desc${search}`
    );

    return data;
  }
);
