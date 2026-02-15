let delhi ={
    latitude : "28.7041",
    longitude : "77.1025"
};
 const student = {
    name : "shradha",
    age : 23,
    marks : 94.4,
    city : "delhi"
 };

 let post = {
    username : "@kapoor_ji_1912",
    content : "This is has tag of my post",
    like : 50,
    reports : 2,
    tags : ["Apna college" , "sanjay kapoor"],

 };

//  const classInfo = {
//       aman : {
//         grade : "A+",
//         city : "delhi"
//       },

//       shradha : {
//         grade : "A",
//         city :" puna"
//       },

//       karan : {
//         grade : "0",
//         city : "mumbai"
//       }
//  };

const classInfo = [ 
     {
        name : "aman",
                grade : "A+",
               city : "delhi"
              },
        
              {
                name : "shradha",
                grade : "A",
                city :" puna"
              },
        
              {
                name :" karan ",
               grade : "0",
                city : "mumbai"
              }
];

// GUESSING GAME

 const max = prompt("enter the maxium number");
//  console.log(max);

 const random = Math.floor(Math.random()*max)+1;
 let guess = prompt("guess the number");
 while(true){
if(guess == "quit"){
    console.log("user quit");
    break;
}
if(guess == random){
    console.log("you are right! congrats random number was" , random);
    break;
}
else if(guess < random) {
    guess = prompt("your guess is to small. please try again")

}
else{
    guess = prompt("your guess is to large. please try again")
}
// else{
//    guess =  prompt("your guess was wrong. please try again")
// }
 }
