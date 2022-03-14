import { takeEvery, put, call, fork, all } from 'redux-saga/effects'


async function getWeather(latLon = 'lat=55.75&lon=37.61') {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?${latLon}&exclude=minutely,hourly&appid=b5ce410db6e49d3f9950995e237dd598&units=metric&lang=ru
    `);
    const data = await request.json();
    return data;
}

function* initialFetchRequest() {
    yield put({ type: 'FETCH_WEATHER_REQUEST' });
    const data = yield call(getWeather);
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
};


function* changeCityRequest(action) {

    yield put({ type: 'FETCH_WEATHER_REQUEST' });

    const data = yield call(getWeather, action.payload);
    yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
};



export default function* watcherSaga() {

    yield all([
        fork(initialFetchRequest),
    ]);
    yield takeEvery('CHANGE_CITY', changeCityRequest)
};



