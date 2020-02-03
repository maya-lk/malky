import { vehiclesActionTypes } from './vehicles.types';

export const setAllVehicles = (allVehicles) => ({
    type : vehiclesActionTypes.SET_ALL_VEHICLES,
    payload : allVehicles
});

export const setColors = (colors) => ({
    type : vehiclesActionTypes.SET_COLORS,
    payload : colors
});

export const setTypes = (types) => ({
    type : vehiclesActionTypes.SET_TYPES,
    payload : types
});

export const setCategories = (categories) => ({
    type : vehiclesActioncategories.SET_CATEGORY,
    payload : categories
});

export const setModels = (models) => ({
    type : vehiclesActioncategories.SET_MODELS,
    payload : models
});