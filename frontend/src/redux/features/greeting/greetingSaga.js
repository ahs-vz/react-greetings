import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_GREETING_REQUEST, FETCH_GREETING_SUCCESS, FETCH_GREETING_FAILURE } from './greetingTypes';

const API_URL = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : process.env.REACT_APP_BACKEND_URL; // Deployed on Render, and port will be set automatically by Render, so use that port or default to 3001 for running locally

function* fetchGreetingSaga() {
    try {
        console.log(`Fetching greeting from ${API_URL}/api/greeting`);
        const response = yield call(axios.get, `${API_URL}/api/greeting`);
        yield put({ type: FETCH_GREETING_SUCCESS, payload: response.data.greeting });
    } catch (error) {
        yield put({ type: FETCH_GREETING_FAILURE, payload: error.message });
    }
}

export function* watchGreetingSaga() {
    yield takeLatest(FETCH_GREETING_REQUEST, fetchGreetingSaga);
}