function genChoice() {  //this function runs over the whole html and gets the user inputs
    let gotArr = document.getElementsByTagName("input");
    let choice;
    let isRand = false;
    let isLapsChosen = false;
    for (let i = 0; i < gotArr.length; i++) { //loop trough all inputs
        if (gotArr[i].checked) { //if input is chosen
            if (gotArr[i].getAttributeNode("id").value === "stFou") { //if chosen input is the type="number" input
                isLapsChosen = true;
                choice = Number(gotArr[++i].value); //get how many laps user chose
                i--;
            } else if (choice === undefined) {  //if user chose predefined lap number
                choice = Number(gotArr[i].value);
            } else if (choice !== undefined) { //if user chose to randomize car attributes
                isRand = Number(gotArr[i].value);
            }
        }
    }
    makeRace(Number(choice), isRand);  //passing the user inputs to the function
}

function makeRace(laps, isRandom) {  //this function will randomize stuff and then check for the winner
    let w1 = 0, w2 = 0, w3 = 0, s1 = 0, s2 = 0, s3 = 0;
    let mimi=100; mima=150; mami=200; mama=280; offmi=0.99; offma=0.92;
    if (!isRandom) { //cars are not random
        for (let i = 0; i < Number(laps); i++) {
            s1 = (RandInt(150, 230)) * 0.97;
            s2 = (RandInt(120, 260)) * 0.95;
            s3 = (RandInt(180, 220)) * 0.99;
            if (!(s1 === s2 || s1 === s3 || s2 === s3))  //checking a draw
                (s1 > s2) ? ((s1 > s3) ? w1++ : w3++) : ((s2 > s3) ? w2++ : w3++); //incrementing the winner of the lap
            else {
                makeRace(1, false); //in case of draw, call again with one lap
            }
        }
    } else { //cars are random
        for (let i = 0; i < Number(laps); i++) {
            s1 = (RandInt(RandInt(mimi,mima),RandInt(mami,mama))) * RandInt(offmi,offma);
            s2 = (RandInt(RandInt(mimi,mima),RandInt(mami,mama))) * RandInt(offmi,offma);
            s3 = (RandInt(RandInt(mimi,mima),RandInt(mami,mama))) * RandInt(offmi,offma);
            if (!(s1 === s2 || s1 === s3 || s2 === s3)) //checking a draw
                (s1 > s2) ? ((s1 > s3) ? w1++ : w3++) : ((s2 > s3) ? w2++ : w3++); //incrementing the winner of the lap
            else {
                makeRace(1, true); //in case of draw, call again with one lap
            }
        }
    }
    (w1 > w2) ? ((w1 > w3) ? addWin(1) : addWin(3)) : ((w2 > w3) ? addWin(2) : addWin(3)); //checking the winner and passing it to "addWin" function
}

function addWin(winId) { //this function prints the winner
    let myDiv = document.getElementById("toAdd");
    while (myDiv.hasChildNodes()) {
        myDiv.removeChild(myDiv.childNodes[0]);
    }
    tempP=document.createElement("p");
    tempP.innerHTML = "O carro "+winId+" é o vencedor";
    myDiv.appendChild(tempP);
}

function RandInt(min, max) { //function to randomize and int value, function has both extremeties included in the random chance
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}