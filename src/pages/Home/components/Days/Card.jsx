import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { useDispatch } from 'react-redux';

import s from './Days.module.scss'


export const Card = ({ days, index }) => {

    const { day, day_info, icon_id, temp_day, temp_night, info } = days;

    const dispatch = useDispatch();

    const clickCard = () => {
        dispatch({
            type: 'POPUP_OPEN',
            payload: index + 1
        })
    }
    return (
        <div className={s.card} onClick={clickCard}>
            <div className={s.day}>{day}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}><GlobalSvgSelector id={icon_id} /></div>
            <div className={s.temp__day}>{`${Math.floor(temp_day)}°`}</div>
            <div className={s.temp__night}>{`${Math.floor(temp_night)}°`}</div>
            <div className={s.info}>{info}</div>
        </div >
    )
}
