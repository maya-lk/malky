import { wizardActionTypes } from './wizard.types';
import { removeStepFromWizard } from './wizard.utils';

const INITIAL_STATE = {
    activeStep: 1,
    doneSteps : [1],
    reservationType: null,
    bookingType: null,
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
        default:
            return state;
    }
}

export default wizardReducer;