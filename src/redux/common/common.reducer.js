import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    toggleMenu: false,
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_TOGGLE_MENU:
            return{
                ...state , 
                toggleMenu : !state.toggleMenu
            }
        default:
            return state;
    }
}

export default commonReducer;