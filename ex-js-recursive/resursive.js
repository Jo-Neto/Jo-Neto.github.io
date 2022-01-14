let result = 1;
let j=0;
let i=0;

function factorial(num) {
    if (num <= 1) {
        return result;
    }
    return num*factorial(--num);
}

console.log(factorial(5));

const myMatrix = [["1,1", "1,2", "1,3"], ["2,1", "2,2", "2,3"], ["3,1", "3,2", "3,3"]];

showMat(0);

function showMat(current1stDimension) {
    if (current1stDimension === myMatrix.length) {
        console.log("returning");
        return null;
    }
    if (j === myMatrix[i].length) {
        j = 0;
        i++;
        console.log(myMatrix[i][j]);
        return showMat(++current1stDimension);
    }
    console.log(myMatrix[i][j]);
    j++;
    return showMat(current1stDimension);
}