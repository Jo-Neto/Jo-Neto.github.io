function play(usrChoice) {
    let choiceArr = document.querySelectorAll("div>input");
    let finArr = [0];
    let choiceQnt = 0;
    let i = 0;

    while (choiceArr[i] !== undefined) {
        choiceQnt++;
        i++;
    }

    let qnt = choiceQnt;
    switch (usrChoice) {
        case 1:
            for (let i = 0; i < qnt; i++) {
                finArr[i] = Number(choiceArr[--choiceQnt].value);
            }
        case 2:

            let tempCheck = 0;
            finArr[0] = Number(choiceArr[0].value);
            for (let i = 1; i < qnt; i++) {
                if (Number(choiceArr[0].value) > Number(choiceArr[i].value)) {
                    finArr[0] = Number(choiceArr[i].value);
                    tempCheck = i;
                    console.log("first att=" + finArr[0]);
                }
            }
            for (let i = 0; i < qnt; i++) {
                finArr[i+1] = finArr[i];
                for (let j = 0; j < qnt; j++) {
                    console.log("checking");
                    console.log("finArr=" + finArr[i]);
                    console.log("choice=" + choiceArr[j].value);
                    if (Number(choiceArr[i].value) > Number(choiceArr[j].value)) {
                        if (finArr[i] > Number(choiceArr[j].value)) {
                            if (finArr[i] >= finArr[i-1])
                                finArr[i] = Number(choiceArr[j].value);
                                console.log("new finArr " + i + " = " + finArr[i]);
                        }
                    } 
                   console.log("--------------------------------------------------------------");
                }
            }
    }
}

function addBtn() {
    let divEl = document.createElement("div");
    let btnEl = document.createElement("button");
    let pEl = document.createElement("p");
    let inpEl = document.createElement("input");
    let stSec = document.querySelector("section:first-of-type");
    let newDiv = stSec.appendChild(divEl);
    let newBtn = newDiv.appendChild(btnEl);
    newBtn.setAttribute("onclick", "addBtn()");
    let newP = newBtn.appendChild(pEl);
    newP.innerText = "+";
    oldDiv = newDiv.previousElementSibling;
    oldDiv.innerHTML = "";
    let oldInp = oldDiv.appendChild(inpEl);
    oldInp.setAttribute("type", "number");
}