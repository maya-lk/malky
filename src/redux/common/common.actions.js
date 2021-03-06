import { commonActionTypes } from './common.types';

export const setToggleMenu = () => ({
    type : commonActionTypes.SET_TOGGLE_MENU,
});

export const setToggleMobileMenu = () => ({
    type : commonActionTypes.SET_TOGGLE_MOBILE_MENU,
});

export const setToggleAdvancedFeatures = () => ({
    type : commonActionTypes.SET_TOGGLE_ADVANCED_FEATURES,
});