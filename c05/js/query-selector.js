let first_element = document.querySelector('li.hot');
first_element.className = 'cool';

let all_elements = document.querySelectorAll('li.hot');
console.log(typeof all_elements);
all_elements.forEach((current_element) => {
    current_element.className = 'cool';
})