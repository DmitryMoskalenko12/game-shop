import './activity.scss';
import Button from '../UI/button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchActivity, page } from './ActivitySlice';
import useHttp from '../../hooks/http.hook';

const Activity = () => {

  const activityData = useSelector(state => state.activity.data);
  const status = useSelector(state => state.activity.status);
  const pageActivity = useSelector(state => state.activity.page);
  const db = useSelector(state => state.activity.db);
  const dispatch = useDispatch();
  const {request} = useHttp();
  const [baseLength, setBaseLength] = useState([]);

  useEffect(() => {
    dispatch(fetchActivity(pageActivity))
  },[pageActivity])
  
  useEffect(() => {
   request(db)
   .then(res => setBaseLength(res))
  },[])

  return(
    <section className='activity'>
      <div className="container">
       <h1 className="activity__title">Ближайшие мероприятия</h1>
        <div className="activity__wrap">
          {
            activityData.map(({img, descr1,path, date, descr2, id}) => {
              return(
                <div key={id} className="activity__card">
                  <div className="activity__wrapimg">
                    <img src={img} alt={descr1} />
                  </div>
                  <a href={path}>
                    <div className="activity__descr">
                      <div className="activity__subdescr">
                        <div className="activity__nameactivity">{descr1}</div>
                        <div className="activity__date">{date}</div>
                      </div>
                      <div className="activity__maindescr">{descr2}
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
        <Button onClick = {() => {
          dispatch(page(pageActivity + 1));
          }} style = {{width:'317px', height:'71px', display: activityData.length === baseLength.length ? 'none' : 'block', margin: '0 auto',marginTop: '38px'}}>Показать еще</Button>
      </div>
    </section>
  )
}
export default Activity;
