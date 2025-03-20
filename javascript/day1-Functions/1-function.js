//! function declaration 
function greet(){
    console.log("hello");
    console.log("good morning");
}
greet(); // function calling

//Function Expression
var test = function add(a,b){
    return a+b;
}

console.log(test(12,34));

//Arrow functions
const test1 = (a,b) => {
    var sum = a+b;
    return sum;
}
console.log(test1(11,54));

var test2 = x = (a,b) => a+b;
console.log(x(10,20))

// write a string to print uppercase and lowercase letter of given string
 var getData = (text) => {
    var upper = text.toUpperCase();
    var lower = text.toLowerCase();
    console.log(upper);
    console.log(lower);
    
    
 }
console.log(getData("javaScript"));



//callback
var data = function (callback){
    var res = callback();
    return res;
}
console.log(data(()=> "callbacked function"));


const teamlead =(callback) => callback();
var check = (callback1) => callback1();
var hi = () => "hello leader";
var checked = () => "plese check my code once";

result1 = teamlead(checked);

console.log(result1);
res = check(hi);
console.log(res);

