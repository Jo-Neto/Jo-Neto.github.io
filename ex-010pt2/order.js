function InneficientUglyFunction() {
    if (document.getElementById("toAdd").hasChildNodes()) {//could I declare to clean inside here?
        console.log("happening");
        let toClean = document.getElementById("toAdd")
        while (toClean.hasChildNodes()) {
            toClean.removeChild(toClean.firstChild);
        }
    }

    let foodsArr = document.getElementsByTagName("input");
    let i = 0;
    let sum = 0;
    let ChosenCountExt = 0;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0);
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;

    sum += Number(foodsArr[i].value);
    if (i === --((foodsArr.length))) {
        if (foodsArr[i].checked) {
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        } else {
            sum -= Number(foodsArr[i].value);
            addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, true, ChosenCountExt, sum.toFixed(2));
        }
        return;
    } else if (!foodsArr[i].checked && (i < foodsArr.length)) {
        sum -= Number(foodsArr[i].value);
    } else if (foodsArr[i].checked && (i < foodsArr.length)) {
        addElem(foodsArr[i].value, foodsArr[i].previousElementSibling.innerHTML, false, ChosenCountExt, 0); //could I pass no last argument?
        ChosenCountExt++;
    }
    else {
        console.log("I'll never happen but teacher wants an else"); //do nothing, never happens
    }
    i++;
}

function addElem(inpValue, tagLabel, isEnd, ChosenCountInt, ChosenSum) { //could I use ChosenCountInt internal somehow???
    //ChosenSum.toFixed(2).toString().replace(".", ",");
    let tempElem = document.createElement("p");
    document.getElementById("toAdd").appendChild(tempElem);
    let targetArr = document.getElementsByTagName("p");
    targetArr[ChosenCountInt].innerHTML = tagLabel + " - R$ " + inpValue.replace(".", ",");
    if (isEnd) {
        ++ChosenCountInt; //could I do this operation inside the function call?
        addElem(ChosenSum.toString(), "TOTAL", false, ChosenCountInt, 0)
    }
}











//AQUI ESTÁ O CÓDIGO ORIGINAL QUE FIZ PARA O EXERCICIO DE IF...ELSE

/*
function doStuff() {
    let foods = ['bread', 'meat', 'veg', 'chee'];
    let sum = 0;
    let k = 0;
    for (let i = 0; i < foods.length; i++) {
        let tempArr = document.getElementsByName(foods[i]);
        for (let j = 0; j < tempArr.length; j++) {
            if (tempArr[j].checked === true) {
                sum += Number(tempArr[j].value);
                let tempElem = document.createElement("p");
                document.getElementById("toAdd").appendChild(tempElem);
                document.getElementsByTagName("p")[k++].innerHTML = tempArr[j].previousElementSibling.innerHTML + " - R$ " + tempArr[j].value.toString().replace(".", ",");
            }
        }
    }
    let tempElem = document.createElement("p");
    document.getElementById("toAdd").appendChild(tempElem);
    document.getElementsByTagName("p")[k].innerHTML = "TOTAL: R$ " + (sum.toFixed(2)).toString().replace(".", ",");
}
*/