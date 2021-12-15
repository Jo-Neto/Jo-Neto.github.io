const inpArr = document.getElementsByClassName("inp");
const divTargetArr = document.getElementsByClassName("divTarget");

let orderInst = [];
let orderCount = 0;

let doneNames = [];
let namesCount = 0;

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

function showFee(whichInfo) {
    for (let i = 0; i < 4; i++)
        while (divTargetArr[i].children.length > 1)
            divTargetArr[i].removeChild(divTargetArr[i].lastChild);

    if (!whichInfo) {
        for (let i = 0; i < orderInst.length; i++) {
            if ((divTargetArr[0].children.length) <= (orderInst.length + 1)) {
                newP = document.createElement("p");
                (divTargetArr[0].appendChild(newP)).innerText = orderInst[i].name;
                newP = document.createElement("p");
                (divTargetArr[1].appendChild(newP)).innerText = orderInst[i].date;
                newP = document.createElement("p");
                (divTargetArr[2].appendChild(newP)).innerText = orderInst[i].price;
                newP = document.createElement("p");
                (divTargetArr[3].appendChild(newP)).innerText = orderInst[i].bill;
            }
        }
    } else if (whichInfo === 1) {
        let isDiff = true;
        for (let i = 0; i < orderCount; i++) {
            for (let j = 0; j <= namesCount; j++) {
                if (orderInst[i].name === doneNames[j]) {
                    isDiff = false;
                }
            }
            if (isDiff) {
                tempH3 = document.createElement("p");
                (divTargetArr[0].appendChild(tempH3)).innerText = orderInst[i].name;
                for (let j = 0; j < orderInst.length; j++) {
                    if (orderInst[i].name == orderInst[j].name) {
                        tempH3 = document.createElement("p");
                        (divTargetArr[0].appendChild(tempH3)).innerText = "";
                        tempH3 = document.createElement("p");
                        (divTargetArr[1].appendChild(tempH3)).innerText = orderInst[j].date;
                        tempH3 = document.createElement("p");
                        (divTargetArr[2].appendChild(tempH3)).innerText = orderInst[j].price;
                        tempH3 = document.createElement("p");
                        (divTargetArr[3].appendChild(tempH3)).innerText = orderInst[j].bill;
                    }
                }
                divTargetArr[0].removeChild(divTargetArr[0].lastChild);
                doneNames[namesCount++] = orderInst[i].name;
            }
            isDiff = true;
        }
    } else {
        let fuckedThing = agruparPor(orderInst, 'dateDiff');
        let betterfuckedThing = Object.values(fuckedThing);
        for (let i = 0; i < betterfuckedThing.length; i++) {
            for (let j = 0; j < betterfuckedThing[i].length; j++) {
                tempH3 = document.createElement("p");
                (divTargetArr[0].appendChild(tempH3)).innerText = betterfuckedThing[i][j].name;
                tempH3 = document.createElement("p");
                (divTargetArr[1].appendChild(tempH3)).innerText = betterfuckedThing[i][j].date;
                tempH3 = document.createElement("p");
                (divTargetArr[2].appendChild(tempH3)).innerText = betterfuckedThing[i][j].price;
                tempH3 = document.createElement("p");
                (divTargetArr[3].appendChild(tempH3)).innerText = betterfuckedThing[i][j].bill;
            }
        }

        /*let isDiff = true;
        for (let i = 0; i < orderCount; i++) {
            for (let j = 0; j <= dateCount; j++) {
                if (orderInst.dateDiff === doneDates[j]) {
                    isDiff = false;
                }
            }
            if (isDiff) {
                for (let j = 0; j < orderInst.length; j++) {
                    if (orderInst[i].dateDiff == orderInst[j].dateDiff) {
                        tempH3 = document.createElement("p");
                        (divTargetArr[0].appendChild(tempH3)).innerText = orderInst[j].name;
                        tempH3 = document.createElement("p");
                        (divTargetArr[1].appendChild(tempH3)).innerText = orderInst[j].date;
                        tempH3 = document.createElement("p");
                        (divTargetArr[2].appendChild(tempH3)).innerText = orderInst[j].price;
                        tempH3 = document.createElement("p");
                        (divTargetArr[3].appendChild(tempH3)).innerText = orderInst[j].bill;
                    }
                }
                divTargetArr[0].removeChild(divTargetArr[0].lastChild);
                doneDates[dateCount++] = orderInst[i].dateDiff;
            }
            isDiff = true;
            
        }*/
    }
}
//I'm stupid, I hate copying code, I learn nothing... almost nothing...well... maybe I learned something
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