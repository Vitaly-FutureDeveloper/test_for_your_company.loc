import React from "react";
import MainForm from "./MainForm/MainForm";
import {FormType} from "../../types/types";
import {useDispatch} from "react-redux";
import {Response} from "./Response/Response";
import {getResponseTextThunk} from "../../redux/form-reducer/form-reducer";

export const FormPage:React.FC = () => {

	const dispatch = useDispatch();

	// const onFormSubmit = (action:string, id:number, image:File, name:string, surname:string, patronymic:string) => {
	const onFormSubmit = (formValues:FormType) => {
		const {action, id, image, name, surname, patronymic} = formValues;
		console.log(action, id, image, name, surname, patronymic);
		// @ts-ignore
		dispatch( getResponseTextThunk(action, id, image, name, surname, patronymic) );
	};

	return <section>
		<MainForm onFormSubmit={onFormSubmit} />
		<Response />
	</section>
};

export default FormPage;