import React, { useState } from 'react';
import UserList from './components/users/UserList';
import NewUser from './components/NewUser';

const usersData = [];

function App() {
	const [users, setUsers] = useState(usersData);
	const addUserHandler = (newUser) => {
		setUsers((prevUsers) => [newUser, ...prevUsers]);
	};

	return (
		<div>
			<NewUser onAddUser={addUserHandler} />
			<UserList users={users} />
		</div>
	);
}

export default App;
