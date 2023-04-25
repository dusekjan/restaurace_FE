import { configureStore } from '@reduxjs/toolkit';
import { userOrdersReducer, changeOrders, toggleDetail } from './slices/userOrdersSlice';
import { userDataReducer, setUserData, setFormValue } from "./slices/userDataSlice";
import { adminOrdersApi } from "./apis/adminOrdersApi";
import { adminUsersApi } from "./apis/adminUsersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {adminRestaurantApi} from "./apis/adminRestaurantApi";

const store = configureStore({
  reducer: {
    userOrders: userOrdersReducer,
    userData: userDataReducer,
    [adminOrdersApi.reducerPath]: adminOrdersApi.reducer,
    [adminUsersApi.reducerPath]: adminUsersApi.reducer,
    [adminRestaurantApi.reducerPath]: adminRestaurantApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
        .concat(adminOrdersApi.middleware)
        .concat(adminUsersApi.middleware)
        .concat(adminRestaurantApi.middleware);
  }
});


setupListeners(store.dispatch)

export { store, changeOrders, toggleDetail, setUserData, setFormValue };
export {
  useFetchAdminOrdersQuery,
  useFetchAdminDetailOrderQuery,
  useChangeStatusMutation } from "./apis/adminOrdersApi";
export {
  useFetchAdminUsersQuery,
  useDeleteUserMutation} from "./apis/adminUsersApi";
export {
  useFetchRestaurantOpenedQuery,
  useRestaurantOpenedMutation} from "./apis/adminRestaurantApi";