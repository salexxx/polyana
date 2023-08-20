import './Whatsapp.css';
import whatsappIcon from '../images/WhatsApp_logo.svg';

function Whatsapp() {
    return(
    <section className="whatsapp">
       <a href = "http://api.whatsapp.com/send?phone=79059462463" target='_blank'>
       <img className = "whatsapp" alt="whatsapp" src = {whatsappIcon}></img> 
       </a>
    </section>
    );
    }
    
    export default Whatsapp