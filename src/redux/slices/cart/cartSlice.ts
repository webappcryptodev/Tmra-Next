import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

interface CartItem {
  amountTarget?: string | null;
  coverImage?: string | null;
  currencyCode?: string | null;
  description?: string | null;
  islamCharityType?: string | null;
  organizationId?: string | null;
  title?: string | null;
  amount?: number | null;
  _id?: string | null;
}

interface CartItemsState {
  carts: CartItem[];
}

const initialState: CartItemsState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCartItems: (state, action: PayloadAction<CartItem>) => {
      state.carts.push(action.payload);
      localStorage.setItem('tmraCart', JSON.stringify(state.carts));
    },
    removeCartItems: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter(cart => cart._id !== action.payload);
      localStorage.setItem('tmraCart', JSON.stringify(state.carts));
    },
    removeCartData: state => {
      state.carts = [];
      localStorage.setItem('tmraCart', JSON.stringify(state.carts));
    },
  },
});

export const { addCartItems, removeCartItems, removeCartData } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.carts;

export default cartSlice.reducer;
