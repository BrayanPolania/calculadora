
/*-----------------------VARIABLES---------------------------*/

const
btns = document.querySelector("#btns");

let
numPrevious = document.querySelector("#numPrevious"),
numCurrent = document.querySelector("#numCurrent"),
num1,num2,operationA
;
/*-----------------------FUNCIONES---------------------------*/
const listenerP = e => {
  if (e.target.className.includes("op")) {
    operation(e);
  }
  else if (e.target.className.includes("num")) {
    number(e);
  }
}
function number(e) {
  let value = e.target.textContent;
  if (value === "." && numCurrent.innerHTML == ""){
    numCurrent.innerHTML = "0.";
    
    return;
  }
  if (value === "." && numCurrent.innerHTML.includes(".")){
    return;
  }
  numCurrent.innerHTML += value;
}
function operation(e) {
  let value = e.target.textContent;
  if (value === "c") {
    num1 = undefined; 
    num2 = undefined;
    numCurrent.innerHTML= ""; 
    numPrevious.innerHTML = "";
    operationA = undefined;
    return;
  }
  if(numPrevious.innerHTML == "") {
    num1 = numCurrent.innerHTML;
    operationA = value;
    numPrevious.innerHTML = `${numCurrent.innerHTML} ${value}`;
    numCurrent.innerHTML = "";

    return;
  }
  if(numPrevious.innerHTML !== "") {
    num2 = numCurrent.innerHTML;
    if (value === "=") {
      if (operationA === "=") {
        return;
      }
      numPrevious.innerHTML += ` ${num2} =`
      numCurrent.innerHTML = operanding(operationA,num1, num2);
      num1 = numCurrent.innerHTML;
      num2 = undefined;
      operationA = value;
      return;
    }
    else {
      if (operationA === "=") {
        console.log(value);
        operationA = value;
        num1 = numCurrent.innerHTML;
        numPrevious.innerHTML = `${num1} ${value}`;
        numCurrent.innerHTML = "";
        return;
      }
      let result = operanding(operationA,num1, num2);
      numPrevious.innerHTML = `${result} ${value}`;
      numCurrent.innerHTML = "";
      num1 = result;
      num2 = undefined;
      operationA = value;
    }

    return;
  }
}
function operanding(operator, num1, num2) {
  if(operator === "+"){
    return Number(num1) + Number(num2);
  }
  if(operator === "-"){
    return Number(num1) - Number(num2);
  }
  if(operator === "*"){
    return Number(num1) * Number(num2);
  }
  if(operator === "/"){
    return Number(num1) / Number(num2);
  }
  //error
}



/*------------------------CODIGO-----------------------------*/
/*listeners*/
btns.addEventListener("click",listenerP)
  /*listeners*/










//TODO: 
//FIXME: 