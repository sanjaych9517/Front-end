const student = {
    name : "sanjay",
    age : 20,
    eng : 87,
    math : 90,
    phy : 85,
    getAvg(){
        console.log(this);
        avg = ( this.eng + this.math+ this.phy)/3;
        console.log(avg);
    }
}

// Try catch statement
//lecture 02

console.log("hellow");
console.log("hellow");
console.log("hellow");
try {
    consolw.log(a);
} catch{
    console.log("caught error not defined");
}

console.log("hellow2");
console.log("hellow2");
console.log("hellow2");


///arrow function
//lecture 03

const sum = (a,b) => {
    console.log( a+b);
};


const cube = (n) =>{
     return n*n*n;
};

const pow = (a,b) =>{
    return a**b;
};


// lecture 04 
//implicit return
const mul = (a,b) =>(
    a*b
);

//lecture 05
// setTimeout Function

console.log("hii kapoor ji");

setTimeout( () =>{
    console.log("Apna college");
} , 4000);

console.log("by their")