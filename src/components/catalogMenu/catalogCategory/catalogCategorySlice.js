import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../../hooks/http.hook";

const initialState = {
  data: [],
  filter: '',
  status: 'idle'
}

export const fetchCatalogCategory = createAsyncThunk(
  'catalogCategory/fetchCatalogCategory',
  () => {
   const {request} = useHttp();
   return request('http://localhost:3001/listCategory')
  }
)

const categoryCatalogSlice = createSlice({
  name: 'catalogCategory',
  initialState,
  reducers:{
    getFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: build => {
    build
    .addCase( fetchCatalogCategory.pending, state => {
      state.status = 'loading'
    })
    .addCase( fetchCatalogCategory.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'loading'
    })
    .addCase( fetchCatalogCategory.rejected, state => {
      state.status = 'error'
    })
  }
})

const {actions, reducer} = categoryCatalogSlice;
export const {getFilter} = actions;
export default reducer;