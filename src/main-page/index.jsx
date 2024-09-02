import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import FeaturedHouse from './featuredHouse';
import SearchResults from '../search-results';
import HouseFilter from './filter-house';
import HouseFromQuery from '../house/HouseFromQuery';
import { useHouses } from '../common/hooks/useHouses';
import useFeaturedHouse from '../common/hooks/useFeaturedHouse';
import HousesContext from '../common/context/houseContext';
import './main-page.css';


function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  const header = <Header subTitle={'Providing houses all over the world'} />

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          {header}
          <HouseFilter />
          <Routes>
            <Route path='/searchresults/:country' element={<SearchResults />} />
            <Route path='/house/:id' element={<HouseFromQuery />} />
            <Route exact path='/' element={<FeaturedHouse house={featuredHouse} />} />
          </Routes>
          <Footer />
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
