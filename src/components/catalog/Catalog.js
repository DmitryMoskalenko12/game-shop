import './catalog.scss';

const Catalog = (props) => {
  const {setModal} = props;

  return(
    <nav className='catalog'>
      <ul className="catalog__category">
        <li onClick={() => setModal(false)} className='catalog__closeall start'>
         <div className="catalog__close">&times;</div>
         <div className="catalog__categoruclose">Все категории</div>
        </li>
        <li className='catalog__hr'></li>
        <li className="catalog__link start">Настольные игры</li>
        <li className="catalog__link start">Warhammer 40000</li>
        <li className="catalog__link start">Magic: the Gathering</li>
        <li className="catalog__link start">Аксессуары для игр</li>
        <li className="catalog__link start">Краски</li>
        <li className="catalog__link start">Товары для детей</li>
        <li className="catalog__link start">Аксессуары для <br /> моделизма</li>
      </ul>
    </nav>
  )
}
export default Catalog;