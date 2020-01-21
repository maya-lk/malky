import { avalibilityActionTypes } from './avalibility.types';

export const setListDates = (listDates) => ({
    type : avalibilityActionTypes.SET_LIST_DATES,
    payload : listDates
});