import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import { WeatherAction, WeatherActionTypes } from '../../types/weather';
import s from './Header.module.scss'


const Header: FC = () => {
    const dispatch = useDispatch();
    const theme = useTheme();



    const options = [
        { value: 'lat=55.75&lon=37.61', label: 'Москва' },
        { value: 'lat=56.85&lon=60.61', label: 'Екатеринбург' },
        { value: 'lat=55.04&lon=82.93', label: 'Новосибирск' },
        { value: 'lat=59.89&lon=30.26', label: 'Санкт-Петербург' },
    ]
    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            color: theme.theme === 'dark' ? '#fff' : '#000',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? '#fff' : '#000',
        }),
        input: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? '#fff' : '#000',
        }),
    }


    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    const changeCityWeather = (e: any) => {
        dispatch<WeatherAction>({
            type: WeatherActionTypes.SET_TITLE_CITY,
            payload: e.label,
        })
        dispatch({
            type: 'CHANGE_CITY',
            payload: e.value
        })
    }

    return (
        <header className={s.header} >
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select
                    defaultValue={options[0]}
                    options={options}
                    styles={colourStyles}
                    onChange={changeCityWeather}
                />
            </div>
        </header >
    )
}

export default Header;