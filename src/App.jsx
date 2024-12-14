
import './App.css'
import ClubPage from './component/Club/ClubPage';
import DrinkPage from './component/Drink/DrinkPage';

import Footer from './component/Footer';
import HomePages from './component/Homepage/index';
import MyNavbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPayment from './component/paymentPage/Payment';
import Contact from './component/ContactPage/Contact';


function App() {


  return (
    <>
      < BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={< HomePages />}></Route>
          <Route path='/drink' element={< DrinkPage />}></Route>
          <Route path='/club' element={< ClubPage/>}></Route>
          <Route path='/cart' element={<  MyPayment/>}></Route>
          <Route path='/contact' element={<  Contact/>}></Route>
        </Routes>
        <Footer />

      </BrowserRouter>




    </>
  );
};

export default App;
