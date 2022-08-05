import { FC } from 'react'
import { useDispatch } from 'react-redux'

import s from './Popup.module.scss'

import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { WeatherAction, WeatherActionTypes } from '../../types/weather'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'


const Popup: FC = () => {

    const dispatch = useDispatch();

    const modalData = useTypedSelector((state) => state?.weather?.modalData);
    const { temp: { day }, dt, feels_like: { day: feelsDay }, pressure, wind_speed } = modalData[0];
    const { icon, description } = modalData[0].weather[0];

    const city = useTypedSelector(({ weather: { cityName } }) => cityName);
    const popup = useTypedSelector(({ weather: { popup } }) => popup);

    const getTitleDay = (stamp: number): string => {
        const titleDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const date = new Date(stamp * 1000);
        const day = titleDays[date.getDay()];
        return day;
    }
    const getTime = (stamp: number): string => {
        const time = new Date(stamp * 1000);
        return `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`
    }


    const items = modalData.map(() => {
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

    const closePopup = (): void => {
        dispatch<WeatherAction>({
            type: WeatherActionTypes.POPUP_CLOSE
        })
    }
    return (
        <div className={popup ? s.modal_active : s.modal} >
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
                    {items[0].map((item: Item) => {
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