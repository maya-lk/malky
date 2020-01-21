import { vehiclesActionTypes } from './vehicles.types';

export const setAllVehicles = () => ({
    type : vehiclesActionTypes.SET_ALL_VEHICLES,
    payload : allVehicles
});