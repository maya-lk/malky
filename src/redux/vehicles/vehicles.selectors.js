import { createSelector } from 'reselect';

const selectVehicleAPI = state => state.vehicles;

export const selectAllVehicles = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.allVehicles
);

export const selectColors = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.colors
);

export const selectTypes = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.types
);

export const selectCategories = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.categories
);

export const selectModels = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.models
);