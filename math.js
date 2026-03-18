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

// Example of a long, complex function
function processOrder(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
        if (item.quantity > 10) {
            console.log("Large quantity discount applied");
        }
    }
    if (order.coupon) {
        total -= order.coupon.discount;
    }
    console.log(`Total for ${order.customerName}: $${total}`);
    sendEmail(order.customerEmail, `Your order total is $${total}`);
}
// Refactored version of the processOrder function
function calculateTotal(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.price * item.quantity;
    }
    return total;
}

function applyDiscount(total, coupon) {
    if (coupon) {
        return total - coupon.discount;
    }
    return total;
}

function notifyCustomer(email, message) {
    sendEmail(email, message);
}

function processOrder(order) {
    let total = calculateTotal(order);
    total = applyDiscount(total, order.coupon);
    console.log(`Total for ${order.customerName}: $${total}`);
    notifyCustomer(order.customerEmail, `Your order total is $${total}`);
}


