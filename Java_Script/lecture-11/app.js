// CALL STACk
function hellow () {
console.log("inside hellow function");
console.log("Hellow");
}

function demo () {
console.log("calling hellow function");
hellow();
}

console.log("calling demo function");
demo();
console.log("done calling of demo function")

// 02. Visualizing the call stack

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans= two() + one();
    console.log(ans);
}
three();

// 03. BreakPoint

// 04. srtTimeout function(){ };

setTimeout( function(){
    console.log("Apna college.....");
} , 2000);

console.log("helow....");

// 05 Call  Back hell

h1= document.querySelector("h1");

setTimeout( ()=>{
    h1.style.color = "red";
},2000);


setTimeout( ()=>{
    h1.style.color = "pink";
},1000);

setTimeout( ()=>{
    h1.style.color = "green";
},3000);

setTimeout( ()=>{
    h1.style.color = "yellow";
},4000);

setTimeout( ()=>{
    h1.style.color = "blue";
},4000);

setTimeout( ()=>{
    h1.style.color = "white";
},5000);


