import './catalogChoice.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalogChoice } from './catalogChoiceSlice';
import { useEffect } from 'react';

const CatalogChoice = () => {
  const resultChoice = useSelector(state => state.catalogChoice.data);
  const status = useSelector(state => state.catalogChoice.status);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchCatalogChoice())
  },[])

  return(
    <section className='catalog-choice'>
      <div className="container">
        <div className="catalog-choice__wrap">
         {
          resultChoice.map(({img, path, catalog, descr, clazz, id}) => {
            return(
              <div key={id} className= {clazz}>
                <h1 style={{display: catalog ? 'block' : 'none'}} className="catalog-choice__catalog">{catalog}</h1>
                <div className="catalog-choice__imgwrap">
                  <img src={img} alt={descr} />
                </div>
                <a className="catalog-choice__descr" href={path}>{descr}</a>
              </div>
            )
          })
         }
        </div>
      </div>
    </section>
  )
}
export default CatalogChoice;