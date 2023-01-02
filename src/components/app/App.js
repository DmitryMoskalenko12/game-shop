import './app.scss';
import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
import Carousel from '../carousel/Carousel';
import CatalogChoice from '../catalogChoice/CatalogChoice';
import BuyCarousel from '../buyCarousel/BuyCarousel';

function App() {
  return (
    <>
    <Header/>
    <NavMenu/>
    <Carousel/>
    <CatalogChoice/>
    <BuyCarousel/>
    </>
  );
}

export default App;
