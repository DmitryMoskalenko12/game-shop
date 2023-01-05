import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const initialState = {
  status: 'idle'
}

export const fetchContacts = createAsyncThunk(
  'contcts/fetchContacts',
  (messedge) => {
  const {request} = useHttp();
  return request('http://localhost:3001/messedge', 'POST', JSON.stringify(messedge))
  }
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers:{
    status: (state, action) => {
      state.status = action.payload
    }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchContacts.fulfilled, (state) => {
      state.status = 'fulfilled'
    })
    .addCase(fetchContacts.rejected, state => {
      state.status = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {actions, reducer} = contactsSlice;
export const {status} = actions;

export default reducer;