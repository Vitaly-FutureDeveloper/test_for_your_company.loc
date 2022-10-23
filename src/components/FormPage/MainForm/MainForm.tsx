import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import {FormType} from "../../../types/types";
import styles from "./../FormPage.module.scss";
import photoToForm from "./../../../assets/img/logoFileInput.svg";


type PropsType = {
	onFormSubmit: (formValues:FormType) => void,
};

type SetSubmittingType = {
	setSubmitting:(isSubmitting: boolean) => void,
};

const MainForm:React.FC<PropsType> = ({onFormSubmit}) => {

	const SigninSchema = Yup.object({
		name: Yup.string()
			.min(2, 'Имя не менее 2 символа')
			.max(20, 'Имя не может быть больше 20 символов')
			.required('Поле имя обязательно для заполнения'),

		surname: Yup.string()
			.min(2, 'Фамилия не менее 2 символа')
			.max(25, 'Фамилия не может быть больше 25 символов')
			.required('Поле фамилия обязательно для заполнения'),

		patronymic: Yup.string()
			.min(2, 'Отчество  не менее 2 символа')
			.max(20, 'Отчество не может быть больше 20 символов')
			.required('Поле отчество обязательно для заполнения'),

		// image: Yup.array().of(Yup.object().shape({
		// 	file: Yup.mixed().test('fileSize', 'Размер файла больше 10 байт', (value) => {
		// 		if (!value) return false
		// 		return value.size < 10
		// 	}).required(),
		// 	type: Yup.string().oneOf([`application/vnd.ms-publisher`], 'Добавьте файл с правильным форматов').required(),
		// 	name: Yup.string().required()
		// }).typeError('Добавьте файл')).required()
	});

	const [photoForm, setPhotoForm] = useState(photoToForm);


	const onSubmit = async (values:FormType, {setSubmitting}:SetSubmittingType) => {
		const formValues:FormType = {
			action: values.action,
			id: values.id,
			image: values.image,
			name: values.name,
			surname: values.surname,
			patronymic: values.patronymic,
		};
		setSubmitting(true);

		await onFormSubmit(formValues);

		setSubmitting(false);

	}

	return <div>
		<Formik
			initialValues={{ action: 'POST', id: 1, name: '', surname: '', patronymic: '' }}
			validationSchema={SigninSchema}
			onSubmit={onSubmit}
		>

			{({isSubmitting, setFieldValue}) => (

				<Form>

					<Field type="hidden" name="action" value="POST" />

					<label className={styles.mainForm__label}>
						<span className={styles.mainForm__labelName}>Имя:</span>
						<Field className={styles.mainForm__textInput} type="text" name="name"/>
						<ErrorMessage name="name" component="div" className={styles.formValidateText}/>
					</label>

					<label className={styles.mainForm__label}>
						<span className={styles.mainForm__labelName}>Фамилия:</span>
						<Field className={styles.mainForm__textInput} type="text" name="surname"/>
						<ErrorMessage name="surname" component="div" className={styles.formValidateText}/>
					</label>

					<label className={styles.mainForm__label}>
						<span className={styles.mainForm__labelName}>Отчество:</span>
						<Field className={styles.mainForm__textInput} type="text" name="patronymic"/>
						<ErrorMessage name="patronymic" component="div" className={styles.formValidateText}/>
					</label>

					<label className={styles.mainForm__label}>
						<span className={styles.mainForm__labelName}>Фото:</span>

						<div className={styles.mainForm__inputFileBlock} style={{backgroundImage: `url(${photoForm})`}}></div>

						<Field className={`visually-hidden ${styles.mainForm__fileInput}`}
									 type="file"
									 onChange={ (evt:any) => {
										 const fileReader = new FileReader();
										 fileReader.onload = () => {
											 if (fileReader.readyState === 2) {
												 setFieldValue('image', fileReader.result);
												 setPhotoForm(fileReader.result as any);
											 }
										 };
										 fileReader.readAsDataURL(evt.target.files[0]);
									 }}
									 accept=".png,.jpg,.jpeg,.gif,.svg,.bmp"
									 name="image_name"/>

						<ErrorMessage name="image" component="div" className={styles.formValidateText}/>
					</label>

					<div className={styles.formBtnsSubmit}>
						<button type="submit"
										disabled={isSubmitting}
										className={`btn ${styles.formBtnsSubmit__btnSubmit}`}
						>Сохранить
						</button>
					</div>
				</Form>

			)}

		</Formik>

	</div>

};



export default MainForm;