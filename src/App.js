import React, { useState, Fragment } from 'react';
import UserList from './components/users/UserList';
import UserForm from './components/users/UserForm';

// const usersData = [];

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (newUser) => {
		setUsers((prevUsers) => [newUser, ...prevUsers]);
	};

	return (
		// Use Fragment to reduce the number of divs being render
		<Fragment>
			<UserForm onAddUser={addUserHandler} />
			<UserList users={users} />
		</Fragment>
	);
}

export default App;
