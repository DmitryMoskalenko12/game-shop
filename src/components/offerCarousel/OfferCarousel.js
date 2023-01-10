import './offerCarousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef,useState } from 'react';
import { fetchOfferCarousel, offset, slideIndex, width } from './offerCarouselSlice';
import useHttp from '../../hooks/http.hook';
import { getCardsForBasket } from '../basket/basketSlice';
import OfferCarouselCard from './OfferCarouselCard';

const OfferCarousel = () => {

  const offerCards = useSelector(state => state.offerCarousel.data);
  const basket = useSelector(state => state.basket.data);
  const dispatch = useDispatch();
  let offsetCarousel = useSelector(state => state.offerCarousel.offset);
  const slideIndexCarousel = useSelector(state => state.offerCarousel.slideIndex);
  let windowWidthResult = useSelector(state => state.offerCarousel.width);
  let windowWidth = useRef();
  const {request} = useHttp();

  const [slideNumber, setSlideNumber] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
 
  useEffect(() => {
    if(window.screen.availWidth <= 1399 && window.screen.availWidth >= 1199){
    setSlideNumber(/* 7 */4)
    setMarginRight(30)
    } else if (window.screen.availWidth <= 1199 && window.screen.availWidth >= 991) {
    setSlideNumber(/* 6 */3)
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

    if (slideIndexCarousel === offerCards.length) {
      dispatch(slideIndex(1))
    }else {
      dispatch(slideIndex(slideIndexCarousel + 1))
    }
    if (offsetCarousel === (+windowWidthResult + +marginRight) * (offerCards.length / slideNumber === offerCards.length ? offerCards.length - 1 : Math.ceil(offerCards.length / slideNumber - 1)) ) {
      dispatch(offset(0))
    } else {
      dispatch(offset(offsetCarousel += (+windowWidthResult + +marginRight)))
    }
  }

  const prev = () => {

    if (slideIndexCarousel === 1) {
      dispatch(slideIndex(offerCards.length))
    }else {
      dispatch(slideIndex(slideIndexCarousel - 1))
    }
    if (offsetCarousel === 0) {
      dispatch(offset(offsetCarousel = (+windowWidthResult + +marginRight) * (offerCards.length / slideNumber === offerCards.length ? offerCards.length - 1 : Math.ceil(offerCards.length / slideNumber - 1))))
    } else {
      dispatch(offset(offsetCarousel -= (+windowWidthResult + +marginRight)))
    }
  }

  useEffect(() => {
    dispatch(width((getComputedStyle(windowWidth.current).width.replace(/\D/img, ''))))
    //eslint-disable-next-line
  },[])

  useEffect(() => {
   dispatch(fetchOfferCarousel())
   //eslint-disable-next-line
  },[])

  const getUniclIdProduct = (id) => {
 
    request(`http://localhost:3001/offerCarousel/${id}`)
    .then(res => dispatch(getCardsForBasket(res)))
    .catch(() => console.log('error'))
   }

  return(
    <section className='offer-carousel'>
      <div className="container">
        <h1 className="offer-carousel__title">Специальные предложения</h1>
        <div ref={windowWidth} className="offer-carousel__window">
          <div style={{width: `${100 * offerCards.length + '%'}`,position: 'relative', transition: '0.7s all', transform: `translateX(-${offsetCarousel}px)`}} className="offer-carousel__field">
            {
              offerCards.map(({img, descr, price, id, discount, oldPrice}) => {
                return(
                      <OfferCarouselCard key={id} img = {img} descr = {descr} price = {price} id = {id} discount = {discount} oldPrice = {oldPrice} getUniclIdProduct = {getUniclIdProduct} basket = {basket}/>
                )
              })
            }
          </div>
        </div>
      </div>
      <button onClick={() => prev()} className='offer-carousel__prev'></button>
      <button onClick={() => next()} className='offer-carousel__next'></button>
    </section>
  )
}
export default OfferCarousel;