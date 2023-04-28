import { configureStore } from '@reduxjs/toolkit';
import { userOrdersReducer, changeOrders, toggleDetail } from './slices/userOrdersSlice';
import { userDataReducer, setUserData, setFormValue } from "./slices/userDataSlice";

const store = configureStore({
  reducer: {
    userOrders: userOrdersReducer,
    userData: userDataReducer
  }
});

export { store, changeOrders, toggleDetail, setUserData, setFormValue };