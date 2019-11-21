//IMPORT ACTIONS
import { GET_ERRORS, CLEAR_ERRORS, CLEAR_ALL } from "../actions/types";

const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_ERRORS:
            return initialState;
        case GET_ERRORS:
            return { ...action.payload };
        case CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
};

export default errorReducer;
