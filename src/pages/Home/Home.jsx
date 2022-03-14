import React, { useEffect } from 'react'
import { Days } from './components/Days/Days'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'


export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <Days />
        </div >
    )
}