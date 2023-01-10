import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import catalog from '../components/catalog/catalogSlice';
import carousel from '../components/carousel/carouselSlice';
import catalogChoice from '../components/catalogChoice/catalogChoiceSlice';
import buyCarousel from '../components/buyCarousel/buyCarouselSlice';
import offerCarousel from '../components/offerCarousel/offerCarouselSlice';
import activity from '../components/activity/ActivitySlice';
import moreInteres from '../components/moreInteres/moreInteresSlice';
import contacts from '../components/contacts/contactsSlice';
import basket from '../components/basket/basketSlice';
import catalogCategory from '../components/catalogMenu/catalogCategory/catalogCategorySlice';

const stringMiddleware = () => (next) => (action) =>{
  if (typeof action === 'string') {
    return next({
       type: action
     })
   }
   return next(action)
 }

const store = configureStore({
  reducer:{catalog, carousel, catalogChoice, buyCarousel, offerCarousel, activity, moreInteres, contacts, basket, catalogCategory},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;