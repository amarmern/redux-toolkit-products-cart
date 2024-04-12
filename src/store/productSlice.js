import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
  status: 'idle',
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = 'Loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

//creating the thunk

export const getProducts = createAsyncThunk('product/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = data.json();
  return result;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch('https://fakestoreapi.com/products');
//     const result = data.json();
//     console.log('result', result.data);
//     dispatch(fetchProducts(result));
//   };
// }
