import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

const getItemButton = document.querySelector('.get_items');
getItemButton.addEventListener('click', getItems);
