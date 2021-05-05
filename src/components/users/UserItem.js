import styles from './UserItem.module.css';

const UserItem = (props) => {
	const { username, age } = props;

	return (
		<div className={styles['item-container']}>
			<div className={styles.item}>
				{username} ({age} years old)
			</div>
		</div>
	);
};

export default UserItem;
