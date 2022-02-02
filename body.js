'use strict';
console.log('Body.js is alive.')

const rowClass = ['row', 'align-items-start', 'justify-content-center'];

const body = document.getElementById('body');
body.classList.add('container');

const firstRow = document.createElement('div');
firstRow.classList.add(rowClass);

const title = document.createElement('h1');
title.classList.add('col-8', 'text-center');
title.textContent = 'Body is alive';

body.append(firstRow);
firstRow.append(title);