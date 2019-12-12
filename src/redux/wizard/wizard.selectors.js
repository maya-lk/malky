import { createSelector } from 'reselect';

const selectWizardAPI = state => state.wizard;

export const selectActiveStep = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.activeStep
);

export const selectDoneSteps = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.doneSteps
);

export const selectReservationType = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.reservationType
);

export const selectBookingType = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.bookingType
);

export const selectPickupLocation = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.pickupLocation
);

export const selectPickupDate = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.pickupDate
);

export const selectPickupTime = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.pickupTime
);

export const selectDropoffLocation = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.dropoffLocation
);

export const selectDropoffDate = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.dropoffDate
);

export const selectDropoffTime = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.dropoffTime
);

export const selectCustomerName = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.customerName
);

export const selectAdults = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.adults
);

export const selectKids = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.kids
);

export const selectToddlers = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.toddlers
);

export const selectLaguage = createSelector(
    [selectWizardAPI],
    (wizard) => wizard.laguage
);