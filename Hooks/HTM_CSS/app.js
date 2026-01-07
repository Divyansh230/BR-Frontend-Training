let count = 0;

const para = document.createElement('p');
para.textContent = `Counter :${count}`;

const button = document.createElement('button');
button.textContent = 'Increment';

document.getElementById('root').append(para, button);


button.addEventListener('click', () => {
        count++;
        para.textContent = `Counter :${count}`
    }

);