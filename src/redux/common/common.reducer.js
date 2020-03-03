import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    toggleMenu: false,
    toggleMobileMenu: false,
    toggleAdvancedFeatures : false,
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_TOGGLE_MENU:
            return{
                ...state , 
                toggleMenu : !state.toggleMenu
            }
        case commonActionTypes.SET_TOGGLE_MOBILE_MENU:
            return{
                ...state , 
                toggleMobileMenu : !state.toggleMobileMenu
            }
        case commonActionTypes.SET_TOGGLE_ADVANCED_FEATURES:
            return{
                ...state , 
                toggleAdvancedFeatures : !state.toggleAdvancedFeatures
            }
        default:
            return state;
    }
}

export default commonReducer;