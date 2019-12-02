import { createSelector } from 'reselect';

const selectCommonAPI = state => state.common;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (common) => common.siteLogo
);

export const selectSocialMedia = createSelector(
    [selectCommonAPI],
    (common) => common.socialMedia
);

export const selectFooterLogoUrl = createSelector(
    [selectCommonAPI],
    (common) => common.footerLogoUrl
);

export const selectFooterContact = createSelector(
    [selectCommonAPI],
    (common) => common.footerContact
);

export const selectAddress = createSelector(
    [selectCommonAPI],
    (common) => common.address
);

export const selectFeaturedResturants = createSelector(
    [selectCommonAPI],
    (common) => common.featuredResturants
);