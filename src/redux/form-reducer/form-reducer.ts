import {BaseThunkType, InferActionsTypes} from "../store";
import {ResponseAPI} from "../../api/AjaxAPI/ResponseAPI";
import {ContactType} from "../../types/types";

const initialState = {
	response: '',
};

export type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

const formReducer = (state=initialState, action:ActionsTypes): InitialStateType => {

	switch (action.type){
		case "SN/form/SET_FORM_PAGE_RESPONSE" : {
			return {
				...state,
				response : action.responseText
			};
		}

		default:
			return state;
	}
};

export const actions = {
	setResponseForm : (responseText:string) => ({
		type: "SN/form/SET_FORM_PAGE_RESPONSE",
		responseText
	} as const),
};

export const getResponseTextThunk = (action:string, id:number, image:File, contact:ContactType):ThunkType => {
	return async (dispatch) => {
		const response:any = await ResponseAPI.getResponse(action, id, image, contact);

		dispatch( actions.setResponseForm(response) );
	}
}

export default formReducer;