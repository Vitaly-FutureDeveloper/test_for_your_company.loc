import {BaseThunkType, InferActionsTypes} from "./../store";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null, // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const paletteReducer = (state=initialState, action:ActionsTypes): InitialStateType => {

    switch (action.type){
        case "SN/auth/SET_USER_DATA":
        case "SN/auth/GET_CAPTCHA_URL_SUCCESS" : {
            return {
                ...state,
                ...action.payload
            };
        }

        default:
            return state;
    }
};

export const actions = {
    setAuthUserData : (userId:number | null, email:string | null, login:string | null, isAuth:boolean) => ({
        type: "SN/auth/SET_USER_DATA",
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    } as const),

    getCaptchaUrlSuccess : (captchaUrl: string) => ({
        type: "SN/auth/GET_CAPTCHA_URL_SUCCESS",
        payload: {captchaUrl},
    } as const),
};

export default paletteReducer;