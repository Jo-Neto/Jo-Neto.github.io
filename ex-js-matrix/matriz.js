let isOTurn = true;
let field = [[], [], []];

function addChk(loc, y, x) {
    const btnArr = document.getElementsByTagName("button");
    if (isOTurn) {
        btnArr[loc].innerHTML = "〇";
        isOTurn = false;
        field[Number(y)][Number(x)] = false;
    } else {
        btnArr[loc].innerHTML = "X";
        isOTurn = true;
        field[Number(y)][Number(x)] = true;
    }
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if ((field[0][j] === field[1][j]) && (field[1][j] === field[2][j]) && (field[0][j] !== undefined) && (field[1][j] !== undefined) && (field[2][j] !== undefined)) {
                if (field[0][j])
                    finish("X");
                else
                    finish("〇");
            }
            else if ((field[i][0] === field[i][1]) && (field[i][1] === field[i][2]) && (field[i][0] !== undefined) && (field[i][1] !== undefined) && (field[i][2] !== undefined)) {
                if (field[i][0])  
                    finish("X");
                else
                    finish("〇");
            }
            else if ((field[0][0] === field[1][1]) && (field[1][1] === field[2][2]) && (field[0][0] !== undefined) && (field[1][1] !== undefined) && (field[2][2] !== undefined)) {
                if (field[0][0])
                    finish("X");
                else
                    finish("〇");
            }
            else if ((field[0][2] === field[1][1]) && (field[1][1] === field[2][0]) && (field[0][2] !== undefined) && (field[1][1] !== undefined) && (field[2][0] !== undefined)) {
                if (field[0][2])
                    finish("X");
                else
                    finish("〇");
            }
        }
    }
}

function finish (which) {
    while (document.body.hasChildNodes())
        document.body.removeChild(document.body.firstChild);
    const newP = document.createElement("p");
    newP.innerText = which+" ganhou!";
    document.body.appendChild(newP);
}