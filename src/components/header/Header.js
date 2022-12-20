import './header.scss';
import { useState, useMemo } from 'react';
import logo from '../../image/logo.png';
import lup from '../../icons/lup.png';
import phone from '../../icons/phone.png';
import human from '../../icons/human.png';
import basket from '../../icons/bascet.png';

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [activeLi, setActiveLi] = useState(null)
  const asideLiUp = [
    {clas: 'header__asideli', href: "#", content: 'Настольные игры', id: 1},
    {clas: 'header__asideli', href: "#", content: 'Warhammer 40000', id: 2},
    {clas: 'header__asideli', href: "#", content: 'Magic:the Gathering', id: 3},
    {clas: 'header__asideli', href: "#", content: 'Аксессуары для игр', id: 4},
    {clas: 'header__asideli', href: "#", content: 'Краски', id: 5},
    {clas: 'header__asideli', href: "#", content: 'Товары для детей', id: 6},
    {clas: 'header__asideli', href: "#", content: 'Аксессуары для моделизма', id: 7}
  ]
  const asideLiDown = [
    {clas: 'header__asideli', href: "#", content: 'Мероприятия'},
    {clas: 'header__asideli', href: "#", content: 'Блог'},
    {clas: 'header__asideli', href: "#", content: 'О центре'},
    {clas: 'header__asideli', href: "#", content: 'Контакты'}
  ]

  const onActive =(e) => {
    setActiveLi(e.currentTarget.textContent)
   }

  return(
    <header className='header'>
     <div className="container">
      <div className={burger ? "header__shadow" : ''}>
        <ul className={burger ? "header__asidemenu asideactive" : "header__asidemenu" }>
         {
          asideLiUp.map(({clas, href, content, id}, i) => {
            return  <li key={i} onClick={(e) => onActive(e)} className={`${clas} ${(activeLi === content) ? 'activeli' : ''}`}><a href={href}>{content}</a></li>
          })
         }
          <li  className='header__hr'></li>
        {
          asideLiDown.map(({clas, href, content}, i) => {
          return <li onClick={(e) => onActive(e)} key={i} className={`${clas} ${(activeLi === content) ? 'activeli' : ''}`}><a href={href}>{content}</a></li>
          })
        } 
        </ul>
      </div>
      <ul className="header__up">
        <li className="header__burger">
          <div onClick={() => setBurger(burger => !burger)} className="header__burgermenu">
            <span className={burger ? "header__burgerline active": "header__burgerline"}></span>
            <span className={burger ? "header__burgerline active": "header__burgerline"}></span>
            <span className={burger ? "header__burgerline active": "header__burgerline"}></span>
          </div>
        </li>
        <li className="header__logo">
          <div className="header__wraplogo">
            <a href="#"><img src={logo} alt="logo" /></a>
          </div>
        </li>
        <li className="header__search">
          <input type="text" className="header__input" placeholder='Найти игру'/>
          <a href="#"><img src={lup} alt="lup" /></a>
        </li>
        <li className="header__phone">
          <div className="header__phoneimg">
            <img src={phone} alt="phone" />
          </div>
          <a className='header__phonelink red' href="tel:0667180373">+380 (66) 718-03-73</a>
        </li>
        <li className="header__human">
          <div className="header__wraphuman">
            <a href="#"><img src={human} alt="human" /></a>
          </div>
        </li>
        <li className="header__basket">
        <div className="header__wrapbasket">
           <a href="#"><img src={basket} alt="human" /></a>
        </div>
        </li>
      </ul>
     </div>
    </header>
  )
}
export default Header;


