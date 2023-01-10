import './catalogMenu.scss';
import CatalogCategory from './catalogCategory/CatalogCategory';

const CatalogMenu = () => {

  return(
    <aside className='catalog-menu'>
      <CatalogCategory/>
    </aside>
  )
}
export default CatalogMenu;