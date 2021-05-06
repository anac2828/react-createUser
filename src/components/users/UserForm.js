import { useState, useRef, Fragment } from 'react';
import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
	//useRef creates a connection between an element and JS code. It returns a the node it is connected to. When using refs to get a value you don't need useState. If you only need to read a value use refs. In these example useState would also had been ok to use.
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please entervalid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}

		const user = {
			username: enteredName,
			age: enteredUserAge,
			id: Math.random(),
		};

		props.onAddUser(user);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles['form-container']}>
				<form onSubmit={addUserHandler}>
					<div className={styles['form-group']}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							// connect the this element with the nameInputRef
							ref={nameInputRef}
						/>
					</div>
					<div className={styles['form-group']}>
						<label htmlFor="age">Age (Years)</label>
						<input type="text" id="age" ref={ageInputRef} />
					</div>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Fragment>
	);
};
export default UserForm;
