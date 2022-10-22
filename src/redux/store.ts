import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

import paletteReducer from "./palette-reducer/palette-reducer";
import formReducer from "./form-reducer/form-reducer";

const reducers = combineReducers({
	palettePage: paletteReducer,
	formPage: formReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type BaseThunkType<A extends Action, R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;


// @ts-ignore
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
export default store;