import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import HomePage from './Components/HomePage';
import InProgress from './Components/InProgress';
import BookingPage from './Components/BookingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [availableTimes, setAvailableTimes]  = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  return (
    <>
      <Header availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<InProgress />}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}></Route>
        <Route path="/orderOnline" element={<InProgress />}></Route>
        <Route path="/login" element={<InProgress />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
