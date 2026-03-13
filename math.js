//introduce a bug in the add function
//function to add two numbers
function add(a, b) {
    return a - b;// bug introduced
}

//function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));