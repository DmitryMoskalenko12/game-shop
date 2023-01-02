import './buyCarousel.scss';
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import Button from '../UI/button/Button';
import shop from '../../icons/shop.png';
import figure from '../../image/figure.png';

const BuyCarousel = () => {
  return(
    <section className='buy-carousel'>
      <div className="container">
        <h1 className="buy-carousel__title">Успей купить</h1>
        <div className="buy-carousel__window">
          <div className="buy-carousel__field">
            <div className="buy-carousel__card">
               <div className="buy-carousel__discount">-15%</div>
              <div className="buy-carousel__wrapimg">
                <img src={figure} alt="figure" />
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
               <div className="buy-carousel__descr">Warhammer 40,000:Chaos Space Marines</div>

               <div className="buy-carousel__price">
                <div className="buy-carousel__oldprice">4350 ua</div>
                <div className="buy-carousel__newprice">3657 ua</div>
               </div>

               <Button style={{display:'block', margin: '0 auto', marginBottom: '10px'}}>
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
        </div>
      </div>
    </section>
  )
}
export default BuyCarousel;