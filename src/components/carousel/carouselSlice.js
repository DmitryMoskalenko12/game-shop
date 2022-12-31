import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  status:'idle',
  activeButton: false,
  offset: 0,
  slideIndex: 1,
  width: 967
}

export const fetchCarousel = createAsyncThunk(
  'carousel/fetchCarousel',
  () => {
    const {request} = useHttp();
    return request(`http://localhost:3001/carousel`)
  }
)

const carousel = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    buttonTrigger: (state, action) => {
      state.activeButton = action.payload
    },
    offset: (state, action) => {
      state.offset = action.payload
    },
    slideIndex: (state, action) => {
      state.slideIndex = action.payload
    },
    width: (state, action) => {
      state.width = action.payload
    }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchCarousel.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchCarousel.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })
    .addCase(fetchCarousel.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = carousel;
export const {carouselLoading, carouselFulfilled, carouselError, buttonTrigger, offset, slideIndex, width} = actions;

export default reducer;
