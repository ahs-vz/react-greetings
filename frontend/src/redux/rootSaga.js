import { all } from 'redux-saga/effects';
import { watchGreetingSaga } from './features/greeting/greetingSaga';

export default function* rootSaga() {
    yield all([
        watchGreetingSaga(),
    ]);
}