//============== QUESTAO 1 =====================
function mult(factor1) {
    return function innerMult(factor2) {
        return factor1 * factor2;
    }
}

const doubler = mult(2);
const quintupler = mult(5);

console.log(doubler(5));
console.log(doubler(100));

console.log(quintupler(10));
console.log(quintupler(1000));

//============== QUESTAO 2 =====================
const toChangeDiv = document.getElementsByTagName("p");
let size = 19;

const changeSize = (function () {
    return {
        increaseSize: function () {
            size++;
            for (let i = 0; i < toChangeDiv.length; i++)
                toChangeDiv[i].style.fontSize = size + 'px';
        },
        decreaseSize: function () {
            size--;
            for (let i = 0; i < toChangeDiv.length; i++)
                toChangeDiv[i].style.fontSize = size + 'px';
        }
    };
})();

function button(choice) {
    if (choice)
        changeSize.increaseSize()
    else
        changeSize.decreaseSize()
}