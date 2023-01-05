import './contacts.scss';
import phone from '../../icons/addrphone.png';
import mail from '../../icons/letter.png';
import clock from '../../icons/clock.png';
import geolocation from '../../icons/geoloc.png';
import niko from '../../image/niko.jpg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './contactsSlice';
import { status } from './contactsSlice';

const Contacts = () => {
let statuss = useSelector(state => state.contacts.status);
const dispatch = useDispatch();

const [name, setName] = useState('');
const [tel, setTel] = useState('');
const [comment, setComment] = useState('');

const onMessage = (e) => {
  e.preventDefault();
  const result = {
    name,
    tel,
    comment,
    id: Date.now()
  }

  dispatch(fetchContacts(result));

  setName('');
  setTel('');
  setComment('');
  setTimeout(() => dispatch(status(null)), 3000)
}

const loading = statuss === 'loading' ? 'Данные отправляются': null;
const success = statuss === 'fulfilled' ? 'Данные успешно отправлены': null;
const fail = statuss === 'error' ? 'Произошла ошибка при отправке данных': null;

  return(
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrap">
          <div className="contacts__addrform">
            <h2 className="contacts__title">Контакты</h2>
            <address className="address">
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <img src={phone} alt="phone" />
                </div>
                <div className="contacts__info"> <span>Телефон:</span>+380 (95) 611-76-93</div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <img src={mail} alt="email" />
                </div>
                <div className="contacts__info"><span>E-mail:</span>nsk@magicgoldfish.com</div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <img src={geolocation} alt="geolocation" />
                </div>
                <div className="contacts__info"><span>Адрес:</span>г. Николаев, ул. Малая Морская 6</div>
              </div>
              <div className="contacts__block">
                <div className="contacts__wrappicture">
                  <img src={clock} alt="clock" />
                </div>
                <div className="contacts__info"><span>Режим работы клуба:</span> 11:00-23:00 (ежедневно)</div>
              </div>
            </address>
            <div className="contacts__question">Остались вопросы?</div>
            <form onSubmit={(e) => { e.preventDefault(); onMessage(e)}} className="contacts__form">
              <label className='contacts__name'>
                 <div>Ваше имя</div>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' required placeholder='Имя'/>
              </label>
              <label className='contacts__telefon'>
                 <div>Ваш телефон</div>
                <input value={tel} onChange={(e) => setTel(e.target.value)} type="number" name='phone' required placeholder='+38 ___ _______'/>
              </label>
              <label className='contacts__comment'>
                <div>Ваш комментарий</div>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} type="text" name='comment' placeholder='Комментарий'/>
              </label>
               
               <button className="contacts__subm">Заказать звонок</button>
               {loading}
               {success}
               {fail} 
            </form>
             <div className="contacts__confid">Нажимая на кнопку "Заказать звонок", я даю <span>согласие на </span> 
              обработку персональных данных.</div>
          </div>

          <div className="contacts__wrapimg">
            <img src={niko} alt="Nikolaev" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts;