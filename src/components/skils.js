import './skils.css';
import Slide from 'react-reveal/Slide';

const Skils = () => {
    return(
        <>
        <section className='skils'>
            <ul>
                <Slide bottom>
                <li className='skils'>
                    НА ПЕРВОМ ЗАНЯТИИ НОВИЧКИ НАУЧЯТСЯ ПОВОРАЧИВАТЬ, КОНТРОЛИРОВАТЬ СКОРОСТЬ И НАПРАВЛЕНИЕ ДВИЖЕНИЯ.
                </li>
                </Slide>
                <Slide bottom>
                <li className='skils'>
                    НА ВТОРОМ ЗАНЯТИИ ПОЙМЁТЕ КАК ПОВОРАЧИВАТЬ НА ПАРАЛЛЕЛЬНЫХ ЛЫЖАХ
                </li>
                </Slide>
                <Slide bottom>
                <li className='skils'>
                    БОЛЕЕ ОПЫТНЫЕ ГОРНОЛЫЖНИКИ ПРИОБРЕТУТ НАВЫКИ КОНТРОЛЯ СКОРОСТИ В КАРВИНГОВЫХ ПОВОРОТАХ
                </li>
                </Slide>
                <Slide b>
                <li className='skils'>
                   ПОЛУЧИТЕ ОСНОВЫ ТЕХНИЧЕСКОЙ БАЗЫ ВНЕТРАССОВОГО КАТАНИЯ 
                </li>
                </Slide>
                <Slide bottom>
                <li className='skils'>
                    МЫ ПОЗНАКОМИМ ВАС СО ВСЕМИ ТРАССАМИ КУРОРТА И РАССКАЖЕМ ОСОБЕННОСТИ КАТАНИЯ В ДАННОЙ МЕСТНОСТИ
                </li>
                </Slide>
                <Slide bottom>
                <li className='skils'>
                    ПЕРЕДАДИМ ВАМ МАССУ ПОЛЕЗНЫХ ЗНАНИЙ О ГОРНЫХ ЛЫЖАХ В КОМФОРТНОЙ ОБСТАНОВКЕ
                </li>
                </Slide>
            </ul>
        </section>
        </>

    )
}
export default Skils;