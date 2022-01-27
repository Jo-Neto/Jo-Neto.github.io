const inpBtnOpArr = document.getElementsByClassName("inpBtnOp");
const inpBtnNumArr = document.getElementsByClassName("inpBtnNum");

const resultField = document.getElementById("screen");
const inpShowArr = document.getElementsByClassName("inpShow");

class Calculadora {
    constructor() {
        this.operand1;
        this.operand2;
        this.operation = null;
        this.operandHandler = 0;
        this.ready = true;
    }
    setOperand1(_operand1) {
        this.operand1 = _operand1;
        this.operandHandler++;
    }
    setOperand2(_operand2) {
        this.operand2 = _operand2;
        this.operandHandler++;
    }
    setOperation(_operation) {
        if (_operation === 4) {
            for (let i = 0; i < inpShowArr.length; i++)
                inpShowArr[i].innerHTML = "";
            this.getResult();
        }
        else if (_operation === 3)
            this.clearCalculator();
        this.operation = _operation;
    }
getResult() {
    switch (this.operation) {
        case null:
            alert("escolha um operação");
            break;
        case 0: //add
            resultField.innerHTML = this.operand1 + this.operand2;
            break;
        case 1: //minus
            resultField.innerHTML = this.operand1 - this.operand2;
            break;
        case 2: //multiply
            resultField.innerHTML = this.operand1 * this.operand2;
            break;
        case 5: //divide
            resultField.innerHTML = this.operand1 / this.operand2;
            break;
    }
    this.ready = false;
}
clearCalculator() {
    for (let i = 0; i < inpShowArr.length; i++)
        inpShowArr[i].innerHTML = "";
    resultField.innerHTML = "";
    this.operand1 = 0;
    this.operand2 = 0;
    this.operation = null;
    this.operandHandler = 0;
    this.ready = true;
}
};

const usrCalc = new Calculadora();

for (let i = 0; i < inpBtnOpArr.length; i++)
    inpBtnOpArr[i].addEventListener("click", (() => {
        if (usrCalc.operandHandler === 2 && !usrCalc.ready &&  inpBtnOpArr[i].innerHTML !== "C") {
            alert("reset the calculator");
            return;
        }
        inpShowArr[1].innerHTML = inpBtnOpArr[i].innerHTML;
        usrCalc.setOperation(Number(inpBtnOpArr[i].value));
    }));

for (let i = 0; i < inpBtnNumArr.length; i++) {
    inpBtnNumArr[i].addEventListener("click", (() => {
        switch (usrCalc.operandHandler) {
            case 0:
                usrCalc.setOperand1(Number(inpBtnNumArr[i].innerHTML));
                inpShowArr[0].innerHTML = inpBtnNumArr[i].innerHTML;
                break;
            case 1:
                usrCalc.setOperand2(Number(inpBtnNumArr[i].innerHTML));
                inpShowArr[2].innerHTML = inpBtnNumArr[i].innerHTML;
                break;
            case 2:
                if (usrCalc.operandHandler === 2 && !usrCalc.ready) {
                    alert("reset the calculator");
                    break;
                }
                alert("calc cheia");
                break;
        }
    }));
}