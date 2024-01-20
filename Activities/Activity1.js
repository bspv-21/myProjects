let butn = document.querySelector("button");

butn.addEventListener("click", function (){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    div.style.color = "white";

    console.log("Color Updated..!");
});

function getRandomColor (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}



let btn = document.querySelector(".bn");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);



let inp = document.querySelector("input");
let batn = document.querySelector(".batn");

inp.addEventListener("keydown", function (event) {
    console.log(event);

    if(event.code == "ArrowUp" | event.code == "KeyU") {
        if(event.code == "ArrowUp"){
            console.log("character moves forward");
        } else {
            console.log("character moves Upward");
        }
    } else if (event.code == "ArrowDown" | event.code == "KeyD") {
        if(event.code == "ArrowDown") {
            console.log("character moves backward");
        } else {
            console.log("character moves downward");
        }
    } else if (event.code == "ArrowLeft" | event.code == "KeyL") {
        console.log("character moves Left");
    } else if (event.code == "ArrowRight" | event.code == "KeyR") {
        console.log("character moves Right");
    } else {
        console.log("key : ", event.key);
        console.log("code : ", event.code);
        console.log("keyCode : ", event.keyCode);
        console.log("key was pressed");
    }
});



let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = this.elements[0];// let user = form.elements[0];
    let pass = form.elements[1];// let pass = this.elements[1];

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
    console.log(user.value);
    console.log(pass.value);
});

user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value = ", this.value);
});

user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value = ", this.value);
});




let ip = document.querySelector("#ip");
let para = document.querySelector(".para");

ip.addEventListener("input", function () {
    console.log(ip.value);
    para.innerText = this.value;
});



let mout = document.querySelector(".mout");
mout.addEventListener("mouseout", function(){
    console.log("Hi Bspv! ,this is a 'mouseout' event.");
});

user.addEventListener("keypress", () => {
    console.log("Hi Bspv! ,this is a 'keypress' event.");
});


this.addEventListener("scroll", () => {
    console.log("Hi Bspv! ,this is a 'scroll' event.");
    console.log("Hi Bspv! ,you have scrolled the page.");
});


