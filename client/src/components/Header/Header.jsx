import { useState } from "react";
import styles from './Header.module.css';

export default function Header() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<header className={styles.header}>
			<h1>Emaily</h1>
			<div className={styles.actions}>
				{!isLogged ? (
					<>
						<button>Login</button>
						<button>Signup</button>
					</>
				) : (
					<>
						<button>Add Credits</button>
						<button>Credits: 5</button>
						<button>Logout</button>
					</>
				)}
			</div>
		</header>
	);
}
