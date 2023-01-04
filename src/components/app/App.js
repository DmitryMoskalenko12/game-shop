import './app.scss';
import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
import Carousel from '../carousel/Carousel';
import CatalogChoice from '../catalogChoice/CatalogChoice';
import BuyCarousel from '../buyCarousel/BuyCarousel';
import OfferCarousel from '../offerCarousel/OfferCarousel';
import Activity from '../activity/Activity';

function App() {
  return (
    <>
    <Header/>
    <NavMenu/>
    <Carousel/>
    <CatalogChoice/>
    <BuyCarousel/>
    <OfferCarousel/>
    <Activity/>
    </>
  );
}

export default App;
