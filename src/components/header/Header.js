import './header.scss';
import logo from '../../image/logo.png';
import lup from '../../icons/lup.png';
import phone from '../../icons/phone.png';
import human from '../../icons/human.png';
import basket from '../../icons/bascet.png';

const Header = () => {
  return(
    <header className='header'>
     <div className="container">
      <ul className="header__up">
        <li className="header__logo">
          <div className="header__wraplogo">
            <img src={logo} alt="logo" />
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
          <a className='header__phonelink' href="tel:0667180373">+380 (66) 718-03-73</a>
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