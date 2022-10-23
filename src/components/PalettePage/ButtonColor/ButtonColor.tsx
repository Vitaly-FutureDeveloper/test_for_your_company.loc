import React, {useState} from "react";
import {useSelector} from "react-redux";
import styles from "../PalettePage.module.scss";
import {getOneColor} from "../../../redux/palette-reducer/palette-selectors";
import {AppStateType} from "../../../redux/store";
import {ButtonDelete} from "./ButtonDelete/ButtonDelete";


type PropsType = {
	id:number,
	showModalChangeColor: (id: number | null) => void,
};

export const ButtonColor:React.FC<PropsType> = ({id, showModalChangeColor}) => {

	const [showDelete, setShowDelete] = useState(false);

	const color = useSelector( (state:AppStateType) => getOneColor(state, id) );


	return <div className={styles.btnColorBlock}
							onMouseOver={ () => setShowDelete(true) }
							onMouseOut={ () => setShowDelete(false) } >
		{ showDelete && <ButtonDelete id={id}/> }
		<button style={{backgroundColor: color}}
						onClick={ () => showModalChangeColor(id) }
						className={styles.btnPicker}></button>
	</div>
}