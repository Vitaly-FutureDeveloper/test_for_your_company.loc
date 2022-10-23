import React from "react";
import {useSelector} from "react-redux";
import {getResponse} from "../../../redux/form-reducer/form-selectors";
import styles from "./../FormPage.module.scss";

export const Response = () => {
	const response = useSelector( getResponse );
	return <div className={styles.response}>
		<header className={styles.response__title}>Response</header>
		<p className={styles.response__text}>{response}</p>
	</div>
}