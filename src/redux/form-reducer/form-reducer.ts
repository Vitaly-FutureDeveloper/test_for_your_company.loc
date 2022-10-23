import {BaseThunkType, InferActionsTypes} from "../store";
import {ResponseAPI} from "../../api/AjaxAPI/ResponseAPI";

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

export const getResponseTextThunk = (action:string, id:number, image:File, name:string, surname:string, patronymic:string):ThunkType => {
	return async (dispatch) => {
		const contact = new FormData();
		contact.set('action', 'send_data');
		// @ts-ignore
		contact.set('id', id);
		contact.set('contact[name]', name);
		contact.set('contact[surname]', surname);
		contact.set('contact[patronymic]', patronymic);
		contact.set('image', image);
		// const contact = {
		// 	name,
		// 	surname,
		// 	patronymic
		// };
		try{
			// const response:any = await ResponseAPI.getResponse(action, id, image, contact);
			const response:any = await ResponseAPI.getResponse(contact);

			dispatch( actions.setResponseForm(response.msg) );
		} catch (error) {
			dispatch( actions.setResponseForm('Произошла ошибка отправки формы') );
			throw error;
		}

	}
};

export default formReducer;