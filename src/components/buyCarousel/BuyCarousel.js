import './buyCarousel.scss';
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import Button from '../UI/button/Button';
import shop from '../../icons/shop.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef,useState } from 'react';
import { fetchBuyCarousel, offset, slideIndex, width } from './buyCarouselSlice';
import { getCardsForBasket } from '../basket/basketSlice';

import useHttp from '../../hooks/http.hook';

const BuyCarousel = () => {

  const buyCards = useSelector(state => state.buyCarousel.data);
  const status = useSelector(state => state.buyCarousel.status);
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
    if (offsetCarousel == (+windowWidthResult + +marginRight) * (buyCards.length / slideNumber === buyCards.length ? buyCards.length - 1 : Math.ceil(buyCards.length / slideNumber - 1)) ) {
      dispatch(offset(0))
    } else {
      dispatch(offset(offsetCarousel += (+windowWidthResult + +marginRight)))
    }
  }

  const prev = () => {
    if (slideIndexCarousel == 1) {
      dispatch(slideIndex(buyCards.length))
    }else {
      dispatch(slideIndex(slideIndexCarousel - 1))
    }
    if (offsetCarousel == 0) {
      dispatch(offset(offsetCarousel = (+windowWidthResult + +marginRight) * (buyCards.length / slideNumber === buyCards.length ? buyCards.length - 1 : Math.ceil(buyCards.length / slideNumber - 1)) ))
    } else {
      dispatch(offset(offsetCarousel -= (+windowWidthResult + +marginRight)))
    }
  }

  useEffect(() => {
    dispatch(width((getComputedStyle(windowWidth.current).width.replace(/\D/img, ''))))
  },[])

  useEffect(() => {
   dispatch(fetchBuyCarousel())
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
                      <div key={id} className="buy-carousel__card">
                      <div className="buy-carousel__wrapimg">
                        <img src={img} alt={descr} />
                      </div>

                      <div className="buy-carousel__config">
                        <div className="buy-carousel__people">
                          <div className="buy-carousel__peopleimg">
                            <img src={people} alt="people" />
                          </div>
                          <div className="buy-carousel__number">
                            2-4
                        </div>
                      </div>
                    <div className="buy-carousel__timer">
                      <div className="buy-carousel__timerimg">
                          <img src={timer} alt="timer" />
                      </div>
                      <div className="buy-carousel__time">
                        30-60
                      </div>
                    </div>
                    <div className="buy-carousel__age">18+</div>
                  </div>
                  <div className="buy-carousel__descr">{descr}</div>

                  <div className="buy-carousel__price">
                    <div className="buy-carousel__newprice">{price}</div>
                  </div>

                 <div className="buy-carousel__wrapbut">
                    <Button disabled = {basket.find(item => item.id === id)} onClick = {() =>  {getUniclIdProduct(id)}} style={{display:'block', margin: '0 auto', marginBottom: '10px'}}>
                        В корзину
                        <span style={{marginLeft: '10px'}}  className="buy-carousel__wrapshop">
                          <img src={shop} alt="shop" />
                        </span>
                    </Button>
                    <Button style={{background: 'transparent', border: '2px solid #F9A43F', color: '#F9A43F',display:'block', margin: '0 auto'}}>
                      Купить в 1 клик
                    </Button>
                 </div>
                </div>
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