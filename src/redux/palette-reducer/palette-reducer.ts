import {InferActionsTypes} from "../store";
import {ColorType} from "../../types/types";



const initialState = {
	colors: [] as Array<ColorType>
};

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const paletteReducer = (state=initialState, action:ActionsTypes): InitialStateType => {

	switch (action.type){

		case "SN/palette/ADD_COLOR_PICKER_PALLETE":{
			return {
				...state,
				colors: [...state.colors, action.color]
			};
		}

		case "SN/palette/DELETE_COLOR_PICKER_PALLETE":{
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
	addColorPickerPallete : (color:ColorType) => ({
		type: "SN/palette/ADD_COLOR_PICKER_PALLETE",
		color
	} as const),

	deleteColorPickerPallete : (id:number) => ({
		type: "SN/palette/DELETE_COLOR_PICKER_PALLETE",
		id
	} as const),
};

export default paletteReducer;