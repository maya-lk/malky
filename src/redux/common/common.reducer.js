import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    siteLogo: null,
    socialMedia : null,
    footerLogoUrl : null,
    footerContact : null,
    address : null,
    featuredResturants : null
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_SITE_LOGO:
            return{
                ...state , 
                siteLogo : action.payload
            }
        case commonActionTypes.SET_SOCIAL_MEDIA:
            return {
                ...state,
                socialMedia : action.payload
            }
        case commonActionTypes.SET_FOOTER_LOGO_URL:
            return{
                ...state,
                footerLogoUrl : action.payload
            }
        case commonActionTypes.SET_FOOTER_CONTACT:
            return{
                ...state,
                footerContact : action.payload
            }
        case commonActionTypes.SET_ADDRESS:
            return{
                ...state,
                address : action.payload
            }
        case commonActionTypes.SET_FEATURED_RESTURANTS:
            return{
                ...state,
                featuredResturants : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;