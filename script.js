// Grab the elements we will be needing.

let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");

const add = '+';
const subtract = '-';
const colors = ['white','red','yellow'];
const initialValue = 0;
const redColor = 1;
const yellowColor = 2;

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    processAction(add);
  }

  if (e.target.classList.contains("subtract")) {
    processAction(substract);
  }

  if (e.target.classList.contains("reset")) {
    processAction();
  }
});

function processAction(flag = 1){
  
  setValue(flag);
  setColor();
  
}

function setColor() {
  let index = initialValue;
  
  if (count.innerHTML < initialValue) {
    index = redColor;
  } else if (count.innerHTML > initialValue) {
    index = yellowColor;
  }
  
  count.style.color = colors[index];
  
}

function setValue(flag){
  let counter = initialValue;
  
  if (flag == add) {
    counter = parseInt(count.innerHTML)++;
  } else if (flag == subtract) {
    counter = parseInt(count.innerHTML)--;
  }
  
  count.innerHTML = counter;
}


