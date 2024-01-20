let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let score = 0;
let Hscore = 0;

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("Game Started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];

    level++;
    score = level - 1;
    h2.innerText = `Level ${level}`;

    let radIdx = Math.floor(Math.random()*3);
    let radColor = btns[radIdx];
    let radBtn = document.querySelector(`.${radColor}`);

    // console.log(radIdx);
    // console.log(radColor);
    // console.log(radBtn);

    gameSeq.push(radColor);
    console.log(gameSeq);
    gameFlash(radBtn);
}

function checkSeq(idx) {
    // console.log("cur level : ", level);

    // let idx = level - 1;

    if(started == true) {
        if(userSeq[idx] === gameSeq[idx]) {
            // console.log("same value");
            if(userSeq.length === gameSeq.length){
                setTimeout(levelUp, 1000);
            }
        } else {
            if(Hscore == 0) {
                Hscore = score;
                h2.innerHTML = `Game Over! Your Score was <b>${score}</b> and the Highest Score was ${Hscore} <br> Press any key to start again.`;
    
                document.querySelector("body").style.backgroundColor = "red";
                setTimeout(function () {
                    document.querySelector("body").style.backgroundColor = "white";
                }, 250);
            } else if ((Hscore !== 0) && (score > Hscore)) {
                Hscore = score;
                h2.innerHTML = `Congratulations! Highest Score '<b>${Hscore}</b>' <br> Press any key to Restart the Game.`;
    
                document.querySelector("body").style.backgroundColor = "green";
                setTimeout(function () {
                    document.querySelector("body").style.backgroundColor = "white";
                }, 2000);
            } else {
                h2.innerHTML = `Game Over! Your Score was <b>${score}</b> and the Highest Score was ${Hscore} <br> Press any key to start again.`;
    
                document.querySelector("body").style.backgroundColor = "red";
                setTimeout(function () {
                    document.querySelector("body").style.backgroundColor = "white";
                }, 250);
    
            }
    
            reset();
        }
    }
}

function userPress() {
    // console.log(this);
    let btn = this;

    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);

    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".butn");

for(butn of allBtns) {
    butn.addEventListener("click", userPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}