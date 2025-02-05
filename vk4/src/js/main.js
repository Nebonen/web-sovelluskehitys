import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items.js';
import { getUsers, addUser } from './users.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

const getItemButton = document.querySelector('.get_items');
getItemButton.addEventListener('click', getItems);

const getUsersButton = document.querySelector('.get_users');
getUsersButton.addEventListener('click', getUsers);

const addUserForm = document.querySelector('.formpost');
addUserForm.addEventListener('click', addUser);
