'use strict';

const nickName = document.querySelector('#nickname');
nickName.textContent = 'Serdar';

const favFood = document.querySelector('#fav-food');
favFood.textContent = 'Stuffed Grape Leaves';

const homeTown = document.querySelector('#hometown');
homeTown.textContent = 'Istanbul';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => (item.className = 'list-item'));

document.body.style.fontFamily = 'Arial, sans-serif';
