import {BaseThunkType, InferActionsTypes} from "../store";

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

export const getResponseTextThunk = (action:string, id:number, image:any, contact:any):ThunkType => {
	return async (dispatch) => {
		// const response = await FormAPI.getResponse(action:string, id:number, image:any, contact:any);
		//
		// dispatch( actions.setResponseForm(response) );
	}
}

export default formReducer;