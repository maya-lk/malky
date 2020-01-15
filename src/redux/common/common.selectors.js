import { createSelector } from 'reselect';

const selectCommonAPI = state => state.common;

export const selectToggleMenu = createSelector(
    [selectCommonAPI],
    (common) => common.toggleMenu
);

export const selectToggleMobileMenu = createSelector(
    [selectCommonAPI],
    (common) => common.toggleMobileMenu
);