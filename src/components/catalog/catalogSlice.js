import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  data: [],
  activeFilter: 'Warhammer 40000',
  changeStatus: 'idle'
}

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
   () => {
   const {request} = useHttp()
   return request(`http://localhost:3001/warhammer`)
   }
)
const catalog = createSlice({
   name: 'catalog',
   initialState,
   reducers: {
     activeFilter: (state, action) => {
      state.activeFilter = action.payload
     }
   },
   extraReducers: builder => {
    builder
    .addCase(fetchCatalog.pending, state => {
      state.changeStatus = 'loading'
    })
    .addCase(fetchCatalog.fulfilled, (state, action) => {
      state.data = action.payload
      state.changeStatus = 'fulfield'
    })
    .addCase(fetchCatalog.rejected, state => {
      state.changeStatus = 'error'
    })
    .addDefaultCase(() => {})
}})

export const finalFilter = createSelector(
  state => state.catalog.data,
  state => state.catalog.activeFilter,
  (arr, filter) => {
    if (filter === 'Warhammer 40000') {
      return arr.filter(item => item.uniId === filter)
    } else {
      return arr.filter(item => item.uniId === filter)
    }
  }
)

const {actions, reducer} = catalog;

export const {catalogFetching, catalogFetched, catalogError, activeFilter} = actions;
export default reducer;