import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://skitnay.ru">SkitNay.ru</a>
				</h1>
			</main>
		</div>
	);
}
