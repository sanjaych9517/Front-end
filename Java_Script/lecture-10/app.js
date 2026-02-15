let btns = document.querySelectorAll("button");
// console.dir(btn);

for(btn of btns){
// btn.onclick = sayHellow;
// btn.onclick = sayName;

btn.addEventListener("click", sayHellow);
btn.addEventListener("click", sayName);



// btn.onmouseenter = function()
// {console.log("You enter the button");

// };
// console.dir(btn);
 }

// btn.onclick = function (){
//     console.log("button was clicked");
//     alert("button was clicked");
// };

function sayHellow(){
    alert("Hellow!");
}

function sayName(){
    alert("Apna college!");
}



