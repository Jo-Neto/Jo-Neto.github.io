const expDiv = document.querySelector("div");
const genP = document.createElement("p");
let ite=11;

function genBoard() {
    addP(true, true);
    let i = 0;
    let j = 0;
    let count = 0;
    inpValue = Number(document.querySelector("input").value);
    while (i < Number(inpValue)) {
        if(addP(j, ite)) {
            i++;
            j++;
        }
        else {
            j=0;
            count++;
        }
    }
    count===1 ? genP.innerText = "o quadro foi apagado "+count+" vez" : genP.innerText = "o quadro foi apagado "+count+" vezes";
    document.body.appendChild(genP);
}

function addP(j, ite) {
    if (j < ite) {
        const expDiv = document.querySelector("div");    //WTFFFFFFFFFFFFFFFFFF?????????????????????????????? WHY DO I NEED THIS SHIT HERE?????
        const genP = document.createElement("p");  //WTFFFFFFFFFFFFFFFFFF?????????????????????????????? WHY DO I NEED THIS SHIT HERE?????
        genP.innerHTML = "Eu não vou lutar contra o futuro";         //WTFFFFFFFFFFFFFFFFFF?????????????????????????????? WHY DO I NEED THIS SHIT HERE?????
        expDiv.appendChild(genP);
        return true;
    } else if (j === ite) {
        while (expDiv.hasChildNodes()) {  //why the fuck it runs twice on first iteration LOL
            expDiv.removeChild(expDiv.firstChild);
        }
        return false;
        
    }
}