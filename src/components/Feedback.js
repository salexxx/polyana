import './Feedback.css';
import Dasha from '../images/dasha.jpg';
import Anthon from '../images/anthon.jpg';
import Ira from '../images/ira.jpg';
import Lisa from '../images/lisa.jpg';
import Vadim from '../images/vadim.jpeg';
import Slava from '../images/slava.jpeg';
import Olya from '../images/olya.jpg';
import Dmitry from '../images/dmitriy.jpeg';
import Flip from 'react-reveal/Flip';

function Feedback() {
    return(
      <>
      <h2 className='feedback__about'>НАШИ ОТЗЫВЫ</h2>

      <section className="feedback">
          
        <Flip left>
        <div className="feedback__card"><img className="feedback__photo" src={Dasha}></img>
          <p className="feedback__text">
            Хочу поблагодарить Алексея за его профессионализм и прекрасное наставничество! 
            Я не ожидала, что смогу встать на лыжи и тем более скатиться с синей трассы на третьем занятии! 
            Также хочу отметить, что помимо профессиональных качеств, Алексей прекрасный и позитивный человек. Во время занятий создавал приятную обстановку, в которой было очень комфортно  находиться с возможностью отбросить все свои страхи и максимально расслабиться ! 
            А ещё Алексей начинающий фотограф. Он смог передать через фотографии все мои счастливые эмоции!</p>
            <p className="feedback__text">Дарья</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Dmitry}></img>
          <p className="feedback__text">
          Взяв несколько занятий с ребятами из ВАГИ ни разу не пожалел. Я сильно улучшил технику катания и сумел побороть страх спуска. 
          Если в начале занятий мой предел был зелёные трассы, то на второй день я уже спустился по красной.
          Причем переборол страх я именно техникой катания, т.е. теперь я понимаю и могу управлять своим движением на сложных трассах.
          В конце занятий я сдал себе внутренний экзамен спустившись по самой длинной трассе без контроля инструктора.
          Успех в этом мероприятии сильно укрепил мою уверенность в себе.</p>
          <p className="feedback__text">Дмитрий</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Ira}></img>
        <p className="feedback__text">
          У ВАГИ очень хорошие тренера. Сначала пришлось потрудиться, но результат превзошёл все ожидания.
          Я отлично провела время и получила массу удовольствия и положительных эмоций!
          Спасибо за науку!</p>
          <p className="feedback__text">Ирина</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Lisa}></img>
        <p className="feedback__text">
          До поездки в Красную Поляну брала один урок у другого инструктора, но уверенности не было.
          Инструктор ВАГИ Павел очень чутко подошёл к моим страхам перед высотой и склоном. 
          На втором занятии я уверенно скатывалась по зелёным трассам!
          Павел очень любит горные лыжи и с ним интересно общаться.
          На следующий сезон обязательно продолжу обучение.
          </p>
          <p className="feedback__text">Лиза</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Vadim}></img>
        <p className="feedback__text">
          За пару часов освоил снаряд. У Ильдара очень доступная методика. На втором занятии научился поворачивать на параллельных лыжах.
          И действительно, как тут не влюбиться в горные лыжи!
        </p>
          <p className="feedback__text">Вадим</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Slava}></img>
        <p className="feedback__text">
          Алексея знаю очень давно. Приехали покататься в Поляну всего на один день.
          Погода была превосходная! Алексей показал нам трассы курорта, поработал над техникой катания жены.
          На десерт мы поднялись на вершину 2200 где устроили фотосессию на смотровой площадке, а после с ветерком прокатились по самой длинной трассе.
          Всем рекомендую, Алексей специалист топ уровня!
        </p>
          <p className="feedback__text">Вячеслав</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Olya}></img>
        <p className="feedback__text">
          Встала на лыжи после длительного перерыва и реабилитации связанной с операцией.
          Была неуверенность но Вячеслав своим профессионализмом помог побороть все страхи.
          Как чуткий тренер, повёл меня с самого начала - базовых поворотов. Дальше всё шло как по маслу.
          За несколько дней тренировок я почувствовала как ко мне вернулась уверенность. Теперь я спокойно могу катать синие и красные трассы.
          Обязательно вернусь за занятиями к Вячеславу сама и буду рекомендовать его своим друзьям и знакомым.
          </p>
          <p className="feedback__text">Ольга</p>
        </div>
        </Flip>
        <Flip left>

        <div className="feedback__card"><img className="feedback__photo" src={Anthon}></img>
         <p className="feedback__text">
             Я не в курсе какое там у вас отношение к армии, но меня вы знатно защищали и оберегали, так что с праздником защитников!</p>
             <p className="feedback__text">Антон</p>
        </div>
        </Flip>
        
        
    </section>
      </>
    );
    }
    
    export default Feedback