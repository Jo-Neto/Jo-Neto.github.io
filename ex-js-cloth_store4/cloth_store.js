const inpArr = document.getElementsByClassName("inp");
const divTargetArr = document.getElementsByClassName("divTarget");

let currChoice;

let hasFilter = false;
let orderInst = [];
let orderCount = 0;

let doneDates = [];
let dateCount = 0;

function Order(name, date, price) {
    this.name = name;
    this.date = date;
    this.price = price;
    this.bill = 0;
    this.dateDiff = (((Date.now()) - 10800000 - Date.parse(this.date)) / 86400000).toFixed(0);

    if (this.dateDiff > 30)
        this.bill = (((this.dateDiff * 0.001) + 0.02) * (this.price)).toFixed(2);

}

function saveOnObj() {
    orderInst[orderCount++] = new Order(inpArr[0].value, inpArr[1].value, inpArr[2].value);
}

function showFee(whichInfo, filtering) {
    orderInstCopy = orderInst;

    for (let i = 0; i < divTargetArr.length; i++)
        while (divTargetArr[i].hasChildNodes())
            divTargetArr[i].removeChild(divTargetArr[i].lastChild);

    if (filtering) {
        orderInstCopy = orderInst.filter(filterFunc);
    }

    newP = document.createElement("p");
    (divTargetArr[0].appendChild(newP)).innerText = "Customer";
    if (!whichInfo) {
        newP = document.createElement("p");
        (divTargetArr[1].appendChild(newP)).innerText = "Due Date";
        newP = document.createElement("p");
        (divTargetArr[2].appendChild(newP)).innerText = "Order Price";
        newP = document.createElement("p");
        (divTargetArr[3].appendChild(newP)).innerText = "Fees";
        for (let i = 0; i < orderInstCopy.length; i++) {
            if ((divTargetArr[0].children.length) <= (orderInstCopy.length + 1)) {
                newP = document.createElement("p");
                (divTargetArr[0].appendChild(newP)).innerText = orderInstCopy[i].name;
                newP = document.createElement("p");
                (divTargetArr[1].appendChild(newP)).innerText = orderInstCopy[i].date;
                newP = document.createElement("p");
                (divTargetArr[2].appendChild(newP)).innerText = orderInstCopy[i].price;
                newP = document.createElement("p");
                (divTargetArr[3].appendChild(newP)).innerText = orderInstCopy[i].bill;
            }
        }
        currChoice = 0;
    } else if (whichInfo === 1) {
        newP = document.createElement("p");
        (divTargetArr[1].appendChild(newP)).innerText = "Customer Purchases";
        newP = document.createElement("p");
        (divTargetArr[2].appendChild(newP)).innerText = "Customer Fees";
        let isDiff = true;
        let howMuchPrice = 0;
        let howMuchFee = 0;
        let namesCount = 0;
        let doneNames = [];
        for (let i = 0; i < orderCount; i++) {
            for (let j = 0; j <= namesCount; j++) {
                if (orderInstCopy[i].name === doneNames[j]) {
                    isDiff = false;
                }
            }
            if (isDiff) {
                newP = document.createElement("p");
                (divTargetArr[0].appendChild(newP)).innerText = orderInstCopy[i].name;
                for (let j = 0; j < orderInstCopy.length; j++) {
                    if (orderInstCopy[i].name == orderInstCopy[j].name) {
                        howMuchPrice += Number(orderInstCopy[j].price);
                        howMuchFee += Number(orderInstCopy[j].bill);
                    }
                }
                newP = document.createElement("p");
                (divTargetArr[1].appendChild(newP)).innerText = howMuchPrice.toFixed(2);
                howMuchPrice = 0;
                newP = document.createElement("p");
                (divTargetArr[2].appendChild(newP)).innerText = howMuchFee.toFixed(2);
                howMuchFee = 0;
                doneNames[namesCount++] = orderInstCopy[i].name;
            }
            isDiff = true;
        }
        currChoice = 1;
    } else {
        (divTargetArr[0].appendChild(newP)).innerText = "Date";
        newP = document.createElement("p");
        (divTargetArr[1].appendChild(newP)).innerText = "Date Purchases";
        newP = document.createElement("p");
        (divTargetArr[2].appendChild(newP)).innerText = "Date Fees";
        let fuckedThing = agruparPor(orderInstCopy, 'dateDiff');
        let betterfuckedThing = Object.values(fuckedThing);
        let howMuchPrice = 0;
        let howMuchFee = 0;
        for (let i = 0; i < betterfuckedThing.length; i++) {
            newP = document.createElement("p");
            (divTargetArr[0].appendChild(newP)).innerText = betterfuckedThing[i][0].date;
            for (let j = 0; j < betterfuckedThing[i].length; j++) {
                howMuchPrice += Number(betterfuckedThing[i][j].price);
                howMuchFee += Number(betterfuckedThing[i][j].bill);
            }
            newP = document.createElement("p");
            (divTargetArr[1].appendChild(newP)).innerText = howMuchPrice.toFixed(2);
            newP = document.createElement("p");
            (divTargetArr[2].appendChild(newP)).innerText = howMuchFee.toFixed(2);
            howMuchPrice = 0;
            howMuchFee = 0;
        }
        currChoice = 2;
    }
}

function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, obj) {
        let key = obj[propriedade];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

function applyFilter() {
    showFee(currChoice, true);
}

function filterFunc(currElem) {
    let isGood = true;
    if (inpArr[3].value) {
        if (!(inpArr[3].value <= currElem.price))
            isGood = false;
    }
    if (inpArr[4].value) {
        if (!(inpArr[4].value >= currElem.price))
            isGood = false;
    }
    if (inpArr[5].value) {
        let dateDiffMin = (((Date.now()) - 10800000 - Date.parse(inpArr[5].value)) / 86400000).toFixed(0);
        if (!(dateDiffMin >= currElem.dateDiff))
            isGood = false;
    }
    if (inpArr[6].value) {
        let dateDiffMax = (((Date.now()) - 10800000 - Date.parse(inpArr[6].value)) / 86400000).toFixed(0);
        if (!(dateDiffMax <= currElem.dateDiff))
            isGood = false;
    }
    if (isGood)
        return currElem;
}