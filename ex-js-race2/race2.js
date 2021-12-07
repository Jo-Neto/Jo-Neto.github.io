let owner = []; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< could this be const <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let playerCount = 0;                
let carAmount = 0;                      

const poolQnt = 5;
const playerQnt = 3;
const carMaxQnt = 3;
const makeRaceArr = document.getElementsByClassName("lastBtn");

const car = {  //car object why not Car[]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    name: "", //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
    vMin: { min: 0, max: 0 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMax: { min: 0, max: 0 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    offset: { min: 0, max: 0 } //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
} //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------

let indCar = Object.create(car); //instance of "car"                

indCar[carAmount] = { //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    name: "Super Sport", //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMin: { min: 140, max: 160 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMax: { min: 210, max: 230 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    offset: { min: 100, max: 175 } //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
}; //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
carAmount++;//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
indCar[carAmount] = { //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
    name: 'Sport', //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMin: { min: 125, max: 145 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMax: { min: 195, max: 215 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    offset: { min: 200, max: 300 } //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
}; //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
carAmount++;//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
indCar[carAmount] = { //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
    name: 'Popular', //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMin: { min: 110, max: 130 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    vMax: { min: 180, max: 200 }, //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    offset: { min: 300, max: 400 } //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
}; //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
carAmount++;//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
//---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------
const person = {  //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADOOBJETO INICIALIZADO----------
    name: "",   //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------
    car: Object.create(car)  //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO 
}; //---------OBJETO INICIALIZADO-------OBJETO INICIALIZADO------OBJETO INICIALIZADO-----OBJETO INICIALIZADO-----OBJETO INICIALIZADO----------OBJETO INICIALIZADO----------

function doChoice(name, isPool, isDefined, chosenCarIndex) {                  //called when player makes a choice
    let tempBtn = document.getElementsByClassName(name);                       //get HTML elements of the player who made the choice
    for (let i = tempBtn.length; i !== 0; i = i)                         //remove everything
        if (tempBtn[--i].tagName == "BUTTON")
            tempBtn[i].remove();
    if (!isDefined) {                                  //this runs on first choice of any player
        !isPool ? getCar(name, false, tempBtn[0].appendChild(document.createElement("p"))) : getCar(name, true, tempBtn[0]) //(player wants pool)?
    } else {                                                             //this block runs if player previously wanted to choose cars, 
        for (let i = 0; i < playerCount; i++) {                      //iterates trough all players
            if (owner[i].name === name) {                                     //found the right "person" object
                owner[i].car = indCar[chosenCarIndex];                     //player car = chosen car
                tempBtn[0].appendChild(document.createElement("p")).innerText = owner[i].car.name; //display car on HTML
            }
        }
    }
    if (owner[(playerQnt-1)].car.name !== undefined) //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        for (let i = 0; i < makeRaceArr.length; i++)   //gives error but works, no alternative I guess
            makeRaceArr[i].removeAttribute("hidden");
}

function getCar(caller, isPool, tempElem) {                                  //this function randomizes the cars
    owner[playerCount] = Object.create(person);                             //creates person object
    owner[playerCount].name = caller;
    let whichRandCar = 0;
    ((Math.random()) <= 0.05) ? whichRandCar = 0 : (((Math.random()) <= 0.40) ? whichRandCar = 1 : whichRandCar = 2)//attribute car to person by random chance, default to "super sport"
    if (!isPool) {                              //if player randomized only one car
        owner[playerCount].car = indCar[whichRandCar];
        tempElem.innerText = owner[playerCount].car.name;
    } else {                                                           // if player wants to choose from 5 cars
        for (let i = 0; i < poolQnt; i++) {                                 //creates 5 cars for the player, and add a button for each car
            ((Math.random()) <= 0.05) ? whichRandCar = 0 : (((Math.random()) <= 0.40) ? whichRandCar = 1 : whichRandCar = 2) //randomize car
            let tempP = tempElem.appendChild(document.createElement("button"));
            tempP.innerText = indCar[whichRandCar].name;
            tempP.setAttribute("class", "poolP " + caller);
            tempP.setAttribute("onclick", "doChoice('" + caller + "',false, true, " + whichRandCar + ")");
        }
    }
    playerCount++;
}

function incRandInt(min, max) {           //choose a random int number, inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRace(laps = document.getElementById("lapsField").value) {      //this function will randomize stuff and then check for the winner                                 
    laps = Number(laps);
    if (!laps)              //0 laps, nobody wins
        addWin(whichWon, true)                               
    let w = [0, 0, 0];
    let s = [0, 0, 0];
    for (let i = 1; i <= laps; i++) {
        let j=0;
        while (j < playerCount) {
            s[j] = (incRandInt(incRandInt(owner[j].car.vMin.min, owner[j].car.vMin.max), incRandInt(owner[j].car.vMax.min, owner[j].car.vMax.max))) * (1-((incRandInt(owner[j].car.offset.min, owner[j].car.offset.max))*0.0001));//randomize car values
            j++;
        }
        if (!(s[0] === s[1] || s[0] === s[2] || s[1] === s[2]))                     //checking a draw
            (s[0] > s[1]) ? ((s[0] > s[2]) ? w[0]++ : w[2]++) : ((s[1] > s[2]) ? w[1]++ : w[2]++);       //incrementing the winner of the lap
        else if ((i !== laps))                                //in case of draw, re-do lap                        
            i--;                        
        else if (i === laps)                       //in case of draw and last lap call again with one lap
            makeRace(1);
    }
    (w[0] > w[1]) ? ((w[0] > w[2]) ? addWin(0, false) : addWin(2, false)) : ((w[1] > w[2]) ? addWin(1, false) : addWin(2, false)); //checking the winner and passing it to "addWin" function
}

function addWin(whichWon, isNoLaps) {                                     //generate winner on HTML
    const winP = document.getElementById("genRaceDiv");
    if (!isNoLaps) 
        winP.innerText = owner[whichWon].name+" ganhou";
    else 
        winP.innerText = "Ninguém correu, ninguém ganhou";
    winP.removeAttribute("hidden");
}