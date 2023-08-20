import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import Whatsapp from './Whatsapp';
import NavBar from './NavBar';
import Teaching from './Teaching';
import FisRules from './FisRules';
import Technical from './Technical';
import Footer from './Footer';
import Popup from './Popup';


function App() {
const [popupActive, setPopupActive] = useState(false);
  return (
    
    <> 
    <BrowserRouter >
     <NavBar /> 
     < Header />
     <div className='Popup__btn'>
     <button className='Popup__btn' onClick={()=> setPopupActive(true)}>ЗАБРОНИРОВАТЬ ИНСТРУКТОРА</button>
     </div>
     <Popup active={popupActive} setActive={setPopupActive}/>
     <Routes> 
       <Route path="/" element={ < Profile />} />
       <Route path='/teaching' element={ <Teaching />} />
       <Route path='/fisrules' element={ <FisRules />} /> 
       <Route path='/technical' element={ <Technical />} />  
     </Routes>
     </BrowserRouter>
     < Footer />

     < Whatsapp />
    </>
  );
}

export default App;
