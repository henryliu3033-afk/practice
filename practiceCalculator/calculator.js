const display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value =" ";
}
function calculate() {
try{
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error";    
}if(display.value =="520")
alert("I love you too!"
);else if(display.value =="426")
    display.value = "死大陆仔";

}
