import styles from './Card.module.css';
const Card = (props) => {
	//becase Card is a custom component you need to pass in 'props.className' to be able to  use css styles where the Card componenet is used
	// props.children will output everything that is inisde the Card component
	return (
		<div className={`${styles.card} ${props.className}`}>{props.children}</div>
	);
};

export default Card;
