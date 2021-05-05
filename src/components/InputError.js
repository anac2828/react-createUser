import styles from './InputError.module.css';

const InputError = (props) => {
	return (
		// <div className={`${styles.container} ${!props.close ? styles.hidden : ''}`}>
		<div
			onClick={props.closeModal}
			className={`${styles.container} ${!props.close ? styles.hidden : ''}`}
		>
			<div className={styles['error-container']}>
				<div className={styles['error__header']}>
					<h3>Invalid input</h3>
				</div>
				<div className={styles['error__message']}>{props.error}</div>
				<button type="submit" onClick={props.closeModal}>
					Okay
				</button>
			</div>
		</div>
	);
};

export default InputError;
