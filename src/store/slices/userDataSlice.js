import { createSlice } from '@reduxjs/toolkit';

// we can use immer library syntax
const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    nameInput: "",
    emailInput: "",
    passwordInput: "",
    passwordRepeatInput: ""
  },
  reducers: {
    setUserData(state, action) {
      // action.payload === User Object
      state.nameInput = action.payload.name
      state.emailInput = action.payload.email
    },
    setFormValue(state, action) {
      // action.payload === ["nameInput", "newValue"]
      state[action.payload[0]] = action.payload[1]
    }
  },
});

export const { setUserData, setFormValue } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
