import { vehiclesActionTypes } from './vehicles.types';

export const setAllVehicles = (allVehicles) => ({
    type : vehiclesActionTypes.SET_ALL_VEHICLES,
    payload : allVehicles
});