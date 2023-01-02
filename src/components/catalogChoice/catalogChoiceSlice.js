import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  status: 'idle'
}

export const fetchCatalogChoice = createAsyncThunk(
  'catalogChoice/fetchCatalogChoice',
  () => {
   const {request} = useHttp();
   return request('http://localhost:3001/catalogChoice')
  }
)

const catalogChoice = createSlice({
  name:'catalogChoice',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
    .addCase(fetchCatalogChoice.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchCatalogChoice.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'fulfilled'
    })
    .addCase(fetchCatalogChoice.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = catalogChoice;
export default reducer;