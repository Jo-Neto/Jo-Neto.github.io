/*
ElementCreator (tag, attId, attVal, cont){
    let runCount;
    let hasChild;
    document.createElement(tag[runCount]);
    tag[runCount].setAttribute(attId, attVal);
    tag[runCount].innerHTML = cont;  
    document.body.appendChild(btn);  
}

Eu ia fazer uma coisa muita da hora, mas não ia dar tempo :(
*/

fillHeader ();
fillPartOne ();
fillDiv ();
fillArticle ();

function fillHeader (){
    document.querySelector("h1").innerHTML = "Animalistic Neto";
    document.querySelector("h2").innerHTML = "Pan troglodytes";
}

function fillPartOne (){
    document.querySelector("h2+p").innerHTML = "popular name: chimp/chimpanzee";
    document.querySelector("section>a:first-of-type").setAttribute("href", "https://www.britannica.com/animal/chimpanzee");
    document.querySelector("section>a:first-of-type").innerHTML = "Learn more about the chimp";
    document.querySelector("section>a:last-of-type").setAttribute("href", "https://www.worldwildlife.org/species/chimpanzee");
    document.querySelector("section>a:last-of-type").innerHTML = "Learn even more";
}

function fillDiv (){
    document.querySelector("ul>p").innerHTML = "Locations:";
    document.querySelector("li:first-of-type").innerHTML = "P. t. verus, Coastal southern-West Africa";
    document.querySelector("li:nth-of-type(2)").innerHTML = "P. t. ellioti, Nigeria-Cameroon, northern congo tropical rainforest";
    document.querySelector("li:nth-of-type(3)").innerHTML = "P. t. troglodytes, congo tropical rainforest, west of congo river, coastal congo tropical rainforest";
    document.querySelector("li:last-of-type").innerHTML = "P. t. schweinfurthii, Central Africa, north of congo river, congo tropical rainforest";
}

function fillArticle (){
    document.querySelector("article>p:first-of-type").innerHTML = "The chimpanzee (Pan troglodytes), also known as the common chimpanzee, or simply chimp, is a species of great ape native to the forest and savannah of tropical Africa.";
    document.querySelector("article>p:last-of-type").innerHTML = "Evidence from fossils and DNA sequencing shows that Pan is a sister taxon to the human lineage and is humans' closest living relative. Nearly all chimpanzee populations have been recorded using tools, modifying sticks, rocks, grass and leaves and using them for hunting and acquiring honey, termites, ants, nuts and water. The species has also been found creating sharpened sticks to spear small mammals. Chimpanzees use facial expressions, postures, and sounds to communicate with each other.";
    document.querySelector("footer>a").innerHTML = "Source";
    document.querySelector("footer>a").setAttribute("href", "https://en.wikipedia.org/wiki/Chimpanzee");
}

fillHeader ();
fillPartOne ();
fillDiv ();
fillArticle ();