import './navMenu.scss';
import instagram from '../../icons/insta.png';
import vk from '../../icons/vk.png';
import fb from '../../icons/fb.png';
import Modal from '../modal/Modal';
import Catalog from '../catalog/Catalog';
import { useState } from 'react';

const NavMenu = () => {
  const [modal, setModal] = useState(false);

  return(
    <nav className="menu">
     <div className="container">
      <ul className="menu__main">
          <li onClick={() => setModal(true)} className="menu__catalog">
           <a href="#">
            <div className="menu__burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menu__textcatalog">
                  Каталог
              </div>
           </a>
          </li>
          <li className='menu__link'><a href="#">Wharhammer</a></li>
          <li className='menu__link'><a href="#">Magic:the Cathering</a></li>
          <li className='menu__link'><a href="#">Мероприятия</a></li>
          <li className='menu__link'><a href="#">О центре</a></li>
          <li className='menu__link'><a href="#">Контакты</a></li>
          <li className='menu__social'>
              <a href="#">
                <div>
                <img src={instagram} alt="instagram" />
                </div>
              </a>
               <a href="#">
                <div>
                <img src={vk} alt="vk" />
                </div>
               </a>
              <a href="#">
                <div>
                <img src={fb} alt="fb" />
                </div>
              </a>
          </li>
        </ul>
     </div>
    {
      modal ? <Modal setModal = {setModal}><Catalog setModal = {setModal}/></Modal> : null
    }
    </nav>
  )
}
export default NavMenu;