import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type BaseThunkType<A extends Action, R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;


// @ts-ignore
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;