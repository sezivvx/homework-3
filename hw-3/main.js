
//task.1


minNumber(5,10)
minNumber(15,3)

function minNumber(num1, num2){
if(num1<num2){
    console.log(num1);
} else{
 console.log(num2);
    }
}


//task.2
let userLnput = prompt('введите строку')
getLength(userLnput)
function getLength (userLnput){
console.log(userLnput.length);
}



//task.3


let num1 = 10;
let num2 = 5;
let operator = "+"; 

function calculator (num1, num2,operator){
let result
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Деление на ноль невозможно";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Неккоректный оператор'
  }
  console.log(result);
  return result 
  }
  console.log(calculator(10,5,'/',)); 





  





