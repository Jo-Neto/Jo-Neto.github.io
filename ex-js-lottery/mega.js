const randedNumsDiv = document.getElementsByClassName("randed");
const randBtn = document.getElementsByTagName("button");

let nth = 0;
let clearID = 0;
let isFree = true;

function callback(toBePrinted) {
    if (!isFree)
        return;
    isFree = false;
    console.log(toBePrinted);
    randedNumsDiv[nth].innerHTML = randInt(1, 60);
    for (let i = 0; i < nth; i++)
        if (randedNumsDiv[i].innerHTML == randedNumsDiv[nth].innerHTML) {
            console.log("canceled due to"+randedNumsDiv[nth].innerHTML);
            callback();
        }
    if (nth === 5) {
        nth = 0;
        clearInterval(clearID);
        randBtn[0].removeAttribute("hidden");
        isFree = true;
        return;
    }
    nth++;
    isFree = true;
}

function randomize() {
    for (let i = 0; i < randedNumsDiv.length; i++)
        randedNumsDiv[i].innerHTML = "";
    randBtn[0].setAttribute("hidden", "");
    clearID = setInterval(function () { callback("hahahaha"); }, 1000);
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}