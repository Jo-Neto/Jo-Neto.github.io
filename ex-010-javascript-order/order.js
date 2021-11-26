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
                document.getElementsByTagName("p")[k++].innerHTML = tempArr[j].previousElementSibling.innerHTML + " - R$ " + tempArr[j].value.toString().replace(".",",");
            }
        }
    }
    let tempElem = document.createElement("p");
    document.getElementById("toAdd").appendChild(tempElem);
    document.getElementsByTagName("p")[k].innerHTML = "TOTAL: R$ " + (sum.toFixed(2)).toString().replace(".",",");
}