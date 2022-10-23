import {createSelector} from 'reselect';
import {AppStateType} from "../store";

const getShowModalSelector = (state:AppStateType) => state.palettePage.showModal;
export const getShowModal = createSelector(getShowModalSelector, (showModal) => showModal);

const getColorsSelector = (state:AppStateType) => state.palettePage.colors;
export const getColors = createSelector(getColorsSelector, (colors) => colors);

const getOneColorSelector = (state:AppStateType, id: number | null) => {
	return state.palettePage.colors.find((item) => item.id === id);
};
export const getOneColor = createSelector(getOneColorSelector, (color) => color?.colorValue);