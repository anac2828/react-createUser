import styles from './Button.module.css';

const Button = (props) => {
	//props.type will allow for the button type to be applied dynamicly where the button is used. If no type is set, the default will be 'button'
	return (
		<button
			className={styles.button}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};
export default Button;
