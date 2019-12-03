import { wizardActionTypes } from './wizard.types';

const INITIAL_STATE = {
    activeStep: null,
    doneSteps : []
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
                doneSteps : action.payload
            }
        default:
            return state;
    }
}

export default wizardReducer;