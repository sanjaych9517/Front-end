h1=  document.querySelector("h1");

function changeColor(color , delay){
    return new Promise(( resolve, reject) => {
    setTimeout(() =>{
      let num = Math.floor(Math.random()*5)+1;
      if(num>3){
         reject("promise was rejected")
      }
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve(" color Changed");
         resolve();
    }, delay);
  });
}


 async function show(params) {
   try{
          await changeColor("violet" , 1000);
       await changeColor("indigo" , 1000);
        await changeColor("blue" , 1000);
         await changeColor("green" , 1000);
          await changeColor("yellow" , 1000);
           await changeColor("orange" , 1000);
            await changeColor("red" , 1000);
   }catch(err){
      console.log(err);
   }
  

      let a =5;
      console.log(a);
      console.log("new number = ", a+3 );
 }
// async function greet() {
//     // throw " 404 page not found"
//     return "hellow";
// }

// greet()
//  .then((result) =>{
//     console.log("Promise was resolves");
//     console.log("Result ;", result)
//  })

//  .catch((err) => {
//     console.log("Promise was rejected error :", err);
//  });

// let demo = async ()=>{
//    return 6;
// }


function getNum(){
   return new Promise((resolve , reject) =>{
      setTimeout(() => {
         let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
      }, 1000);
   })
}

  async  function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}