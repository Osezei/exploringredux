import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { footwears } from "../../data/Data.js";

const initialState = {
  cartItems: footwears,
  amount: 1,
  total: 0,
  isLoading: true,
};

// export const getCartItems = () => {
//   return footwears.map(({ id }) => {
//     return;
//   });
// };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {},
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
