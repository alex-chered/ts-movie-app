// Redux
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Reducer
import { rootReducer } from './root-reducer';

// Create store
export const store = configureStore({
  reducer: rootReducer,
  devTools: false
  // devTools: process.env.NODE_ENV !== 'production'
});

// Infer the 'AppState' and 'AppDispatch' types from the store itself
export type AppState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

// Create typed hooks instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
