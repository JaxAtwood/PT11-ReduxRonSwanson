import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/index";

export const initialState = {
    ron: [""],
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                ron: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}