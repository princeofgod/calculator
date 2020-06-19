//Setting screen properties
screen.disabled  = 'true';

//Declaring all variables
let screen = document.getElementById("screen") ;
let clrbtn = document.getElementById("CE")
let sign = '';

//Adding event listeners to the operator buttons
const operator  = document.querySelectorAll(".operator");
operator.forEach(currentBtn=>currentBtn.addEventListener('click', function(e){
  if(num1==''){
    sign = e.target.innerHTML;
    num1 = screen.value;
    screen.value = "";
  }else {
    sign = e.target.innerHTML;
    let num3 = num1;
    num1 = parseInt(screen.value)+parseInt(num3);
    num3='';

    screen.value = "";
  }
  
}))

//Adding event listeners to the buttons (0-9)
const buttons = document.querySelectorAll('.keypads')
buttons.forEach((currentBtn)=>currentBtn.addEventListener('click', displayNumbers))
 
function displayNumbers(e){
    if(screen.value.length<=10){
      screen.value += e.target.innerHTML
    }
  }

//Adding event listener t o the equal button
const equals = document.getElementById('equals');
equals.addEventListener('click', equalFunction);
function equalFunction(){
  let result;
  if(sign==''&& num1=='' && num2 ==''){
    
  }
  if (sign == '+'){
    num2 = screen.value;
    screen.value = parseInt(num1)+parseInt(num2);
  }else if(sign == '-'){
    num2 = screen.value;
    screen.value = parseInt(num1)-parseInt(num2);
  }else if(sign == 'x'){
    num2 = screen.value;
    screen.value = parseInt(num1)*parseInt(num2);
  }else if(sign == '/'){
    num2 = screen.value;
    screen.value = parseInt(num1)/parseInt(num2);
  }

  if(screen.value == NaN){
    clearMemory();
  }
  num2='';
  num1='';
}

//Adding event listener to the clear button
const clrAll = document.getElementById('CE');
clrAll.addEventListener('click', clearMemory);
function clearMemory(){
  screen.value = "";
  num1 = '';
  num2 = '';
  sign = '';
}

//Adding event listener to the dot button
const negative = document.getElementById('negative');
negative.addEventListener('click',negate);

function negate(){
  const regex = /\-/g;
  if(regex.test(screen.value) || regex.test(screen.value)){
    
  }else{
  screen.value = '-'+screen.value;
}}

//Adding event listener to the dot button
const dot = document.getElementById("dot");
dot.addEventListener('click', point);

function point(){
  const regex = /\./g;
  if(regex.test(screen.value) || regex.test(screen.value)){
    
  }else{
    screen.value = screen.value + '.';
  }
}
