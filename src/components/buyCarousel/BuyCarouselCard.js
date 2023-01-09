import Button from "../UI/button/Button";
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import shop from '../../icons/shop.png';

const BuyCarouselCard = ({id, img, descr, basket, getUniclIdProduct, price}) => {
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
}
export default BuyCarouselCard;