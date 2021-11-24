function usrSend() {
    namNode = document.createElement("h3");
    //ratNode = document.createElement("div");
    opNode = document.createElement("p");
    
    namNode.appendChild(document.createTextNode(document.querySelector("input:first-of-type").value));
    //ratNode.appendChild(document.createTextNode(document.querySelector("#middle").value));
    opNode.appendChild(document.createTextNode(document.querySelector("#last").value));

    document.querySelector("div").appendChild(namNode);
    //ratNode.querySelector("div").appendChild(ratNode);
    document.querySelector("div").appendChild(opNode);
}

/*-----------
function usrClick() {

}

------------*/