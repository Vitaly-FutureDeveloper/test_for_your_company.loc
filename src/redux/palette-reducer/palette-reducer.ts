import {BaseThunkType, InferActionsTypes} from "../store";
import {ColorType} from "../../types/types";
import {getUnicID} from "../../api/utils/getUnicID";


const initialState = {
	showModal: null as number | null,
	colors: [] as Array<ColorType>
};


export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

type ThunkType = BaseThunkType<ActionsTypes>;

const paletteReducer = (state=initialState, action:ActionsTypes): InitialStateType => {

	switch (action.type){

		case "SN/palette/SHOW_MODAL_COLOR_PICKER_PALLETE": {
			return {
				...state,
				showModal: action.modal
			};
		}

		case "SN/palette/ADD_COLOR_PICKER_PALLETE": {
			return {
				...state,
				colors: [...state.colors, action.picker]
			};
		}

		case "SN/palette/SET_COLOR_PICKER_PALLETE": {
			const body = JSON.parse( JSON.stringify(state) );
			const index = body.colors.findIndex((item:ColorType) => item.id === action.id);
			body.colors[index].colorValue = action.colorValue;

			return body;
		}

		case "SN/palette/DELETE_COLOR_PICKER_PALLETE": {
			return {
				...state,
				colors: [...state.colors.filter((item) => item.id !== action.id)]
			};
		}

		default:
				return state;
	}
};

export const actions = {
	setShowModalColorPicker : (modal: number | null) => ({
			type: "SN/palette/SHOW_MODAL_COLOR_PICKER_PALLETE",
			modal
		}) as const,
	
	addColorPickerPallete : (picker:ColorType) => ({
		type: "SN/palette/ADD_COLOR_PICKER_PALLETE",
		picker,
	} as const),

	deleteColorPickerPallete : (id:number) => ({
		type: "SN/palette/DELETE_COLOR_PICKER_PALLETE",
		id
	} as const),

	setColorPickerPallete : (id:number | null, colorValue:string) => ({
		type: "SN/palette/SET_COLOR_PICKER_PALLETE",
		id,
		colorValue,
	} as const),
};

export const addColorPickerPalleteThunk = ():ThunkType => {
	return async (dispatch) => {
		const unicId = getUnicID();
		const picker = { id: unicId, colorValue: '#ffffff' };

		dispatch( actions.addColorPickerPallete(picker) );
		dispatch( actions.setShowModalColorPicker(unicId) );
	}
};

export default paletteReducer;