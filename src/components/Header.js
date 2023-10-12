import './Header.css';

function Header() {
  
      
return(
    <header className="header">

    <h2 style={{color:'white'}} className = "header_title">ВСЕРОССИЙСКАЯ АССОЦИАЦИЯ ГОРНОЛЫЖНЫХ ИНСТРУКТОРОВ В КРАСНОЙ ПОЛЯНЕ</h2>
    <h2 style={{color:"red"}} className = "header_title">ЛУЧШИЕ ИНСТРУКТОРЫ ЗДЕСЬ!</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5000ca" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,149.3C672,139,768,181,864,213.3C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

</header>
);
}

export default Header