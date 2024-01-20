export interface ICartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

export interface ICartSliceState {
  totalPrice: number;
  items: ICartItem[];
}
