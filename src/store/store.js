import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import catalog from '../components/catalog/catalogSlice';

const stringMiddleware = () => (next) => (action) =>{
  if (typeof action === 'string') {
    return next({
       type: action
     })
   }
   return next(action)
 }

const store = configureStore({
  reducer:{catalog},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;