import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../PalettePage.module.scss";
import {getOneColor} from "../../../redux/palette-reducer/palette-selectors";
import {AppStateType} from "../../../redux/store";



type PropsType = {
	id:number,
	showModalChangeColor: (id: number | null) => void,
};

export const ButtonColor:React.FC<PropsType> = ({id, showModalChangeColor}) => {

	const color = useSelector( (state:AppStateType) => getOneColor(state, id) );


	return <button style={{backgroundColor: color}}
								 onClick={ () => showModalChangeColor(id) }
								 className={`btn ${styles.btnPicker}`}></button>
}