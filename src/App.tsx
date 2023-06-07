import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TripForm from './components/TripForm';
import TripResult from './components/TripResult';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/newTrip" element={ <TripForm/> } />
        <Route path="tripResult" element={ <TripResult/> } />
      </Routes>
    </div>
  );
}

export default App;
