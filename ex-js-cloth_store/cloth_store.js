const inpArr = document.getElementsByClassName("inp");
const divTargetArr = document.getElementsByClassName("divTarget");

let orderCount = 0;
let orderInst = [];

function Order(name, date, price) {
    this.name = name;
    this.date = date;
    this.price = price;
    this.dateDiff = (((Date.now()) - 10800000 - Date.parse(this.date)) / 86400000);
}

function placeOnBot() {
    orderInst[orderCount++] = new Order(inpArr[0].value, inpArr[1].value, inpArr[2].value); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    for (let i = 0; i < inpArr.length; i++) {
        let newP = document.createElement("p");
        newP.innerText = inpArr[i].value;
        divTargetArr[i].appendChild(newP);
    }
}

function showFee() {
    let showArr = orderInst.map(calc);
    for (let i = 0; i < showArr.length; i++) {
        if ((showArr[i] !== 0) && (--divTargetArr[0].children.length <= showArr.length)) {
            let newEP = document.createElement("p");
            newEP.innerText = showArr[i].toFixed(2);
            divTargetArr[3].appendChild(newEP);
        }
        else if ((showArr[i] === 0) && (--divTargetArr[0].children.length <= showArr.length)) {
            let newEP = document.createElement("p");
            newEP.innerText = "No fees";
            divTargetArr[3].appendChild(newEP);
        }
    }
}

function calc(currVal) {
    while (divTargetArr[3].hasChildNodes())
        divTargetArr[3].removeChild(divTargetArr[3].firstChild);
    let tempH3 = document.createElement("h3");
    tempH3.innerText = "fees";
    divTargetArr[3].appendChild(tempH3);
    if (currVal.dateDiff > 31)
        return (((currVal.dateDiff * 0.001) + 0.02) * (currVal.price));
    else
        return 0;
}