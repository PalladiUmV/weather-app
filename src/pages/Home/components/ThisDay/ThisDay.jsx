import React from 'react'
import { useSelector } from 'react-redux'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'

import s from './ThisDay.module.scss'


export const ThisDay = () => {
    const data = useSelector((state) => state.data);
    const cityName = useSelector((state) => state.cityName);
    const { current: { temp, dt }, timezone_offset, } = data;
    const { icon, description } = data.current.weather[0];


    const getData = () => {
        let date = new Date((dt + timezone_offset - 10800) * 1000);
        date = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
        return date;
    }
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}> {`${Math.floor(temp)}°`}</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <div className={s.this__img}>
                    <GlobalSvgSelector id={icon} />
                    <span>{description}</span>
                </div>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>{getData()}</span>
                </div>
                <div className={s.this__city}>
                    <span>{cityName}</span>
                </div>
            </div>
        </div >
    )
}
