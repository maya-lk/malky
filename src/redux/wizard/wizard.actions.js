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

export const setReservationType = reservationType => ({
    type : wizardActionTypes.SET_RESERVATION_TYPE,
    payload : reservationType
});

export const setBookingType = bookingType => ({
    type : wizardActionTypes.SET_BOOKING_TYPE,
    payload : bookingType
});