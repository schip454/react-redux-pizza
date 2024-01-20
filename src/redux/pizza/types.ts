export type PizzaType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export interface ISearchPizzaParams {
  category: string;
  search: string;
  currentPage: number;
  sortBy: string;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IPizzaSliceState {
  items: PizzaType[];
  status: Status;
}
