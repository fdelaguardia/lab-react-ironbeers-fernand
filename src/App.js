import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<ListBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:id' element={<SingleBeer />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
