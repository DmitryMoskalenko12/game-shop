import Button from "../UI/button/Button";
import people from '../../icons/people.png';
import timer from '../../icons/timer.png';
import shop from '../../icons/shop.png';

const OfferCarouselCard = ({id, img, discount, descr, oldPrice, price, basket, getUniclIdProduct}) => {
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
    <Button disabled = {basket.find(item => item.id === id)} onClick = {() => getUniclIdProduct(id)} style={{display:'block', margin: '0 auto', marginBottom: '10px'}}>
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
}
export default OfferCarouselCard;