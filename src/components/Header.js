import './Header.css';

function Header() {
  
      
return(
    <header className="header">
    <h1 style={{color:'white', fontFamily: 'SovMod'}} className = "header_title">ВСЕРОССИЙСКАЯ АССОЦИАЦИЯ ГОРНОЛЫЖНЫХ ИНСТРУКТОРОВ В КРАСНОЙ ПОЛЯНЕ</h1>
    <h1 style={{color:"red",  fontFamily: 'SovMod'}} className = "header_title">ЛУЧШИЕ ИНСТРУКТОРЫ ЗДЕСЬ!</h1>
    <h2  style={{color: 'white' , fontFamily: 'SovMod'}}  className = "header_title"><a style={{textDecoration: 'none', color: 'white'}} href="tel:+79059462463">+7 905-946-24-63</a></h2>

   
</header>
);
}

export default Header