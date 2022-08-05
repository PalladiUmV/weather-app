import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'


import s from './ThisDay.module.scss'


export const ThisDay = () => {
    const data = useTypedSelector((state) => state.weather.data);
    const { cityName } = useTypedSelector((state) => state.weather);
    const { current: { temp, dt }, timezone_offset, } = data;
    const { icon, description } = data.current.weather[0];


    const getData = (): string => {
        let currentDate = new Date((dt + timezone_offset - 10800) * 1000);
        let parceCurrentDate = `${("0" + currentDate.getHours()).slice(-2)}:${("0" + currentDate.getMinutes()).slice(-2)}`;
        return parceCurrentDate;
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
