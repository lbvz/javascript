/*let ul_element = document.getElementsByTagName('ul');
console.log(ul_element);
let first_element = ul_element.first_elementchild;
let last_element = ul_element.last_elementchild;

first_elementchild.className = 'complete';
last.className = 'cool';*/


let ul_element = document.getElementsByTagName('ul')[0];
console.log(ul_element);
let first_elementchild = ul_element.firstElementChild;
let last_elementchild = ul_element.lastElementChild;

first_elementchild.className = 'complete';
last_elementchild.className = 'cool';