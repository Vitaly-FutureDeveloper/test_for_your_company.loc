import React, {useEffect, useRef, useState} from "react";
import styles from "./PalettePage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getColors} from "../../redux/palette-reducer/palette-selectors";
import LoadingSpinner from "../spinners/LoadingSpinner/LoadingSpinner";
import {actions} from "../../redux/palette-reducer/palette-reducer";
import {ButtonColor} from "./ButtonColor/ButtonColor";
import {ColorPickerModal} from "./ColorPickerModal/ColorPickerModal";

export const PalettePage:React.FC = () => {
	const dispatch = useDispatch();
	const colors = useSelector( getColors );

	const colorPicsBlockRef:any = useRef<HTMLDivElement>(null);


	const addColorPicker = () => {
		dispatch( actions.addColorPickerPallete() );
	};

	const showModalChangeColor = (id:number|null) => {
		dispatch( actions.setShowModalColorPicker(id) );
	};

	// useEffect(() => {
	// 	document.addEventListener('click', showModalChangeColor.bind(this, null) );
	//
	// 	return () => document.removeEventListener('click', showModalChangeColor.bind(this, null) );
	// }, []);

	return <section>
		<ColorPickerModal showModalChangeColor={showModalChangeColor} colorPicsBlockRef={colorPicsBlockRef} />
		<div className={styles.colorPicsBlock} ref={colorPicsBlockRef}>
			{/*{*/}
			{/*	colors ?*/}
			{/*		colors.map((color) => <ColorPickerModal key={color.id} id={color.id} />)*/}

			{/*		:*/}

			{/*		<LoadingSpinner />*/}
			{/*}*/}

			{
				colors ?
					colors.map((color) => (
						<ButtonColor key={color.id} id={color.id} showModalChangeColor={showModalChangeColor} />
					))

					:

					<LoadingSpinner />
			}
		</div>

		<div className={styles.btnsBlock}>
			<button onClick={addColorPicker} className={`btn ${styles.btnsBlock__addColor}`}>Добавить цвет</button>
		</div>
	</section>
};

export default PalettePage;