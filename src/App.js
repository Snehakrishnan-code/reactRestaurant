import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import ViewRest from './components/ViewRest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          {/* path setting for restaurant list */}
          <Route path='/' element={<Restaurantlist/>}/>
          
          {/* path setting for view each item */}
          <Route path='/view-restaurant/:id' element={<ViewRest />}/>
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
