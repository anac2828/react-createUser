import { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = (props) => {
	const [enteredUsername, setEnterUsername] = useState('');
	const [enteredAge, setEnterAge] = useState('');

	const usernameHandler = (event) => {
		setEnterUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setEnterAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();

		const user = {
			username: enteredUsername,
			age: enteredAge,
			id: Math.random(),
		};

		props.onSavedUserData(user);
		setEnterUsername('');
		setEnterAge('');
	};

	return (
		<div className={styles['form-container']}>
			<form onSubmit={addUserHandler}>
				<div className={styles['form-group']}>
					<label>Username</label>
					<input
						type="text"
						id="username"
						value={enteredUsername}
						onChange={usernameHandler}
					/>
				</div>
				<div className={styles['form-group']}>
					<label>Age (Years)</label>
					<input
						type="text"
						id="age"
						value={enteredAge}
						onChange={ageHandler}
					/>
				</div>
				<button type="submit">Add User</button>
			</form>
		</div>
	);
};
export default UserForm;
