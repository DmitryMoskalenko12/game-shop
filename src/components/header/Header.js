import './header.scss';
import { useState } from 'react';
import logo from '../../image/logo.png';
import lup from '../../icons/lup.png';
import phone from '../../icons/phone.png';
import human from '../../icons/human.png';
import basket from '../../icons/bascet.png';

const Header = () => {
  const [burger, setBurger] = useState(false);

  return(
    <header className='header'>
     <div className="container">
      <div className={ burger ? "header__shadow" : ''}>
        <ul className={burger ? "header__asidemenu asideactive": "header__asidemenu" }>
          <li className="header__asideli"><a href="#">Настольные игры</a></li>
          <li className="header__asideli"><a href="#">Warhammer 40000</a></li>
          <li className="header__asideli"><a href="#">Magic:the Gathering</a></li>
          <li className="header__asideli"><a href="#">Аксессуары для игр</a></li>
          <li className="header__asideli"><a href="#">Краски</a></li>
          <li className="header__asideli"><a href="#">Товары для детей</a></li>
          <li className="header__asideli"><a href="#">Аксессуары для моделизма</a></li>
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




