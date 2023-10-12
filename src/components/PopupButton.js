import './Popup.css';

const PopupButton = ({onClick}) => {
    const handleClick =(event)=>{
        onClick(event)
    }
    return (
        <div className='Popup__btn'>
         <button className='Popup__btn' onClick={handleClick}>ЗАПИСАТЬСЯ К ИНСТРУКТОРУ</button>
        </div>
    )
}
export default PopupButton;