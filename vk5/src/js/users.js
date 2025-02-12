import { fetchData } from './fetch';

const getUsers = async () => {
	const url = 'http://localhost:3000/api/users';
	const users = await fetchData(url);

	if (users.error) {
		console.error('Virhe', users.error);
		return;
	}

	console.log(users);

	const tableBody = document.querySelector('.tbody');
	tableBody.innerHTML = '';

	users.forEach((user) => {
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><button class="check" data-id="${user.id}">Info</button></td>
            <td><button class="delete" data-id="${user.id}">Delete</button></td>
            <td>${user.id}</td>
        `;
		tableBody.appendChild(row);
	});
};

const addUser = async () => {
	event.preventDefault();

	const url = 'http://localhost:3000/api/users';
	const username = document.querySelector('#username').value.trim();
	const password = document.querySelector('#password').value.trim();
	const email = document.querySelector('#email').value.trim();

	const bodyData = {
		username: username,
		password: password,
		email: email,
	};

	const options = {
		body: JSON.stringify(bodyData),
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
	};
	console.log(options);

	const response = await fetchData(url, options);
	console.log(response);
};

const getUserById = async () => {
	event.preventDefault();
	const id = document.querySelector('#id').value.trim();
	const url = `http://localhost:3000/api/users/${id}`;
	const user = await fetchData(url);

	if (user.error) {
		console.error('Virhe', user.error);
		return;
	}

	console.log(user);
};

export { getUsers, addUser, getUserById };
