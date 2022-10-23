import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./PalettePage.module.scss";

import {getColors} from "../../redux/palette-reducer/palette-selectors";
import {actions, addColorPickerPalleteThunk} from "../../redux/palette-reducer/palette-reducer";
import {ButtonColor} from "./ButtonColor/ButtonColor";
import {ColorPickerModal} from "./ColorPickerModal/ColorPickerModal";
import LoadingSpinner from "../spinners/LoadingSpinner/LoadingSpinner";

export const PalettePage:React.FC = () => {
	const dispatch = useDispatch();
	const colors = useSelector( getColors );

	const colorPicsBlockRef:any = useRef<HTMLDivElement>(null);


	const addColorPicker = () => {
		// @ts-ignore
		dispatch( addColorPickerPalleteThunk() );
	};

	const showModalChangeColor = (id:number|null) => {
		dispatch( actions.setShowModalColorPicker(id) );
	};

	return <section ref={colorPicsBlockRef}>
		<ColorPickerModal showModalChangeColor={showModalChangeColor} colorPicsBlockRef={colorPicsBlockRef} />
		<div className={styles.colorPicsBlock} >

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