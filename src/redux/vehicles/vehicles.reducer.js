import { vehiclesActionTypes } from './vehicles.types';
import VEHICLES , { COLORS , TYPES , CATEGORIES , MODELS } from './vehicles.data';

const INITIAL_STATE = {
    allVehicles: VEHICLES,
    colors : COLORS,
    types : TYPES,
    categories : CATEGORIES,
    models : MODELS
}

const vehiclesReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case vehiclesActionTypes.SET_ALL_VEHICLES:
            return{
                ...state , 
                allVehicles : action.payload
            }
        case vehiclesActionTypes.SET_COLORS:
            return {
                ...state,
                colors : action.payload
            }
        case vehiclesActionTypes.SET_TYPES:
            return {
                ...state,
                types : action.payload
            }
        case vehiclesActionTypes.SET_CATEGORY:
            return {
                ...state,
                categories : action.payload
            }
        case vehiclesActionTypes.SET_MODELS:
            return {
                ...state,
                models : action.payload
            }
        default:
            return state;
    }
}

export default vehiclesReducer;