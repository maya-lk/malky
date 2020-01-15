import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    toggleMenu: false,
    toggleMobileMenu: false,
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
        default:
            return state;
    }
}

export default commonReducer;