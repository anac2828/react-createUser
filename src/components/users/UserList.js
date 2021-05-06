// import UserItem from './UserItem';
import Card from '../UI/Card';
import styles from './Userlist.module.css';

const UsersList = (props) => {
	const { users } = props;

	return (
		<Card className={styles.users}>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.username} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
