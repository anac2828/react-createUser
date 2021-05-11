import { useState } from 'react';
import InputError from './UI/ErrorModal';
import UserForm from './users/UserForm';

const NewUser = (props) => {
	// const [isValid, setIsValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [close, setClose] = useState(false);

	const saveUserDataHandler = (userData) => {
		const newUserData = { ...userData, id: Math.random().toString() };

		if (!userData.username || !userData.age) {
			setClose(true);
			setErrorMessage('Please entervalid name and age (non-empty values).');
			return;
		}

		if (+userData.age < 0) {
			setClose(true);
			setErrorMessage('Please enter a valid age (> 0).');
			return;
		}
		props.onAddUser(newUserData);
	};

	const closeMondalHandler = () => {
		setClose(false);
	};
	console.log(close);
	return (
		<div>
			{close && (
				<InputError
					error={errorMessage}
					closeModal={closeMondalHandler}
					close={close}
				/>
			)}
			<UserForm onSavedUserData={saveUserDataHandler} />
		</div>
	);
};
export default NewUser;
