import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  status: 'idle'
}
const fetchBuyCarousel = createAsyncThunk(
  'buyCarousel/fetchBuyCarousel',
  () => {
   const {request} = useHttp;
   return request('http://localhost:3001/buyCarousel')
  }
)
const buyCarouselSlice = createSlice({
  name: 'buyCarousel',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchBuyCarousel.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchBuyCarousel.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })
    .addCase(fetchBuyCarousel.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }

})
const {actions, reducer} = buyCarouselSlice;
export default reducer;