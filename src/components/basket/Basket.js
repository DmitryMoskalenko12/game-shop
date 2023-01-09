import del from '../../icons/del.png';
import './basket.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateBase } from './basketSlice';
import { useState } from 'react';

const Basket = () => {
const dispatch = useDispatch();
const basketData = useSelector(state => state.basket.data);
const [promokod, setPromokod]  = useState('');
const finalSum = basketData.map(item => parseInt(item.price) * item.count).reduce((sum, current) => sum + current, 0);
let finalPrice = (finalSum / 100) * 30;

const onPlus = (id) => {
  dispatch(updateBase(basketData.map(prod => {
  if (prod.id === id) {
    return {
      ...prod,
      count: prod.count + 1
    }
  }
  return prod
  })))
}

const onMinus = (id) => {
  dispatch(updateBase(basketData.map(prod => {
  if (prod.id === id) {
    return {
      ...prod,
      count: prod.count <= 1 ? 1 : prod.count - 1
    }
  }
  return prod
  }))) 
}
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
           basketData.length === 0 ? <div style = {{fontSize: '22px', fontWeight: '700', color: '#2A2A2A' }}>Корзина пуста</div> :  basketData.map(({img, descr, price, id, count}) => {
            return(
              <div key={id} className="basket__card">
              <div className="basket__wrapimg">
                <img src={img} alt="manch" />
              </div>

              <div className="basket__name">{descr}</div>
              <div className="basket__price">{price}</div>

              <div className="basket__calc">
                <button onClick={() => onPlus(id)} className="basket__plus">+</button>
                <div className="basket__num">{count}шт</div>
                <button onClick={() => onMinus(id)} className="basket__minus">-</button>
              </div>

              <button onClick={() => dispatch(deleteProduct(id))} className="basket__delete">
                <img src={del} alt="delete" />
              </button>

              <div className="basket__for575">
                <div className="basket__name575">{descr}</div>
                <div className="basket__price575">{price}</div>

              <div className="basket__delplusminus">
                 <div className="basket__calc575">
                  <button onClick={() => onPlus(id)} className="basket__plus575">+</button>
                  <div className="basket__num575">{count}шт</div>
                  <button onClick={() => onMinus(id)} className="basket__minus575">-</button>
                 </div>

                <button onClick={() => dispatch(deleteProduct(id))} className="basket__delete575">
                  <img src={del} alt="delete" />
                </button>
              </div>
              </div>
            </div>
            )
          })
           }
          </div>

          <div className="basket__order">
            <div className="basket__finalprice">Сумма: <span>{promokod === 'hello'.toLowerCase() ? finalPrice.toFixed() : finalSum} ua</span></div>
            <label className='basket__promo'>
              <div className="basket__promodescr">Промокод:</div>
              <div className="basket__wrapinput">
              <input value={promokod} onChange={(e) => setPromokod(e.target.value)} type="text" name='promo'/>
              <span className="basket__check">
                <svg width="15" height="13" viewBox="0 0 15 13" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16699 6.5L5.91699 11.25L13.8337 1.75" stroke={promokod === 'hello' ? 'green': "#2A2A2A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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