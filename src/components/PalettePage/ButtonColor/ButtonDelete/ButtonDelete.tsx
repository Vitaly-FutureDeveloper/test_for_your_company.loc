import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../PalettePage.module.scss";
import {actions} from "../../../../redux/palette-reducer/palette-reducer";



type PropsType = {
	id:number,
};

export const ButtonDelete:React.FC<PropsType> = ({id}) => {
	const dispatch = useDispatch();

	const onDeletePicker = () => {
		dispatch( actions.deleteColorPickerPallete(id) );
	};


	return <button onClick={onDeletePicker} className={styles.btnDelete}></button>
}