import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data:[],
  status: 'idle',
  page: 1,
  db: 'http://localhost:3001/activity'
}

export const fetchActivity = createAsyncThunk(
  'activity/fetchActivity',
   (page) => {
   let limit = 2
   const {request} = useHttp();
   return request(`http://localhost:3001/activity?_limit=${limit}&_page=${page}`)
  }
)

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    page: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchActivity.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchActivity.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled';
    })
    .addCase(fetchActivity.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = activitySlice;
export const {page} = actions;

export default reducer;