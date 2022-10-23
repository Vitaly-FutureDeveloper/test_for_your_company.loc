import React, {useEffect, useRef} from "react";
import {HexColorPicker} from "react-colorful";

import {useDispatch, useSelector} from "react-redux";
import {getOneColor, getShowModal} from "../../../redux/palette-reducer/palette-selectors";
import {actions} from "../../../redux/palette-reducer/palette-reducer";
import styles from "./../PalettePage.module.scss";
import {AppStateType} from "../../../redux/store";

type PropsType = {
	showModalChangeColor: (id: number | null) => void,
	colorPicsBlockRef: any
};

export const ColorPickerModal:React.FC<PropsType> = ({showModalChangeColor, colorPicsBlockRef}) => {
	const dispatch = useDispatch();

	const showModal = useSelector( getShowModal );

	const color = useSelector( (state:AppStateType) => getOneColor(state, showModal) );

	const rootEl:any = useRef(null);

	const onCloseColorPickerModal = (evt:any) => {
		if (!showModal) return;

		if (!rootEl.current.contains(evt.target) && !colorPicsBlockRef.current.contains(evt.target)) {
			showModalChangeColor(null);
		}
	};

	useEffect(() => {
		document.addEventListener('click', onCloseColorPickerModal);
		return () => document.removeEventListener('click', onCloseColorPickerModal);
	}, [showModal]);

	const setColor = (evt:any) => {
		dispatch( actions.setColorPickerPallete(showModal, evt) );
	};

	return !showModal ? null : <div className={styles.modalPicker} ref={rootEl}>
		<HexColorPicker color={color} onChange={setColor} />;
	</div>
};