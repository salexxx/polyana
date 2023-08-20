import './Footer.css';
import vk_logo from '../images/VK_Logo.png';
import inst_logo from '../images/Instagram_logo.svg';

function Footer() {
return(
<footer className="footer">
  
    <h1 className = "footer footer_copyright" >&copy; Copyright Смолянинов А.В. 2022</h1>
    <div className="footer_anchor">
    <a className = "footer" href="https://vk.com/id19404832" target="_blank" ><img className="footer_logo" src={vk_logo}></img></a>
    <a className = "footer" href="https://www.instagram.com/edem__v__sochi" target="_blank" ><img className="footer_logo" src={inst_logo}></img></a>
</div>
</footer>
);
}

export default Footer