import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Popup.module.scss'

import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'


const Popup = () => {

    const dispatch = useDispatch();


    const modalData = useSelector((state) => state.modalData);
    const { temp: { day }, dt, feels_like: { day: feelsDay }, pressure, wind_speed } = modalData[0];
    const { icon, description } = modalData[0].weather[0];

    const city = useSelector((state) => state.cityName);
    const popup = useSelector((state) => state.popup);

    const getTitleDay = stamp => {
        const titleDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const date = new Date(stamp * 1000);
        const day = titleDays[date.getDay()];
        return day;
    }
    const getTime = stamp => {
        const time = new Date(stamp * 1000);
        return `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`
    }

    const items = modalData.map((item) => {
        return [
            {
                icon_id: 'temp',
                name: 'Температура',
                value: `${Math.floor(day)}° - ощущается как ${Math.floor(feelsDay)}°`,
            },
            {
                icon_id: 'pressure',
                name: 'Давление',
                value: `${Math.round(pressure / 1.333)} мм ртутного столба`,
            },
            {
                icon_id: 'precipitation',
                name: 'Осадки',
                value: `${description}`,
            },
            {
                icon_id: 'wind',
                name: 'Ветер',
                value: `${Math.floor(wind_speed)} м/с`,
            },
        ]
    });

    const closePopup = () => {
        dispatch({
            type: 'POPUP_CLOSE'
        })
    }
    return (
        <div className={popup ? s.modal_active : s.modal} /* onClick={closePopup} */ >
            <div className={s.modal__content} >
                <div className={s.day}>
                    <div className={s.day__temp}>{Math.floor(day)}°</div>
                    <div className={s.day__name}>{getTitleDay(dt)}</div>
                    <div className={s.img}> <GlobalSvgSelector id={icon} /> </div >
                    <div className={s.day__time}>
                        Время: <span>{getTime(dt)}</span>
                    </div>
                    <div className={s.day__city}>
                        <span>{city}</span>
                    </div>
                </div>
                <div className={s.this__day_info_items}>
                    {items[0].map(item => {
                        return <ThisDayItem key={item.name} item={item} />
                    }
                    )}
                </div>
                <div className={s.close} onClick={closePopup}>
                    <GlobalSvgSelector id={'close'} />
                </div>
            </div>
        </div>
    )
}

export default Popup;