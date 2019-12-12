import { wizardActionTypes } from './wizard.types';
import { removeStepFromWizard } from './wizard.utils';

const INITIAL_STATE = {
    activeStep: 1,
    doneSteps : [1],
    reservationType: null,
    bookingType: null,
    pickupLocation: null,
    pickupDate: null,
    pickupTime: null,
    dropoffLocation: null,
    dropoffDate: null,
    dropoffTime: null,
    customerName: null,
    adults: null,
    kids: null,
    toddlers: null,
    laguage: null,
}

const wizardReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case wizardActionTypes.SET_ACTIVE_STEP:
            return{
                ...state , 
                activeStep : action.payload
            }
        case wizardActionTypes.SET_DONE_STEP:
            return{
                ...state,
                doneSteps : [ ...state.doneSteps , action.payload ]
            }
        case wizardActionTypes.REMOVE_DONE_STEPS:
            return{
                ...state,
                doneSteps : removeStepFromWizard( state.doneSteps , action.payload )
            }
        case wizardActionTypes.SET_RESERVATION_TYPE:
            return{
                ...state,
                reservationType : action.payload
            }
        case wizardActionTypes.SET_BOOKING_TYPE:
            return{
                ...state,
                bookingType : action.payload
            }
        case wizardActionTypes.SET_PICKUP_LOCATION:
            return{
                ...state,
                pickupLocation : action.payload
            }
        case wizardActionTypes.SET_PICKUP_DATE:
            return{
                ...state,
                pickupDate : action.payload
            }
        case wizardActionTypes.SET_PICKUP_TIME:
            return{
                ...state,
                pickupTime : action.payload
            }
        case wizardActionTypes.SET_DROPOFF_LOCATION:
            return{
                ...state,
                dropoffLocation : action.payload
            }
        case wizardActionTypes.SET_DROPOFF_DATE:
            return{
                ...state,
                dropoffDate : action.payload
            }
        case wizardActionTypes.SET_DROPOFF_TIME:
            return{
                ...state,
                dropoffTime : action.payload
            }
        case wizardActionTypes.SET_CUSTOMER_NAME:
            return{
                ...state,
                customerName : action.payload
            }
        case wizardActionTypes.SET_ADULTS:
            return{
                ...state,
                adults : action.payload
            }
        case wizardActionTypes.SET_KIDS:
            return{
                ...state,
                kids : action.payload
            }
        case wizardActionTypes.SET_TODDLERS:
            return{
                ...state,
                toddlers : action.payload
            }
        case wizardActionTypes.SET_LAGUAGE:
            return{
                ...state,
                laguage : action.payload
            }
        default:
            return state;
    }
}

export default wizardReducer;