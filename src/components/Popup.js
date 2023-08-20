import React from 'react';
import './Popup.css';

const Popup = ({active, setActive, children}) => {
    
       return(
           
           <div className={active ? 'Popup active' : 'Popup'  } onClick={()=> setActive(false)}>
             <div className= {active ? 'Popup__content active' : 'Popup__content'}  onClick={ e => e.stopPropagation()}>
               {children}
               </div>
           </div>
           
       );
        
    }
    


export default Popup;