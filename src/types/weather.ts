
export interface IWeather {
	data: any;
	modalData: any;
	loading: boolean;
	popup: boolean;
	cityName: string;
}

export interface IDaily {
	dt: number;
	temp: {
		"day": number,
		"night": number
	};
	weather: [
		{
			"description": string,
			"icon": string
		}
	];
}


export interface IDailyDay {
	day: string,
	day_info: string,
	icon_id: string,
	temp_day: number,
	temp_night: number,
	info: string,
}

export enum WeatherActionTypes {
	FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST',
	FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
	POPUP_CLOSE = 'POPUP_CLOSE',
	POPUP_OPEN = 'POPUP_OPEN',
	SET_TITLE_CITY = 'SET_TITLE_CITY'
}

interface FetchWeatherRequest {
	type: WeatherActionTypes.FETCH_WEATHER_REQUEST;
}
interface FetchWeatherSuccess {
	type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
	payload: any[]
}
interface PopUpOpen {
	type: WeatherActionTypes.POPUP_OPEN;
	payload: number;
}
interface PopupClose {
	type: WeatherActionTypes.POPUP_CLOSE;
}
interface SetTitleCity {
	type: WeatherActionTypes.SET_TITLE_CITY;
	payload: string;
}

export type WeatherAction = FetchWeatherRequest | FetchWeatherSuccess | PopUpOpen | PopupClose | SetTitleCity;
