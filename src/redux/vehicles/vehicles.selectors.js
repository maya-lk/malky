import { createSelector } from 'reselect';

const selectVehicleAPI = state => state.vehicles;

export const selectAllVehicles = createSelector(
    [selectVehicleAPI],
    (vehicles) => vehicles.allVehicles
);