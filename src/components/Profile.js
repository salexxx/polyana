import {Children, useState} from 'react'
import './Profile.css';
import profilePhoto from '../images/avatar.jpeg';
import Shield from '../images/shield.png';
import Heart from '../images/heart.png';
import Feedback from './Feedback';
import GisMeteo from './GisMeteo';
import Header from './Header';
import Popup from './Popup';
import Popupform from './Popupform';
import Prices from './Prices';
import Important from './important';
import Skils from './skils';
import PopupButton from './PopupButton';
import Zoom from 'react-reveal/Zoom';
import Thirty from '../images/30th.png';
// import Fade from 'react-reveal/Fade';

function Profile() {
  // window.scrollTo(0,0)
  const [popupActive, setPopupActive] = useState(false);
  const handleClick = (event)=>{
    
    setPopupActive(!popupActive);
  }
 
  return(
    <>
    <Header/>
    <Popup active={popupActive} setActive={setPopupActive} children={<Popupform/>}/>
     <section className="profile">

       <Zoom bottom>
       <img src={Thirty} className='profile__icon'></img>
     <p className="profile__citata">БОЛЕЕ 30 ЛЕТ МЫ ПОДГОТАВЛИВАЕМ КЛАССНЫХ ИНСТРУКТОРОВ! </p>
       </Zoom>

       <Zoom bottom>
         <img src={Shield} className='profile__icon'></img>
     <p className="profile__citata">НАША ЦЕЛЬ - ВАША БЕЗОПАСНОСТЬ В ГОРАХ.  </p>
       </Zoom>

       <Zoom bottom>
       <img src={Heart} className='profile__icon'></img>
     <p className="profile__citata">НАША МИССИЯ - МЫ ВЛЮБЛЯЕМ В ГОРНЫЕ ЛЫЖИ. </p>
       </Zoom>


      <img className = "profile__photo" alt = "profile" src = {profilePhoto}></img>
      <p className="profile__citata" style={{fontSize: '20px', paddingTop:'20px', paddingBottom:'20px', fontFamily: 'Inter'}}> АЛЕКСЕЙ СМОЛЯНИНОВ - РУКОВОДИТЕЛЬ ОТДЕЛЕНИЯ В КРАСНОЙ ПОЛЯНЕ,
       ИНСТРУКТОР ПРЕПОДАВАТЕЛЬ ВЫСШЕЙ КАТЕГОРИИ, КМС ПО ГОРНОЛЫЖНОМУ СПОРТУ
        </p>
         
        <p className='profile__citata' style={{color:'blue', fontSize: '20px', fontFamily: 'Inter'}}>
           "В НАШЕЙ РАБОТЕ МЫ ИСПОЛЬЗУЕМ САМЫЕ СОВРЕМЕННЫЕ, А ТАКЖЕ АВТОРСКИЕ МЕТОДИКИ, НЕ ЗАТЯГИВАЕМ ПРОЦЕСС ОБУЧЕНИЯ!"
          </p>
         
        < Feedback />
        <Prices />
        <PopupButton onClick={handleClick} />
        <Important />
        <Skils/>
        {/* <PopupButton onClick={handleClick} /> */}
       
        <div className="gismeteo">< GisMeteo /></div>
        
        </section>
        
        
      </>
      
 
  );
  }
  
  export default Profile