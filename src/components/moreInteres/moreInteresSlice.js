import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  status: 'idle'
}
export const fetchMoreInteres = createAsyncThunk(
  'moreInteres/fetchMoreInteres',
  () => {
    const {request} = useHttp();
    return request('http://localhost:3001/moreInteres')
  }

)
const moreInteresSlice = createSlice({
  name: 'moreInteres',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
    .addCase(fetchMoreInteres.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchMoreInteres.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })
    .addCase(fetchMoreInteres.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = moreInteresSlice;
export default reducer;