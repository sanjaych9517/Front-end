//  Setting up for promises lecture 06

// const { version } = require("react");

// function savetoDB(data , success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;

//     if(internetSpeed > 4){
//         success();
//     } else{
//        failure();
//     }
// }

// savetoDB( "Sanjay Kappor",() => {
//     console.log(" success : Your Data was saved" );
//          savetoDB("Hellow World", ()=>{
//               console.log("Success2: your Data @ was Saved");
//                    savetoDB("last level", () =>{
//                     console.log("Success3: your Data @ was Saved");
//                    }, ()=>{
//                         console.log("Failure@ 3 : Your DAta @ was Not saved");
//                    }
//                 ) }, ()=>{
//                    console.log("Failure@ 2 : Your DAta @ was Not saved");
//              }
//             )},()=>{
//     console.log(" failure : Your Data was not saved due to lower connection" );
// });

 

function savetoDB(data) {
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed > 4){
        resolve("Success : @ Data Was sved");
    } else{
       reject("Failure : Data Was not Saved due to Week Connection");
    }

});  
}

// savetoDB("Sanjay Kapoor");

// Prommise then () & catch () methods lecture 08

 savetoDB("Sanjay Kapoor")
      .then(()=>{
    console.log("Promise was resolved");
    
  })
  .catch( () =>{
           console.log("Promise was rejected");
          
  });

//   Promise chainning improved version in lecture 09

savetoDB("Sanjay Kapoor")
      .then(()=>{
    console.log(" data 1 was saved Promise was resolved");  
    return savetoDB("Hellow World");
      })

      .then(()=>{
    console.log("Promise 2 was resolved"); 
    return savetoDB(" Kapoor ji");
     })    

     .then( () =>{
           console.log("Data 3 was saved ");
          
  })

    .catch( () =>{
           console.log(" some Promise was rejected");
          
  });


//   Lecture 10 Promise Result


savetoDB("Sanjay Kapoor")
      .then((result)=>{
    console.log(" data 1 was saved " );  
    console.log("Result of Promise", result);
    return savetoDB("Hellow World");
      })

      .then((result)=>{
    console.log("Data 2 was saves"); 
    console.log("Result of Promise", result);
    return savetoDB(" Kapoor ji");
     })    

     .then( (result) =>{
           console.log("Data 3 was saved ");
           console.log("Result of Promise", result);
          
  })

    .catch ((error) =>{
           console.log(" some Promise was rejected");
           console.log("Error of Promise", error);
          
  });