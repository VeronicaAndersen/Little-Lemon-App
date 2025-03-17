import './App.css';
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import HomePage from './Components/HomePage';
import InProgress from './Components/InProgress';
import BookingPage from './Components/BookingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';

// Function to initialize available times (Default times for all future dates)
const initializeTimes = () => {
  return {};
};

// Reducer function to update available times based on date
const updateTimes = (state, action) => {
  switch (action.type) {
    case "REMOVE_TIME": {
      const { date, time } = action.payload;
      if (!state[date]) return state; // If no times exist for that date, return state unchanged

      const updatedTimes = state[date].filter((t) => t !== time);
      return {
        ...state,
        [date]: updatedTimes,
      };
    }

    case "SET_TIMES": {
      const { date, times } = action.payload;
      return {
        ...state,
        [date]: times,
      };
    }

    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header availableTimes={availableTimes} dispatch={dispatch} />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<InProgress />}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        <Route path="/orderOnline" element={<InProgress />}></Route>
        <Route path="/login" element={<InProgress />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
