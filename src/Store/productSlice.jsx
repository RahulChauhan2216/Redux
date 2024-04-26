// import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

// const STATUSES = Object.freeze({
//   IDLE: "idle",
//   ERROR: "error",
//   LOADING: "loading",
// });

// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     data: [],
//     status: STATUSES.IDLE,
//   },
//   reducers: {
//     setProduct(state, action) {
//       state.data = action.payload;
//     },
//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setProduct, setStatus } = productSlice.actions;
// export default productSlice.reducer;

// // Thunk and its uses

// export function fetchProducts() {
//   return async function fetchProducts(dispatch, getstate) {
//     dispatch()
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProduct(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }

// ------------------------------------

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload;
  //   },
  //   setStatus(state, action) {
  //     state.status = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("fetchproduct", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getstate) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
