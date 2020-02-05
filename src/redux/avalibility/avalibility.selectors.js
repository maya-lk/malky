import { createSelector } from 'reselect';

const selectAvalibilityAPI = state => state.avalibility;

export const selectListDates = createSelector(
    [selectAvalibilityAPI],
    (avalibility) => avalibility.listDates
);

export const selectClickedVehicle = createSelector(
    [selectAvalibilityAPI],
    (avalibility) => avalibility.clickedVehicle
);