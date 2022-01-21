const btnArr = document.getElementsByTagName("button");
const inpArr = document.getElementsByTagName("input");
const url = 'localhost:81'

function searchDatabase(fparam, caller) {
    let value;
    value = inpArr[Number(caller)].value;
    fetch(`http://localhost:81/${fparam}?fparam=${value}`, { mode: 'no-cors' })
    .then(function (response) {
        console.log(response);
        const fuck = JSON.stringify(response);
        return fuck;
    })
    .then(function (myJson) {
        console.log(myJson);
        addToHtml(myJson);
    });
}

function addToHtml(obj) {
    let el = document.createElement("p");          
    let t = document.createTextNode(obj);
    el.appendChild(t); 
    document.body.appendChild(el); 
}