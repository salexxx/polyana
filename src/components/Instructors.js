import './Instructors.css';
import PopupButton from './PopupButton';
import Popup from './Popup';
import {useState} from 'react';
import Popupform from './Popupform';
import Smolyaninov from '../images/smolyaninov.jpg';
import Myagkov from '../images/myagkov.jpg';
import Tumanov from '../images/tumanov.jpeg';
import Semenihina from '../images/semenihina.jpg';
import Kvurt from '../images/kvurt.jpeg';
import Zashupa from '../images/zashupa.jpeg';
import Golisheva from '../images/golisheva.jpeg';
import Dunaev from '../images/dunaev.jpg';
import Vakulov from '../images/vakulov.jpg';
import Kolodin from '../images/kolodin.jpg';
import Chegodaeva from '../images/chegodaeva.jpg';
import Rahimov from '../images/rahimov.jpg';
import Scherbinin from '../images/scherbinin.jpg';
import Poliponov from '../images/poliponov.jpg';
import Nasedkin from '../images/nasedkin.jpg';

const Instructors = ()=> {
    // window.scrollTo(0,0);
    const [popupActive, setPopupActive] = useState(false);
    const handleClick = (event)=>{
      
      setPopupActive(!popupActive);
    }
    return (
        <>
        <Popup active={popupActive} setActive={setPopupActive} children={<Popupform/>}/>
        <section className='instructors'>
            <h3 className='instructors'>НАША КОМАНДА В КРАСНОЙ ПОЛЯНЕ</h3>
           


            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp205/' target='_blank'>
                    <img className='instructor__img' src={Myagkov}></img>
                    <div className='instructor__name'> МЯГКОВ ЕВГЕНИЙ АНДРЕЕВИЧ <br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                Призер Всероссийских соревнований по горнолыжному многоборью спасательных служб России.
                Судья Всероссийской категории по Альпинизму, скиальпинизму, фрирайду FWQ.
                Призёр Winter Cup Radio Monte Carlo 2023(Роза Хутор)  
                     <PopupButton onClick={handleClick} />
                </div>
            </div>

            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-nv214/' target='_blank'>
                    <img className='instructor__img' src={Smolyaninov}></img>
                    <div className='instructor__name'> СМОЛЯНИНОВ АЛЕКСЕЙ ВИТАЛЬЕВИЧ <br/>Инструктор 1-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                КМС по горнолыжному спорту, победитель первенства России в параллельном слаломе, неоднократный победитель этапов РУС-Мастерс по горнолыжному спорту, победитель Кубка Сибири среди ветеранов, пятикратный призёр этапов Кубка Красной Поляны по горным лыжам 2023г. (GS)
                     <PopupButton onClick={handleClick} />
                </div>
            </div>

            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp202/' target='_blank'>
                    <img className='instructor__img' src={Kvurt}></img>
                    <div className='instructor__name'>КВУРТ ЕВГЕНИЙ ВЛАДИМИРОВИЧ <br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               ЛЮБЛЮ ВНЕТРАССОВОЕ КАТАНИЕ, НА ЛЫЖАХ КАТАЮСЬ ОЧЕНЬ ДАВНО, НРАВИТСЯ ПЕРЕДАВАТЬ ЗНАНИЯ И ВИДЕТЬ РЕЗУЛЬТАТ
                     <PopupButton onClick={handleClick} />
                </div>
            </div>


            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp206/' target='_blank'>
                    <img className='instructor__img' src={Rahimov}></img>
                    <div className='instructor__name'>РАХИМОВ ИЛЬДАР ЗАВДАТОВИЧ<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               Лучше гор могут быть только горы. А если ещё и едешь с горы на лыжах, любуясь пейзажами и отлично управляешь - это кайф, драйв, адреналин.
               Моя задача научить и влюбить в горные лыжи.

                     <PopupButton onClick={handleClick} />
                </div>
            </div>
            
            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-ms312/' target='_blank'>
                    <img className='instructor__img' src={Tumanov}></img>
                    <div className='instructor__name'>ТУМАНОВ ЕВГЕНИЙ ИГОРЕВИЧ<br/>Инструктор 2-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                КМС по горнолыжному спорту.
                     <PopupButton onClick={handleClick} />
                </div>
            </div>


            
            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp320/' target='_blank'>
                    <img className='instructor__img' src={Poliponov}></img>
                    <div className='instructor__name'>ПОЛИПОНОВ ПАВЕЛ ВИКТОРОВИЧ<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                Нравится проводить время в горах. 
                     <PopupButton onClick={handleClick} />
                </div>
            </div>

            
            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp318/' target='_blank'>
                    <img className='instructor__img' src={Scherbinin}></img>
                    <div className='instructor__name'>ЩЕРБИНИН ДЕНИС МИХАЙЛОВИЧ<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                Обучаю горным лыжам гостей курорта уже 10 лет. Тренирую начинающих, прогрессирующих, любой возраст, все направления: фрирайд, фристайл, карвинг. Предпочитаю свободный стиль катания, постановка техники. Получаю и дарю удовольствие от процесса и достигнутого результата.
                     <PopupButton onClick={handleClick} />
                </div>
            </div>
           
  
            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-snoubordu-ms319/' target='_blank'>
                    <img className='instructor__img' src={Nasedkin}></img>
                    <div className='instructor__name'>НАСЕДКИН ВЛАДИМИР ФЁДОРОВИЧ<br/>Инструктор 1-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
                Нравится проводить время в горах. 
                     <PopupButton onClick={handleClick} />
                </div>
            </div>



            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp315/' target='_blank'>
                    <img className='instructor__img' src={Zashupa}></img>
                    <div className='instructor__name'>ЗАШУПА НИКОЛАЙ АЛЕКСАНДРОВИЧ <br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               Никогда не думал что буду кататься на горных лыжах. В итоге процесс оказался настолько увлекательным, что я решил стать инструктором.
               Люблю скорость, карвить, катать в свитче. Если вы за активный отдых, тогда вам ко мне!
                     <PopupButton onClick={handleClick} />
                </div>
            </div>



            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp314/' target='_blank'>
                    <img className='instructor__img' src={Golisheva}></img>
                    <div className='instructor__name'>ГОЛЫШЕВА ЕЛЕНА ВЛАДИМИРОВНА <br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               Горные лыжи - образ жизни. Горные лыжи это комплекс мероприятий. Работаю инструктором 8 лет. Люблю работать с детьми.
                     <PopupButton onClick={handleClick} />
                </div>
            </div>


            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp319/' target='_blank'>
                    <img className='instructor__img' src={Dunaev}></img>
                    <div className='instructor__name'>ДУНАЕВ ВЯЧЕСЛАВ НИКОЛАЕВИЧ <br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               С горными лыжами познакомился случайно в 1975 году, друг отдал путёвку в Терскол. Учился кататься ещё на деревянных лыжах.
               Ботинки были со шнурками. Через неделю спустился с Чегета. Снег, горы, воздух... мгновенно понял что лучше гор
               нету ничего лучше. Моё правило - нет плохого ученика, есть плохой учитель.
                     <PopupButton onClick={handleClick} />
                </div>
            </div>


            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp317/' target='_blank'>
                    <img className='instructor__img' src={Vakulov}></img>
                    <div className='instructor__name'>ВАКУЛОВ АЛЬБЕРТ ВАЛЕРЬЕВИЧ<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               ЛЮБЛЮ ВНЕТРАССОВОЕ КАТАНИЕ, НА ЛЫЖАХ КАТАЮСЬ ОЧЕНЬ ДАВНО, НРАВИТСЯ ПЕРЕДАВАТЬ ЗНАНИЯ И ВИДЕТЬ РЕЗУЛЬТАТ
                     <PopupButton onClick={handleClick} />
                </div>
            </div>


            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp313/' target='_blank'>
                    <img className='instructor__img' src={Kolodin}></img>
                    <div className='instructor__name'>КОЛОДИН АНДРЕЙ ВЛАДИМИРОВИЧ<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               ЛЮБЛЮ ВНЕТРАССОВОЕ КАТАНИЕ, НА ЛЫЖАХ КАТАЮСЬ ОЧЕНЬ ДАВНО, НРАВИТСЯ ПЕРЕДАВАТЬ ЗНАНИЯ И ВИДЕТЬ РЕЗУЛЬТАТ
                     <PopupButton onClick={handleClick} />
                </div>
            </div>
           

            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp209/' target='_blank'>
                    <img className='instructor__img' src={Chegodaeva}></img>
                    <div className='instructor__name'>ЧЕГОДАЕВА ЕКАТЕРИНА ВЛАДИМИРОВНА<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               Детский инструктор с 2015 года. Провожу детский дневной лагерь с понедельника по пятницу, за 5 дней дети научатся кататься на лыжах, весело проведут время.
                     <PopupButton onClick={handleClick} />
                </div>
            </div>




            <div className='instructor__card'>
                <div className='instructor__profile'>
                <a  href='https://arasia.ru/instruktor-po-gornym-lyzham-kp316/' target='_blank'>
                    <img className='instructor__img' src={Semenihina}></img>
                    <div className='instructor__name'>СЕМЕНИХИНА АЛЛА АЛЕКСАНДРОВНА<br/>Инструктор 3-й категории</div>
                </a>
                </div>
                <div className='instructor__about'>
               ЛЮБЛЮ РАБОТАТЬ С ДЕТЬМИ, НА ЛЫЖАХ КАТАЮСЬ ОЧЕНЬ ДАВНО, НРАВИТСЯ ПЕРЕДАВАТЬ ЗНАНИЯ И ВИДЕТЬ РЕЗУЛЬТАТ
                     <PopupButton onClick={handleClick} />
                </div>
            </div>
       
        </section>
        </>
    )
}
export default Instructors