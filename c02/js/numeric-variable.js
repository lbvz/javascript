"use strict";
let price;
let quantity;
let total;
price = 10;
quantity = 14;
total = price * quantity;
let cost_div = document.getElementById('cost');
cost_div.innerText = "$" + total;
