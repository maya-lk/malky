import { commonActionTypes } from './common.types';

export const setSiteLogo = siteLogo => ({
    type : commonActionTypes.SET_SITE_LOGO,
    payload : siteLogo
});

export const setSocialMedia = socialMedia => ({
    type : commonActionTypes.SET_SOCIAL_MEDIA,
    payload : socialMedia
});

export const setFooterLogoUrl = footerLogoUrl => ({
    type : commonActionTypes.SET_FOOTER_LOGO_URL,
    payload : footerLogoUrl
});

export const setFooterContact = footerContact => ({
    type : commonActionTypes.SET_FOOTER_CONTACT,
    payload : footerContact
});

export const setAddress = address => ({
    type : commonActionTypes.SET_ADDRESS,
    payload : address
});

export const setFeaturedResturants = featuredResturants => ({
    type : commonActionTypes.SET_FEATURED_RESTURANTS,
    payload : featuredResturants
});