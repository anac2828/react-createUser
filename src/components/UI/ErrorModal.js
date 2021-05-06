import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

//PORTAL COMPONENT
const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card
			onClick={props.closeModal}
			className={`${styles.modal} ${!props.close ? styles.hidden : ''}`}
		>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button type="submit" onClick={props.onConfirm}>
					Okay
				</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	//onConfirm function will be set where the ErrorModal is used
	return (
		<Fragment>
			{/* The first arg. is your DOM that should be render and the second is where you want it to be render*/}
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</Fragment>
	);
};

export default ErrorModal;
