import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import catalog from '../components/catalog/catalogSlice';
import carousel from '../components/carousel/carouselSlice';
import catalogChoice from '../components/catalogChoice/catalogChoiceSlice';
import buyCarusel from '../components/buyCarousel/buyCarouselSlice';

const stringMiddleware = () => (next) => (action) =>{
  if (typeof action === 'string') {
    return next({
       type: action
     })
   }
   return next(action)
 }

const store = configureStore({
  reducer:{catalog, carousel, catalogChoice, buyCarusel},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;