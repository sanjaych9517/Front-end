function hellow(){
    console.log("hellow");
}
hellow();
hellow();
hellow();
hellow();
hellow();
hellow();
hellow();
hellow();

// function printName(){
//     console.log("Sanjay kapoor ji welcome to my programming");
// }
// printName();


function print1to10() {
    for(let i =0; i<=7; i++){
        console.log(i);
    }

}
print1to10();

console.log("rool dice number");
// lecture 03
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
console.log(rand);
}
rollDice();

// lecture 04


function printInfo(name , age){
    console.log(`${name} age is ${age}`);
}
printInfo("Sanjay_Kapoor" , 21);
printInfo("rajat" , 25);
printInfo("ranjana singh" , );

// sum function
// console.log("sum function")
// function sum(a , b){
//     console.log(a + b);
// }
// sum(10,34);

// lecture 09
// concatination of string in an array

let str = ["hi", "hellow", "bye", "!"];

function concat(str){
    let result = "";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

// lecture 14
// function expression

const sum = function(a,b){
 return a +b;   
}
sum(2,3);
