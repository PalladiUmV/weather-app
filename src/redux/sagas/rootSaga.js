import { all, spawn } from 'redux-saga/effects'
import watcherSaga from "./weather";



export default function* rootSaga() {
    yield all([
        spawn(watcherSaga),
    ]);

    // yield all(sagas.map(s => spawn(s))); // этот метод позволяет автоматически рестартить саги в случаеесли в них произошли ошибки.

}