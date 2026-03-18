//reset git bisect to the correct commit and fix the bug in the add function
//function to add two numbers
function add(a, b) {
    return a + b;// bug fixed
}

//function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

//Travis test CLI git cherry-pick 1
//Travis test CLI git cherry-pick 2

//Travis fixed stuff
//Travis Overly Detailed Commit
//Travis The Well-Structured Commit again

//example of messy code
function a(x){if(x>0){return x*2}else{return x+2}}
//cleaned up code
function doubleOrAddTwo(value) {
    if (value > 0) {
        return value * 2;
    } else {
        return value + 2;
    }
}

//Example of Unclear Names 
function a(b, c) {
    return b * c;
}

let x = 10;
let y = 20;
let z = a(x, y);
//Clearer Names code
function multiplyNumbers(number1, number2) {
    return number1 * number2;
}

let firstValue = 10;
let secondValue = 20;
let result = multiplyNumbers(firstValue, secondValue);