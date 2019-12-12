import { wizardActionTypes } from './wizard.types';

export const setActiveStep = activeStep => ({
    type : wizardActionTypes.SET_ACTIVE_STEP,
    payload : activeStep
});

export const setDoneSteps = doneSteps => ({
    type : wizardActionTypes.SET_DONE_STEP,
    payload : doneSteps
});

export const removeDoneSteps = doneSteps => ({
    type : wizardActionTypes.REMOVE_DONE_STEPS,
    payload : doneSteps
});