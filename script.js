// Grab the elements we will be needing.

let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");

const add = '+';
const subtract = '-';
const colors = ['white','red','yellow'];

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
  let index = 0
  
  if (count.innerHTML < 0) {
    index = 1;
  } else if (count.innerHTML > 0) {
    index = 2;
  }
  
  count.style.color = colors[index];
  
}

function setValue(flag){
  let counter = 0;
  
  if (flag == add) {
    counter = parseInt(count.innerHTML)++;
  } else if (flag == subtract) {
    counter = parseInt(count.innerHTML)--;
  }
  
  count.innerHTML = counter;
}


