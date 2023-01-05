import './offerCarousel.scss';
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import Button from '../UI/button/Button';
import shop from '../../icons/shop.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef,useState } from 'react';
import { fetchOfferCarousel, offset, slideIndex, width } from './offerCarouselSlice';

const OfferCarousel = () => {

  const offerCards = useSelector(state => state.offerCarousel.data);
  const status = useSelector(state => state.offerCarousel.status);
  const dispatch = useDispatch();
  let offsetCarousel = useSelector(state => state.offerCarousel.offset);
  const slideIndexCarousel = useSelector(state => state.offerCarousel.slideIndex);
  let windowWidthResult = useSelector(state => state.offerCarousel.width);
  let windowWidth = useRef();

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
    if (offsetCarousel == (+windowWidthResult + +marginRight) * (offerCards.length / slideNumber === offerCards.length ? offerCards.length - 1 : Math.ceil(offerCards.length / slideNumber - 1)) ) {
      dispatch(offset(0))
    } else {
      dispatch(offset(offsetCarousel += (+windowWidthResult + +marginRight)))
    }
  }

  const prev = () => {
    if (slideIndexCarousel == 1) {
      dispatch(slideIndex(offerCards.length))
    }else {
      dispatch(slideIndex(slideIndexCarousel - 1))
    }
    if (offsetCarousel == 0) {
      dispatch(offset(offsetCarousel = (+windowWidthResult + +marginRight) * (offerCards.length / slideNumber === offerCards.length ? offerCards.length - 1 : Math.ceil(offerCards.length / slideNumber - 1))))
    } else {
      dispatch(offset(offsetCarousel -= (+windowWidthResult + +marginRight)))
    }
  }

  useEffect(() => {
    dispatch(width((getComputedStyle(windowWidth.current).width.replace(/\D/img, ''))))
  },[])

  useEffect(() => {
   dispatch(fetchOfferCarousel())
  },[])

  return(
    <section className='offer-carousel'>
      <div className="container">
        <h1 className="offer-carousel__title">Специальные предложения</h1>
        <div ref={windowWidth} className="offer-carousel__window">
          <div style={{width: `${100 * offerCards.length + '%'}`,position: 'relative', transition: '0.7s all', transform: `translateX(-${offsetCarousel}px)`}} className="offer-carousel__field">
            {
              offerCards.map(({img, descr, price, id, discount, oldPrice}) => {
                return(
                      <div key={id} className="offer-carousel__card">
                      <div className="offer-carousel__discount">{discount}</div>
                      <div className="offer-carousel__wrapimg">
                        <img src={img} alt={descr} />
                      </div>

                      <div className="offer-carousel__config">
                        <div className="offer-carousel__people">
                          <div className="offer-carousel__peopleimg">
                            <img src={people} alt="people" />
                          </div>
                          <div className="offer-carousel__number">
                            2-4
                        </div>
                      </div>
                    <div className="offer-carousel__timer">
                      <div className="offer-carousel__timerimg">
                          <img src={timer} alt="timer" />
                      </div>
                      <div className="offer-carousel__time">
                        30-60
                      </div>
                    </div>
                    <div className="offer-carousel__age">18+</div>
                  </div>
                  <div className="offer-carousel__descr">{descr}</div>

                  <div className="offer-carousel__price">
                   <div className="offer-carousel__oldprice">{oldPrice}</div>
                   <div className="offer-carousel__newprice">{price}</div>
                  </div>

                 <div className="offer-carousel__wrapbut">
                  <Button style={{display:'block', margin: '0 auto', marginBottom: '10px'}}>
                        В корзину
                        <span style={{marginLeft: '10px'}}  className="offer-carousel__wrapshop">
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
      <button onClick={() => prev()} className='offer-carousel__prev'></button>
      <button onClick={() => next()} className='offer-carousel__next'></button>
    </section>
  )
}
export default OfferCarousel;