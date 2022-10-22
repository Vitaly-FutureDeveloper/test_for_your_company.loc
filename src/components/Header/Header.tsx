import React from "react";
import styles from "./Header.module.scss";
import {Link, NavLink} from "react-router-dom";


export const Header:React.FC = () => {

	const setActiveLink = (navData:any) => navData.isActive ? styles.navList_active : "";

	return <header className={styles.header}>
		<nav>
			<ul className={styles.navList}>
				<li className={styles.navList__item}>
					<NavLink to="/form" className={setActiveLink}>Форма</NavLink>
				</li>
				<li className={styles.navList__item}>
					<NavLink to="/palette" className={setActiveLink}>Палитра</NavLink>
				</li>
			</ul>
		</nav>
	</header>
};