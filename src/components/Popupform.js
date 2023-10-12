import './Popupform.css';
import {useState} from 'react';
function Popupform() {
    const [name, setName]= useState('')
    const [phone, setPhone] = useState('')
    
    function handleSubmit(e){
        e.preventDefault();
    }

    function onChange() {
        
    }

    return (
    <div className="popupform">
        <div className='popuptitle'>ОСТАВЬТЕ ВАШ КОНТКАКТНЫЙ НОМЕР МЫ ВАМ ПЕРЕЗВОНИМ</div>
        <form onSubmit={handleSubmit} className="popupform">
            <input className="popupform" placeholder="имя"></input>
            <input className="popupform" placeholder="телефон"></input>
            <input className="popupform popupform_coment" placeholder="комментарий"></input>
            <button className='popupBtn' >ОТПРАВИТЬ</button>
        </form>
    </div>
    )
}
export default Popupform