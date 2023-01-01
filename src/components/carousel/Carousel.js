import './carousel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { buttonTrigger, fetchCarousel, offset, slideIndex} from './carouselSlice';
import { useEffect} from 'react';
import Button from '../UI/button/Button';

const Carousel = () => {
  const sliders = useSelector(state => state.carousel.data);
  const trigger = useSelector(state => state.carousel.activeButton);
  let offsetSlider = useSelector(state => state.carousel.offset);
  const slideIndexCarousel = useSelector(state => state.carousel.slideIndex);
  const windowWidth = useSelector(state => state.carousel.width);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchCarousel())
  },[])

  const next = () => {
    if (slideIndexCarousel === sliders.length) {
      dispatch(slideIndex(1))
    }else {
      dispatch(slideIndex(slideIndexCarousel + 1))
    }

    if (offsetSlider == windowWidth * (sliders.length - 2)) {
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
      dispatch(offset(offsetSlider = windowWidth * (sliders.length - 2)))
    } else {
      dispatch(offset(offsetSlider -= windowWidth))
    }
  }
 
  return(
    <div className='carousel'>
      <div className="carousel__window">
        <div style={{width: `${100 * sliders.length + '%'}`, transition: '0.7s all', transform: `translateX(-${offsetSlider}px)`}}  className="carousel__field">
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
        <button className="carousel__next" onClick={() => next()}>&gt;</button>
        <button className="carousel__prev" onClick={() => prev()}></button>
    </div>

  )
}
export default Carousel;