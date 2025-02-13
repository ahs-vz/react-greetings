import { FETCH_GREETING_REQUEST, FETCH_GREETING_SUCCESS, FETCH_GREETING_FAILURE, RESET_GREETING } from "./greetingTypes";

const initialState = {
    greeting: "",
    loading: false,
    error: null,
};

const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GREETING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_GREETING_SUCCESS:
            return {
                ...state,
                loading: false,
                greeting: action.payload,
            };
        case FETCH_GREETING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case RESET_GREETING:
            return {
                ...state,
                greeting: "",
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default greetingReducer;