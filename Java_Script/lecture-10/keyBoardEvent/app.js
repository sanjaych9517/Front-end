// let btn = document.querySelector("button");

// btn = addEventListener("click", function(event){
//     console.log(event);
//     console.log("button was clicked");
// })

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code =", event.code); //ArrowUp, ArrowDown ArrowLeft Arrowright
    if(event.code == "KeyU"){
        console.log("charecter move up");
    }

    else if(event.code == "KeyD"){
        console.log("charecter move down");
    }

    else if(event.code == "KeyL"){
        console.log("charecter move left");
    }

    else if(event.code == "KeyR"){
        console.log("charecter move right");
    }
});