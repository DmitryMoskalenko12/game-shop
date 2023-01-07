import del from '../../icons/del.png';
import manch from '../../image/manch.png';
import check from '../../icons/check.png';
import './basket.scss';
import { Link } from 'react-router-dom';
import { showProduct } from './basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBasket } from './basketSlice';
import { useEffect } from 'react';

const Basket = () => {
const dispatch = useDispatch();
const basketData = useSelector(state => state.basket.data)


  return(
    <section className="basket">
      <div className="container">
        <div className="basket__path">
          <div className="basket__mainpage"><Link to={'/'}>Главная</Link></div>
          <span className="basket__arrow">&gt;</span>
          <div className="basket__basketpage"><Link to={'/basket'}>Корзина</Link></div>
        </div>
         <div className="basket__basketname">Корзина</div>
       <div className="basket__allcontent">
        <div className="basket__cardwrap">
           {
            basketData.map(({img, descr, price, id}) => {
              return(
                <div key={id} className="basket__card">
                <div className="basket__wrapimg">
                  <img src={img} alt="manch" />
                </div>
  
                <div className="basket__name">{descr}</div>
                <div className="basket__price">{price}</div>
  
                <div className="basket__calc">
                  <button className="basket__plus">+</button>
                  <div className="basket__num">2шт</div>
                  <button className="basket__minus">-</button>
                </div>
  
                <button className="basket__delete">
                  <img src={del} alt="delete" />
                </button>
              </div>
              )
            })
           }
          </div>

          <div className="basket__order">
            <div className="basket__finalprice">Сумма: <span>7476 ua</span></div>
            <label className='basket__promo'>
              <div className="basket__promodescr">Промокод:</div>
              <div className="basket__wrapinput">
              <input type="text" name='promo'/>
              <span className="basket__check">
                <img src={check} alt="check" />
              </span>
              </div>
            </label>
            <button className="basket__buy">Оформить</button>
            <button className="basket__oneclick">Купить в 1 клик</button>
          </div>
       </div>
      </div>
    </section>
  )
}
export default Basket;