import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  status: 'idle',
  slideIndex: 1,
  offset: 0,
  width: 0
}
export const fetchOfferCarousel = createAsyncThunk(
  'offerCarousel/fetchOfferCarousel',
  () => {
   const {request} = useHttp();
   return request('http://localhost:3001/offerCarousel')
  }
)
const offerCarouselSlice = createSlice({
  name: 'offerCarousel',
  initialState,
  reducers: {
    width: (state, action) => {
     state.width = action.payload
    },
    slideIndex: (state, action) => {
      state.slideIndex = action.payload
    },
    offset: (state, action) => {
      state.offset = action.payload
    }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchOfferCarousel.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchOfferCarousel.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })
    .addCase(fetchOfferCarousel.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }

})
const {actions, reducer} = offerCarouselSlice;
export const {slideIndex, offset, width} = actions;
export default reducer;