import { createSelector } from 'reselect';
import {AppStateType} from "../store";

const getColorsSelector = (state:AppStateType) => state.palettePage.colors;
export const getColors = createSelector(getColorsSelector, (colors) => colors);