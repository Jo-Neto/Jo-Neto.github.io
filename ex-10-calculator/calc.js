function makeCalc(calcType) {
    document.getElementById("screen").innerHTML = "";
    let usrChoice = document.querySelectorAll(".inpShow");
    let res;
    let textNode = document.createElement("p");
    switch (calcType) {
        case 0:
            res= Number(usrChoice[0].value) + Number(usrChoice[1].value);
            break;
        case 1:
            res= Number(usrChoice[0].value) - Number(usrChoice[1].value);
            break;
        case 2:
            res= Number(usrChoice[0].value) * Number(usrChoice[1].value);
            break;
        case 3:
            res= Number(usrChoice[0].value) / Number(usrChoice[1].value);
            break;
    }
    textNode.innerText = res;
    document.getElementById("screen").appendChild(textNode);
}