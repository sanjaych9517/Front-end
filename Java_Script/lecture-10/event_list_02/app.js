

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside the box");
})

// using this keyword

let btn = document.querySelector("button");

let p = document.querySelector("p");

let h1 = document.querySelector("h1");

let h3 = document.querySelector("h3");



function changeColour(){
     console.dir(this );
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "red";
}


btn.addEventListener("click", changeColour);

p.addEventListener("click", changeColour);

h1.addEventListener("click", changeColour);

h3.addEventListener("click", changeColour);
