console.log("Question - 1");
function sayHello(){
    console.log("helli world!");
}
sayHello();
function displayWarning(){
    console.log("Warning! System Overload!");
}
displayWarning();
function printStatus(){
    console.log("Syatem Status: Active");
}
printStatus();

function initilize(){
    console.log("Initilization Completed");
    shutDown();
}
function shutDown(){
    console.log("System Shutting Down...")
}
initilize();
function StartProcess(){
    console.log("Process Started");
    endProcess();
}
function endProcess(){
    console.log("Process ended.");
}
StartProcess();

function greetUser(name){
    console.log("Hello,",name)
}
greetUser("lucky");
greetUser("raj");

function calculateSum(a,b){
    var sum = a + b;
    console.log("value is ",sum )
}
calculateSum(10,20);
calculateSum(330,3232);
calculateSum(97,-90);

function countDown(num){
    console.log("Number :  ",num);
}
countDown(5);
countDown(4);
countDown(3);
countDown(2);
countDown(1);

function evenOdd(num){
    if (num%2==0){
        console.log("Even number");
    }
    else{
        console.log("odd number");
    }
}
var n=10;
var n1=-9;
evenOdd(n);
evenOdd(n1);

function beginSession(){
    console.log("Session Started");
    endSession();
}
function endSession(){
    console.log("Session ended.");
}
beginSession();
