import { vehiclesActionTypes } from './vehicles.types';
import VEHICLES from './vehicles.data';

const INITIAL_STATE = {
    allVehicles: VEHICLES,
}

const vehiclesReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case vehiclesActionTypes.SET_ALL_VEHICLES:
            return{
                ...state , 
                allVehicles : action.payload
            }
        default:
            return state;
    }
}

export default vehiclesReducer;