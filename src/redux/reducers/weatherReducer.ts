import { IWeather, WeatherAction, WeatherActionTypes } from "../../types/weather";

const initialState: IWeather = {
    data: null,
    modalData: null,
    loading: true,
    popup: false,
    cityName: 'Москва',
}

export const weatherReducer = (state = initialState, action: WeatherAction): IWeather => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                data: null,
                loading: true,
            };
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case WeatherActionTypes.POPUP_CLOSE:
            return {
                ...state,
                modalData: null,
                popup: false,
            };
        case WeatherActionTypes.POPUP_OPEN:
            const index = action.payload;
            const { daily } = state.data;
            const newItem = daily.find((item: any, idx: number) => idx === index);
            return {
                ...state,
                modalData: [newItem],
                popup: true,
            }
        case WeatherActionTypes.SET_TITLE_CITY:
            return {
                ...state,
                cityName: action.payload,
            }

        default:
            return state;
    }
}

export default weatherReducer;


