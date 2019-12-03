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