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

export const setPickupLocation = pickupLocation => ({
    type : wizardActionTypes.SET_PICKUP_LOCATION,
    payload : pickupLocation
});

export const setPickupDate = pickupDate => ({
    type : wizardActionTypes.SET_PICKUP_DATE,
    payload : pickupDate
});

export const setPickupTime = pickupTime => ({
    type : wizardActionTypes.SET_PICKUP_TIME,
    payload : pickupTime
});

export const setDropoffLocation = dropoffLocation => ({
    type : wizardActionTypes.SET_DROPOFF_LOCATION,
    payload : dropoffLocation
});

export const setDropoffDate = dropoffDate => ({
    type : wizardActionTypes.SET_DROPOFF_DATE,
    payload : dropoffDate
});

export const setDropoffTime = dropoffTime => ({
    type : wizardActionTypes.SET_DROPOFF_TIME,
    payload : dropoffTime
});

export const setCustomerName = customerName => ({
    type : wizardActionTypes.SET_CUSTOMER_NAME,
    payload : customerName
});

export const setAdults = adults => ({
    type : wizardActionTypes.SET_ADULTS,
    payload : adults
});

export const setKids = kids => ({
    type : wizardActionTypes.SET_KIDS,
    payload : kids
});

export const setToddlers = toddlers => ({
    type : wizardActionTypes.SET_TODDLERS,
    payload : toddlers
});

export const setLaguage = laguage => ({
    type : wizardActionTypes.SET_LAGUAGE,
    payload : laguage
});

export const toggleAddNewClient = () => ({
    type : wizardActionTypes.SET_CLIENT_MODAL_TOGGLE
});

export const setClientName = clientName => ({
    type : wizardActionTypes.SET_CLIENT_NAME,
    payload : clientName
});

export const setClientCompany = clientCompany => ({
    type : wizardActionTypes.SET_CLIENT_COMPANY,
    payload : clientCompany
});

export const setClientEmail = clientEmail => ({
    type : wizardActionTypes.SET_CLIENT_EMAIL,
    payload : clientEmail
});

export const setClientContact = clientContact => ({
    type : wizardActionTypes.SET_CLIENT_CONTACT,
    payload : clientContact
});

export const setClientAddress = clientAddress => ({
    type : wizardActionTypes.SET_CLIENT_ADDRESS,
    payload : clientAddress
});