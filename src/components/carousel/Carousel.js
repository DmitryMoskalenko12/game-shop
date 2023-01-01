import './carousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { buttonTrigger, fetchCarousel, offset, slideIndex, width} from './carouselSlice';
import { useEffect, useRef} from 'react';
import Button from '../UI/button/Button';

const Carousel = () => {
  const sliders = useSelector(state => state.carousel.data);
  const trigger = useSelector(state => state.carousel.activeButton);
  let offsetSlider = useSelector(state => state.carousel.offset);
  const slideIndexCarousel = useSelector(state => state.carousel.slideIndex);
  const windowWidth = useSelector(state => state.carousel.width);
  const staticSlide = useSelector(state => state.carousel.staticSlide);

  const dispatch = useDispatch();
  const vhWidth = useRef();

  useEffect(() => {
    dispatch(width(+(getComputedStyle(vhWidth.current).width).replace(/\D/igm, '')))
    dispatch(fetchCarousel())
  },[])

  const next = () => {
    if (slideIndexCarousel === sliders.length) {
      dispatch(slideIndex(1))
    }else {
      dispatch(slideIndex(slideIndexCarousel + 1))
    }
    if (offsetSlider == windowWidth * (sliders.length - staticSlide) ) {
      dispatch(offset(0))
    } else {
      dispatch(offset(offsetSlider += windowWidth))
    }
  }
  const prev = () => {
    if (slideIndexCarousel == 1) {
      dispatch(slideIndex(sliders.length))
    }else {
      dispatch(slideIndex(slideIndexCarousel - 1))
    }
    if (offsetSlider == 0) {
      dispatch(offset(offsetSlider = windowWidth * (sliders.length - staticSlide)))
    } else {
      dispatch(offset(offsetSlider -= windowWidth))
    }
  }
 
  return(
    <div className='carousel'>
      <div ref={vhWidth} className="carousel__window">
        <div style={{width: `${100 * sliders.length + '%'}`,position: 'relative', transition: '0.7s all', transform: `translateX(-${offsetSlider}px)`}}  className="carousel__field">
         {
          sliders.map(({img, path, descr, descr2, butDescr, id}) => {
            return <div key={id} className="carousel__slider">
                    <div className="carousel__wrapimg">
                      <img src={img} alt={descr} />
                    </div>
                    <div className="carousel__descrbutton">
                      <div className="carousel__wrapdescr">
                        <div className="carousel__descr">{descr}</div>
                        <div className="carousel__descr2">{descr2}</div>
                      </div>
                      <Button className="carousel__button">{butDescr}</Button>
                    </div>
                  </div>
          })
         }
        </div>
      </div>
        <div className="carousel__dots">
          {
            sliders.map((item, i) => {
              return <button key={i} style={{background: slideIndexCarousel === i + 1 ? '#FFFFFF': null}} onClick={() => {
                dispatch(offset(i * windowWidth));
                dispatch(slideIndex(i + 1))
              }} className="carousel__dot"></button>
            })
          }
        </div>
        <button className="carousel__next" onClick={() => next()}></button>
        <button className="carousel__prev" onClick={() => prev()}></button>
    </div>

  )
}
export default Carousel;