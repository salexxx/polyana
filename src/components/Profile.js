import './Profile.css';
import profilePhoto from '../images/avatar.jpg';
import Feedback from './Feedback';
import GisMeteo from './GisMeteo';


function Profile() {
 
  return(
    
  <section className="profile">
    
      <img className = "profile__photo" alt = "profile" src = {profilePhoto}></img>
      <p className="profile__citata"> "Горные лыжи, быть может не являются счастьем, но вполне могут заменить его!"</p>
      
      
      <p className = "profile__story">Здравствуйте! Меня зовут Алексей Смолянинов. Я профессиональный инструктор <a href = 'https://arasia.ru/instruktor-po-gornym-lyzham-nv214/' target="_blank">1-й категории</a> со стажем катания более 35 лет. КМС по горнолыжному спорту. Победитель первенства России в параллельном слаломе. Неоднократный победитель этапов Мастерс, обладатель Кубка Сибири среди ветеранов и любителей горнолыжного спорта.</p>
      <p className = "profile__story">Миссия инструктора, на мой взгляд, влюбить в горные лыжи!</p>
        <p className = "profile__story">Провожу занятия от первых шагов до мастер класса по спортивной технике в максимально доступной форме в Красной Поляне.</p> 
        < Feedback />
       
        <p className = "profile__story"> Звоните и записывайтесь на индивидуальное или групповое занятие в Красной Поляне.
        Стоимость занятия от 3000 рублей.</p>
        <div className="gismeteo">< GisMeteo /></div>
        
        </section>
        
        
      
      
 
  );
  }
  
  export default Profile