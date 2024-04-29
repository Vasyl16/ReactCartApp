import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterReducer from './filter/filterSlice';
import clothesSlice from './clothes/clothesSlice';
import cartItems from './cartItems/cartItemsSlice';
import chooseItem from './chooseItem/chooseItemSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    clothes: clothesSlice,
    cartItems: cartItems,
    chooseItem: chooseItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
