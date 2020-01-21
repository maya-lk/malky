import { avalibilityActionTypes } from './avalibility.types';

const INITIAL_STATE = {
    listDates : null,
}

const avalibilityReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case avalibilityActionTypes.SET_LIST_DATES:
            return{
                ...state , 
                listDates : action.payload
            }
        default:
            return state;
    }
}

export default avalibilityReducer;