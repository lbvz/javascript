"use strict";
let title;
title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

let title_div = document.getElementById('title');
title_div.innerText = title;

let note_div = document.getElementById('note');
note_div.innerHTML = message;