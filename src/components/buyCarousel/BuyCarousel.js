import './buyCarousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef,useState } from 'react';
import { fetchBuyCarousel, offset, slideIndex, width } from './buyCarouselSlice';
import { getCardsForBasket } from '../basket/basketSlice';
import BuyCarouselCard from './BuyCarouselCard';

import useHttp from '../../hooks/http.hook';

const BuyCarousel = () => {

  const buyCards = useSelector(state => state.buyCarousel.data);
  const basket = useSelector(state => state.basket.data);
  const dispatch = useDispatch();
  let offsetCarousel = useSelector(state => state.buyCarousel.offset);
  const slideIndexCarousel = useSelector(state => state.buyCarousel.slideIndex);
  let windowWidthResult = useSelector(state => state.buyCarousel.width);
  let windowWidth = useRef();

  const [slideNumber, setSlideNumber] = useState(0);
  const [marginRight, setMarginRight] = useState(0);

  const {request} = useHttp();

  useEffect(() => {
    if(window.screen.availWidth <= 1399 && window.screen.availWidth >= 1199){
    setSlideNumber(/* 7 */ 4)
    setMarginRight(30)
   } else if (window.screen.availWidth <= 1199 && window.screen.availWidth >= 991) {
    setSlideNumber(/* 6 */ 3)
    setMarginRight(8)
   } else if (window.screen.availWidth <= 991 && window.screen.availWidth >= 767) {
    setSlideNumber(/* 5 */ 2)
    setMarginRight(21)
   } else if(window.screen.availWidth <= 767 && window.screen.availWidth >= 575) {
    setSlideNumber(/* 5 */ 2)
    setMarginRight(2)
   } else if (window.screen.availWidth <= 575) {
    setSlideNumber(1)
    setMarginRight(0)
   }
  },[])

  const next = () => {
    if (slideIndexCarousel === buyCards.length) {
      dispatch(slideIndex(1))
    }else {
      dispatch(slideIndex(slideIndexCarousel + 1))
    }
    if (offsetCarousel === (+windowWidthResult + +marginRight) * (buyCards.length / slideNumber === buyCards.length ? buyCards.length - 1 : Math.ceil(buyCards.length / slideNumber - 1)) ) {
      dispatch(offset(0))
    } else {
      dispatch(offset(offsetCarousel += (+windowWidthResult + +marginRight)))
    }
  }

  const prev = () => {
    if (slideIndexCarousel === 1) {
      dispatch(slideIndex(buyCards.length))
    }else {
      dispatch(slideIndex(slideIndexCarousel - 1))
    }
    if (offsetCarousel === 0) {
      dispatch(offset(offsetCarousel = (+windowWidthResult + +marginRight) * (buyCards.length / slideNumber === buyCards.length ? buyCards.length - 1 : Math.ceil(buyCards.length / slideNumber - 1)) ))
    } else {
      dispatch(offset(offsetCarousel -= (+windowWidthResult + +marginRight)))
    }
  }

  useEffect(() => {
    dispatch(width((getComputedStyle(windowWidth.current).width.replace(/\D/img, ''))))
    //eslint-disable-next-line
  },[])

  useEffect(() => {
   dispatch(fetchBuyCarousel())
   //eslint-disable-next-line
  },[])


const getUniclIdProduct = (id) => {
 
 request(`http://localhost:3001/buyCarousel/${id}`)
 .then(res => dispatch(getCardsForBasket(res)))
 .catch(() => console.log('error'))
}

  return(
    <section className='buy-carousel'>
      <div className="container">
        <h1 className="buy-carousel__title">Успей купить</h1>
        <div ref={windowWidth} className="buy-carousel__window">
          <div style={{width: `${100 * buyCards.length + '%'}`,position: 'relative', transition: '0.7s all', transform: `translateX(-${offsetCarousel}px)`}} className="buy-carousel__field">
            {
              buyCards.map(({img, descr, price, id}) => {
                return(
                   <BuyCarouselCard key={id} img = {img} descr = {descr} price = {price} id = {id} getUniclIdProduct = {getUniclIdProduct} basket = {basket}/>
                )
              })
            }
          </div>
        </div>
      </div>
      <button onClick={() => prev()} className='buy-carousel__prev'></button>
      <button onClick={() => next()} className='buy-carousel__next'></button>
    </section>
  )
}
export default BuyCarousel;