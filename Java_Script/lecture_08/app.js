let arr = [1, 2, 3, 4, 5];

// function print(el){

//     console.log(el);

// }

// arr.forEach(print);

//or 

arr.forEach(function(el){
   
console.log(el);
} )

/// using map function 
// lecture 02

let num  = [1,2,3,4,5,6,7,8];
let double = num.map(function(el){
    return 2*el;
    
});
console.log(double);


// using filter function

let nums = [2,4,1,5,6,2,7,8,9,4];
 let even = nums.filter((el) =>
     (el%2==0));
 console.log(even);

 // lecture 05 
 // find maxium element in array using reduce() function
  let arrs =[0,2,3,4,5,3,4,7,8,31,20];

  let max = arrs.reduce((max,el) => {
    if(el>max){
        return el;
    }
    else{
        return max;
    }
    
  });
  console.log(max);


  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  //  lecture 07 
  // default parameter

  function sum(a, b=8){
    console.log(a+b);
  }
  sum(5);


  // spread concept in lexture 08
  let ar = [ 1,2,3,4,5,6,70,8,90];
  console.log(...ar);


  // spread function with array list in lecture 09

  let arr1 = [1,2,3,4,5];
  let newArr = [...arr];

  //  spread with object in lecture  10

  const data = {
      email : "sanjaych9517@gmail.com",
      password : "abcd",
  }

  let dataCopy = {...data, id:123}


  //lecture 13
//   desstructu`ring on object`

const student ={
  name : "karan",
  class: 9,
  age :14,
  subject : ["hindi", "english", "math", "science", "social science"],
  username : "karan@123",
  password : 1234,
};

const { username: user, password: pass} = student;

console.log(user);