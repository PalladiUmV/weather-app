import React from 'react'
import { useSelector } from 'react-redux';
import cloud from '../../../../assets/images/cloud.png';

import s from './ThisDayInfo.module.scss';
import { ThisDayItem } from './ThisDayItem';


export const ThisDayInfo = () => {

    const data = useSelector(state => state.data);
    const { temp, feels_like, pressure, wind_speed } = data.current;

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(temp)}° - ощущается как ${Math.ceil(feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${Math.round(pressure / 1.333)} мм ртутного столба`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.floor(wind_speed)} м/с `,
        },
    ]
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map(item => {
                    return <ThisDayItem key={item.icon_id} item={item} />
                }
                )}
            </div>
            <img className={s.cloud__img} src={cloud} alt="cloud" />
        </div>
    )
}

