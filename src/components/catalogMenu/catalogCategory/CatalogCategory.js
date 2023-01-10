import './catalogCategory.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalogCategory, getFilter } from './catalogCategorySlice';

const CatalogCategory = () => {
  const categoryData = useSelector(state => state.catalogCategory.data);
  const filter = useSelector(state => state.catalogCategory.filter);
  const dispatch = useDispatch();
  const [categoryAll, setCategoryAll] = useState(false);
  const [subCategory, setSubCategory] = useState(false);

  useEffect(() => {
    dispatch(fetchCatalogCategory())
  },[])

  return(
    <div className='catalog-category'>
       <button onClick={() => setCategoryAll(categoryAll => !categoryAll)} className="catalog-category__category">Все категории</button>
       <div style={{display: categoryAll ? 'block' : 'none'}} className="catalog-category__allcategory">

       {
        categoryData.map(({filterName, id, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11, pos12, pos13, pos14 }) => {
          return(
            <div key={id} className="catalog-category__subwrap">
              <button key={id} onClick={() => {setSubCategory(subCategory => !subCategory); dispatch(getFilter(filterName))}} className="catalog-category__subcategory">{filterName}</button>
              <ul style={{display: subCategory && (filter === filterName) ? 'block' : 'none'}} className="catalog-category__list">
                <li className="catalog-category__item"><a href="#">{pos1}</a></li>
                <li className="catalog-category__item"><a href="#">{pos2}</a></li>
                <li className="catalog-category__item"><a href="#">{pos3}</a></li>
                <li className="catalog-category__item"><a href="#">{pos4}</a></li>
                <li className="catalog-category__item"><a href="#">{pos5}</a></li>
                <li className="catalog-category__item"><a href="#">{pos5}</a></li>
                <li className="catalog-category__item"><a href="#">{pos6}</a></li>
                <li className="catalog-category__item"><a href="#">{pos7}</a></li>
                <li className="catalog-category__item"><a href="#">{pos8}</a></li>
                <li className="catalog-category__item"><a href="#">{pos9}</a></li>
                <li className="catalog-category__item"><a href="#">{pos10}</a></li>
                <li className="catalog-category__item"><a href="#">{pos11}</a></li>
                <li className="catalog-category__item"><a href="#">{pos12}</a></li>
                <li className="catalog-category__item"><a href="#">{pos13}</a></li>
                <li className="catalog-category__item"><a href="#">{pos14}</a></li>
              </ul>
          </div>
          )
        })
       }
        </div>
    </div>
  )
}
export default CatalogCategory;