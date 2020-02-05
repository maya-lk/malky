import { avalibilityActionTypes } from './avalibility.types';

export const setListDates = (listDates) => ({
    type : avalibilityActionTypes.SET_LIST_DATES,
    payload : listDates
});

export const setClickedVehicle = (clickedVehicle) => ({
    type : avalibilityActionTypes.SET_CLICKED_VEHICLE,
    payload : clickedVehicle
});