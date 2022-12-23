import { useState } from 'react';
import './catalog.scss';

const Catalog = (props) => {
  const [activeLink, setActiveLink] = useState(null);

  const {setModal} = props;
  const catalogLink = [
    {clazz: 'catalog__link start', href:'#', content: 'Настольные игры', id: 1},
    {clazz: 'catalog__link start', href:'#', content: 'Warhammer 40000', id: 2},
    {clazz: 'catalog__link start', href:'#', content: 'Magic: the Gathering', id: 3},
    {clazz: 'catalog__link start', href:'#', content: 'Аксессуары для игр', id: 4},
    {clazz: 'catalog__link start', href:'#', content: 'Краски', id: 5},
    {clazz: 'catalog__link start', href:'#', content: 'Товары для детей', id: 6},
    {clazz: 'catalog__link start', href:'#', content: 'Аксессуары для моделизма', id: 7},
  ]

  const onActive =(e) => {
    setActiveLink(e.currentTarget.textContent)
   }

  return(
    <nav className='catalog'>
      <ul className="catalog__category">
        <li onClick={() => setModal(false)} className='catalog__closeall start'>
         <div className="catalog__close">&times;</div>
         <div className="catalog__categoruclose">Все категории</div>
        </li>
        <li className='catalog__hr'></li>
        {
          catalogLink.map(({content, href, clazz, id}, i) => {
            return <li onClick={(e) => onActive(e)} style = {{background: content === activeLink  ? '#F9A43F': null}} key={i} className={clazz}><a href={href}>{content}</a></li>
          })
        }
      </ul>
    </nav>
  )
}
export default Catalog;
