const element = document.createElement('h2');

element.textContent = 'Naya saal mubarak ho'
element.id = 'second';


//Selecting the element

const first_element = document.getElementById("first");
//first_element.after(element);
//first_element.before(element);

const newelement = document.createElement('h3');
newelement.textContent = 'Diwali Aaa rhi hai';
newelement.id = 'third';
newelement.className = 'newElement Holi';


//Assigning class to new element
newelement.classList.add('Alpha');
newelement.style.backgroundColor = 'red';
newelement.style.fontSize = '50px';
first_element.before(newelement);


//Adding element to list
const list = document.createElement('li');
list.textContent = "Milk";
const list2 = document.createElement('li');
list2.textContent = 'Cake';

const list3 = document.createElement('li');
list3.textContent = 'Halwa';
const list4 = document.createElement('li');
list4.textContent = 'Paneer';
const unorderd = document.getElementById('listing');
unorderd.append(list);
unorderd.append(list2);
unorderd.append(list3);

unorderd.children[1].after(list4);