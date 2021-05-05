import UserItem from './UserItem';

const UserList = (props) => {
	const { users } = props;

	return (
		<div>
			{users.map((user) => (
				<UserItem username={user.username} age={user.age} key={user.id} />
			))}
		</div>
	);
};

export default UserList;
