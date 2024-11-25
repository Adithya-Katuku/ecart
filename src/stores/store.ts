import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import Cart from "../interfaces/CartModel";
import CartItem from "../interfaces/CartItemModel";

interface Store extends Cart {
  username: string;
  isCartOpen: boolean;
}

const initialState: Store = {
  username: localStorage.username
    ? localStorage.username
    : "",
  list: localStorage.username && localStorage[localStorage.username]
    ? JSON.parse(localStorage[localStorage.username])
    : [],
  isCartOpen: false,
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const username = action.payload;
      state.username = username;
      state.list = localStorage[username]
        ? JSON.parse(localStorage[username])
        : [];
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      let newCart = state.list;
      const ids = state.list.map((item) => item.id);
      const targetId = action.payload.id;
      if (ids.indexOf(targetId) === -1) {
        newCart = [...state.list, action.payload];
      } else {
        newCart = state.list.map((item) =>
          item.id === targetId ? { ...item, count: item.count + 1 } : item
        );
      }
      localStorage[state.username] = JSON.stringify(newCart);
      state.list = newCart;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const newCart = state.list.filter((item) => item.id !== action.payload);
      localStorage[state.username] = JSON.stringify(newCart);
      state.list = newCart;
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      let newCart = state.list;
      const removedItem = state.list.filter(
        (item) => item.id === action.payload
      )[0];
      const modifiedItem = { ...removedItem, count: removedItem.count - 1 };
      if (modifiedItem.count > 0) {
        newCart = state.list.map((item) =>
          item.id === action.payload ? modifiedItem : item
        );
      } else {
        newCart = state.list.filter((item) => item.id !== action.payload);
      }
      localStorage[state.username] = JSON.stringify(newCart);
      state.list = newCart;
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const addedItem = state.list.filter(
        (item) => item.id === action.payload
      )[0];
      const modifiedItem = { ...addedItem, count: addedItem.count + 1 };
      const newCart = state.list.map((item) =>
        item.id === action.payload ? modifiedItem : item
      );
      localStorage[state.username] = JSON.stringify(newCart);
      state.list = newCart;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  login,
  addItem,
  removeItem,
  decrementItem,
  incrementItem,
  toggleCart,
} = slice.actions;

export const store = configureStore({
  reducer: {
    store: slice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
