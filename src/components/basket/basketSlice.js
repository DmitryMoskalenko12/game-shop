import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: 'idle'
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getCardsForBasket: (state, action) => {
      state.data = [...state.data, action.payload]
    }
  }

})

const {actions, reducer} = basketSlice;
export const {getCardsForBasket} = actions;

export default reducer;

/* export const showProduct = createSelector(
  state => state.buyCarousel.uniId,
  state => state.basket.data,
  (id, data) => {
   if(id === 0) {
    return []
   } else {
   return data
   }
  }
) */