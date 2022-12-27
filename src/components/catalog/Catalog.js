import { useState, useEffect } from 'react';
import './catalog.scss';
import useShopService from '../../services/shopServices';

const Catalog = (props) => {
  const [activeLink, setActiveLink] = useState('Warhammer 40000');
  const [choice, setChoice] = useState([]);
  const {choiceMenu} = useShopService();
  
  useEffect(() => {
    localStorage.setItem('active', activeLink)
  },[activeLink])
   
  useEffect(() => {
    choiceMenu()
    .then((res) => setChoice(res))
    .catch(() => console.log('error'))
  },[])
 
  const {setModal} = props;
  const catalogLink = [
    {clazz: 'catalog__link start', href:'#', content: 'Настольные игры', id: 1},
    {clazz: 'catalog__link start', href:'#', content: 'Warhammer 40000', id: 2},
    {clazz: 'catalog__link start', href:'#', content: 'Magic: the Gathering', id: 3},
    {clazz: 'catalog__link start', href:'#', content: 'Аксессуары для игр', id: 4},
    {clazz: 'catalog__link start', href:'#', content: 'Краски', id: 5},
    {clazz: 'catalog__link start', href:'#', content: 'Товары для детей', id: 6},
    {clazz: 'catalog__link start', last: 'last', href:'#', content: 'Аксессуары для моделизма', id: 7},
  ]

  const onActive = (e) => {
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
          catalogLink.map(({content, href, clazz, last}, i) => {
            return <li onClick={(e) => {onActive(e); setActiveLink(content); localStorage.setItem('active', content)}} style = {{background: localStorage.getItem('active') === content ? '#F9A43F': null}} key={i} className={clazz}><a className={last} href={href}>{content}</a></li>
          })
        }
      </ul>
      <ul className="catalog__choice">
        {
          choice.map(({count, title,name, id}) => {
            return <li key={id}>{name}{count}{title} </li>
          })
        }
      </ul>
    </nav>
  )
}
export default Catalog;


 