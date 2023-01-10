import './catalogMain.scss';
import CatalogMainHeader from './catalogMainHeader/CatalogMainHeader';
import CatalogMenu from '../catalogMenu/CatalogMenu';

const CatalogMain = () => {
  return(
    <section className='catalog-main'>
     <CatalogMainHeader/>
     <div className="container">
      <div className="catalog-main__wrappath">
        <a href="#" className="catalog-main__main">Главная</a>
        <span className="catalog-main__arrow">&gt;</span>
        <a href="#" className="catalog-main__catalog">Каталог</a>
        <span className="catalog-main__arrow">&gt;</span>
        <a href="#" className="catalog-main__namegame">Дуэльные игры</a>
      </div>

      <h2 className="catalog-main__title">Дуэльные настольные игры</h2>

      <div className="catalog-main__wrap">
       <CatalogMenu/>
      </div>

     </div>
    </section>
  )
}
export default CatalogMain;