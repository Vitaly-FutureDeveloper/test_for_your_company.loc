import {createSelector} from 'reselect';
import {AppStateType} from "../store";

const getResponseSelector = (state:AppStateType) => state.formPage.response;
export const getResponse = createSelector(getResponseSelector, (response) => response);