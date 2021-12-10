let owner = []; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< could this be const 
let poolCarArr = [];
let playerCount = 0;
laps = 0;

const poolQnt = 5;
const playerQnt = 3;

const bElem = document.createElement("button");
const makeRaceArr = document.getElementsByClassName("lastBtn");
const winDiv = document.getElementById("genRaceDiv");
const toHide = document.getElementsByClassName("toHide")

const pElem = [];
for (let i = 0; i < playerQnt; i++) {
    pElem[i] = document.createElement("p");
}

const person = {
    name: "",
    exp: 0,
    lvl: 1,
    car: {}
};

let w = [0, 0, 0];      //array to save won laps for each player
let s = [0, 0, 0];      //array to save lap speed for each player

function DefineCar(chosenCarIndex) {
    if (chosenCarIndex == 0) {
        this.name = "Super Sport";
        this.vMin = incRandInt(140, 160);
        this.vMax = incRandInt(210, 230);
        this.offset = incRandInt(100, 175);
    }
    if (chosenCarIndex == 1) {
        this.name = 'Sport';
        this.vMin = incRandInt(125, 145);
        this.vMax = incRandInt(195, 215);
        this.offset = incRandInt(200, 300);
    }
    if (chosenCarIndex == 2) {
        this.name = 'Popular';
        this.vMin = incRandInt(110, 130);
        this.vMax = incRandInt(180, 200);
        this.offset = incRandInt(300, 400);
    }
}

function doChoice(name, isPool, isDefined, chosenCarIndex) {         //called when player makes a choice
    let tempBtn = document.getElementsByClassName(name);         //get HTML elements of the player who made the choice
    for (let i = tempBtn.length; i !== 0; i = i)         //clear HTML element of the player after choice
        if (tempBtn[--i].tagName == "BUTTON")
            tempBtn[i].setAttribute("hidden", "");
    if (!isDefined) {                                  //this runs on first choice of any player
        !isPool ? getCar(name, false, tempBtn[0].appendChild(document.createElement("p"))) : getCar(name, true, tempBtn[0])      //(player wants pool)?
    } else {                                           //this block runs if player previously wanted to choose cars, 
        for (let i = 0; i < playerCount; i++) {       //iterates trough all players
            if (owner[i].name === name) {            //found the right "person" object
                owner[i].car = poolCarArr[chosenCarIndex]; //====================================================================================//player car = chosen car
                tempBtn[0].appendChild(document.createElement("p")).innerText = owner[i].car.name;       //display car on 
            }
        }
    }
    if (typeof (owner[(playerQnt - 1)].car.name) !== undefined) {      //show buttons when all players have chosen
        for (let i = 0; i < makeRaceArr.length; i++)
            makeRaceArr[i].removeAttribute("hidden");
    }
}

function getCar(caller, isPool, tempElem) {       //this function randomizes the cars
    owner[playerCount] = Object.create(person);      //creates person object
    owner[playerCount].name = caller;
    let whichRandCar = 0;
    ((Math.random()) <= 0.05) ? whichRandCar = 0 : (((Math.random()) <= 0.40) ? whichRandCar = 1 : whichRandCar = 2)//attribute car to person by random chance, default to "super sport"
    if (!isPool) {        //if player randomized only one car
        owner[playerCount].car = new DefineCar(whichRandCar); //player car = chosen car
        tempElem.innerText = owner[playerCount].car.name;
    } else {                                                           // if player wants to choose from 5 cars
        for (let i = 0; i < poolQnt; i++) {                                 //creates 5 cars for the player, and add a button for each car
            ((Math.random()) <= 0.05) ? whichRandCar = 0 : (((Math.random()) <= 0.40) ? whichRandCar = 1 : whichRandCar = 2) //randomize car
            poolCarArr[i] = new DefineCar(whichRandCar);
            let tempP = tempElem.appendChild(document.createElement("button"));
            tempP.innerText = poolCarArr[i].name;
            tempP.setAttribute("class", "poolP " + caller);
            tempP.setAttribute("onclick", "doChoice('" + caller + "',false, true, " + i + ")");
        }
    }
    playerCount++;      //go next player
}

function incRandInt(min, max) {      //choose a random int number, inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRace(laps = document.getElementById("lapsField").value) {      //this function will randomize stuff and then check for the winner                                 
    if (!laps)              //0 laps, nobody wins
        addWin(whichWon, true);
    let w = [0, 0, 0];      //array to save won laps for each player
    for (let i = 1; i <= laps; i++) {     //iterates trough all laps
        let s = [0, 0, 0];      //array to save lap speed for each player
        s.forEach((currVal, currIndex) => {
            currVal = (Number(incRandInt((owner[currIndex].car.vMin * Number(owner[currIndex].lvl) * 1.01), owner[currIndex].car.vMax * Number(owner[currIndex].lvl) * 1.01)) * (1 - (Number(owner[currIndex].car.offset) * 0.0001)));
            s[currIndex] = currVal;
        });
        if (!(s[0] == s[1] || s[0] == s[2] || s[1] == s[2]))        //if no draw 
            (s[0] > s[1]) ? ((s[0] > s[2]) ? w[0]++ : w[2]++) : ((s[1] > s[2]) ? w[1]++ : w[2]++);      //increment the winner of the lap
        else       //in case of draw
            i--;         //do the lap again
    }
    if (!(w[0] == w[1] || w[0] == w[2] || w[1] == w[2])) //if race has draw
        makeRace(1);        //keep racing

    if (w[0] > w[1]) {
        if (w[0] > w[2]) {
            if (w[1] > w[2])            //0,1,2
                addWin(owner[0], owner[1], owner[2], false);
            else                        //0,2,1
                addWin(owner[0], owner[2], owner[1], false);
        }
        else { //2,0,1
            addWin(owner[2], owner[0], owner[1], false);
        }
    } else if (w[1] > w[2]) {
        if (w[2] > w[0])   //1,2,0
            addWin(owner[1], owner[2], owner[0], false);
        else   //1,0,2
            addWin(owner[1], owner[0], owner[2], false);
    } else { //2,1,0
        addWin(owner[2], owner[1], owner[0], false);
    }
}

function addWin(first, second, third, isNoLaps) {             //generate winner on HTML
    const winDiv = document.getElementById("genRaceDiv");
    if (laps <= 10) {
        first.exp += 200;
        second.exp += 120;
        third.exp += 50;
    } else if (laps <= 70) {
        first.exp += 220;
        second.exp += 130;
        third.exp += 75;
    } else {
        first.exp += 250;
        second.exp += 150;
        third.exp += 90;
    }

    console.log(first);
    console.log(second);
    console.log(third);

    if (!isNoLaps) {
        for (let i = 0; i < playerCount; i++) {
            if (owner[i].exp >= 450 && owner[i].lvl < 10) {
                owner[i].lvl += 1;
                owner[i].exp -= 450;
            }
        }
    } else
        winDiv.innerText = "Ninguém correu, ninguém ganhou";
    winDiv.removeAttribute("hidden");
    pElem[0].innerText = first.name + " ganhou e esta no level " + first.lvl + " com " + first.exp + " de XP";
    pElem[1].innerText = second.name + " ficou em segundo e esta no level " + second.lvl + " com " + second.exp + " de XP";
    pElem[2].innerText = third.name + " ficou em terceiro e esta no level " + third.lvl + " com " + third.exp + " de XP";
    bElem.innerText = "proxima corrida";
    winDiv.appendChild(pElem[0]);
    winDiv.appendChild(pElem[1]);
    winDiv.appendChild(pElem[2]);
    winDiv.appendChild(bElem);
    for (let i = 0; i < toHide.length; i++) {
        console.log("happening")
        toHide[i].setAttribute("hidden", "");
    }
    bElem.setAttribute("onclick", "showButtons()");
}

function showButtons() {
    console.log(winDiv);
    console.log("----------------------------------------------------");
    console.log(makeRaceArr);
    for (let i = 0; i < winDiv.length; i++)
        winDiv[i].removeAttribute("hidden");
    for (let i = 0; i < makeRaceArr.length; i++)
        makeRaceArr[i].removeAttribute("hidden");
}