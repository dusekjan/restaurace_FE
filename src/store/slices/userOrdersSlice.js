import { createSlice } from '@reduxjs/toolkit';

// we can use immer library syntax
const userOrdersSlice = createSlice({
  name: 'userOrders',
  initialState: {
    orderDetails: null,
    data: []
  },
  reducers: {
    changeOrders(state, action) {
      // action.payload === [{ORDER}, {ORDER}, {ORDER}]
      state.data = action.payload;
    },
    toggleDetail(state, action) {
      // action.payload === ID or null
      if (action.payload === state.orderDetails?.id) {
        state.orderDetails = null
      } else {
        state.orderDetails = action.payload;
      }
    },
  },
});

export const { changeOrders, toggleDetail } = userOrdersSlice.actions;
export const userOrdersReducer = userOrdersSlice.reducer;
