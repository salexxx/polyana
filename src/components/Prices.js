import './Prices.css'
import Zoom from 'react-reveal/Zoom'

const Prices = ()=> {
    return (
        <>
        <div className='prices__heading'>
        <h3 className='prices__heading'>ЦЕНЫ</h3>
        <p className='prices__heading'>УЛУЧШИТЕ ТЕХНИКУ ЗА 2х ЧАСОВОЕ ЗАНЯТИЕ ИЛИ ПРОВЕДИТЕ ВЕСЬ ДЕНЬ В ГОРАХ</p>
        </div>

        <div className='prices__cardlist'>
        <Zoom >
            <div className='prices__card'>
                <div className='prices__card_header'>ЗАНЯТИЕ 2часа</div>
                <h2 className='prices__card_price'>7800Р 
                    <span>взрослый/ребёнок</span>
                </h2>
                <p>2 ЧЕЛОВЕКА : 12000Р</p>
                <p>ГРУППА 3-5 ЧЕЛОВЕК : 16000Р</p>
                <p>ВОЗМОЖНО 1 ЧАС (1-2 ЧЕЛ)</p>
            </div>
        </Zoom>
        <Zoom>
            <div className='prices__card'>
                <div className='prices__card_header'>ЗАНЯТИЕ 3часа</div>
                <h2 className='prices__card_price'>10500Р 
                    <span>взрослый/ребёнок</span>
                </h2>
                <p>2 ЧЕЛОВЕКА : 13200Р</p>
                <p>ГРУППА 3-5 ЧЕЛОВЕК : 21600Р</p>
                <p>СЕМЬЯ 3-5 ЧЕЛОВЕК : 19900</p>
            </div>
        </Zoom>    
        <Zoom>
            <div className='prices__card'>
                <div className='prices__card_header'>ЗАНЯТИЕ 4часа</div>
                <h2 className='prices__card_price'>12500Р 
                    <span>взрослый/ребёнок</span>
                </h2>
                <p>2 ЧЕЛОВЕКА : 14700Р</p>
                <p>ГРУППА 3-5 ЧЕЛОВЕК : 23900Р</p>
                <p>СЕМЬЯ 3-5 ЧЕЛОВЕК : 22000</p>
            </div>
        </Zoom>   
        <Zoom>
            <div className='prices__card'>
                <div className='prices__card_header'>VIP СОПРОВОЖДЕНИЕ 7часов</div>
                <h2 className='prices__card_price'>25000Р 
                    <span>взрослый/ребёнок</span>
                </h2>
                <p>2 ЧЕЛОВЕКА : 30000Р</p>
            </div>
        </Zoom>
        </div>
        </>
    )
}
export default Prices;