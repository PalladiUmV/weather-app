import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { IDaily, IDailyDay } from '../../../../types/weather';

import { Card } from './Card'
import s from './Days.module.scss'

export const Days = () => {

    const dailyData = useTypedSelector((state) => state.weather.data.daily);

    let formatDailyData = dailyData.map((element: IDaily) => {
        const { dt, temp: { day, night } } = element;
        const { icon, description } = element.weather[0];

        const titleDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const titleMonths = ['Янв', 'Фев', 'Марта', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'];

        const getTitleDay = (dt: number): string => {
            const date = new Date(dt * 1000);
            const day = titleDays[date.getDay()];
            return day;
        }
        const getData = (dt: number): string => {
            const date = new Date(dt * 1000);
            let day_info = `${date.getDate()} ${titleMonths[date.getMonth()]}`;
            return day_info;
        }
        return {
            day: getTitleDay(dt),
            day_info: getData(dt),
            icon_id: icon,
            temp_day: day,
            temp_night: night,
            info: description,
        }
    }).slice(1);

    return (
        <>

            <div className={s.days}  >
                {formatDailyData.map((day: IDailyDay, idx: number) => (
                    <Card days={day} key={day.day} index={idx} />
                ))}
            </div >
        </>
    )
}
