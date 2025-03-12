import './App.css';
import About from './Components/About';
import HomePage from './Components/HomePage';
import InProgress from './Components/InProgress';

import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header />
    <Nav/>
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<InProgress/>}></Route>
        <Route path="/reservations" element={<InProgress/>}></Route>
        <Route path="/orderOnline" element={<InProgress/>}></Route>
        <Route path="/login" element={<InProgress/>}></Route>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
