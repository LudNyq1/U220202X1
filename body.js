'use strict';
console.log('Body.js is alive.')

const fun = () => {
    document.title = 'William was here'
}

const rowClass = ['row', 'align-items-start', 'justify-content-center'];

// First
const body = document.getElementById('body');
body.classList.add('container');

const firstRow = document.createElement('div');
firstRow.classList.add(rowClass);

const container1 = document.createElement('div');
container1.classList.add('col-8')

const title = document.createElement('p');
title.classList.add('text-center', 'h1', 'mx-auto');
title.textContent = 'Body is alive';

body.append(firstRow);
firstRow.append(container1);
container1.append(title);



setTimeout(fun, 15000);