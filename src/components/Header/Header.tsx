import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";

export const Header:React.FC = () => {
	return <header>
		<nav>
			<ul className={styles.navList}>
				<li className={styles.navList__item}>
					<Link to="/form">Форма</Link>
				</li>
				<li className={styles.navList__item}>
					<Link to="/pallete">Палитра</Link>
				</li>
			</ul>
		</nav>
	</header>
};