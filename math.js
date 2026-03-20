//reset git bisect to the correct commit and fix the bug in the add function
/**
 * Sums two numeric values.
 * Used for testing purposes in the git bisect process.
 */
function add(a, b) {
    return a + b;// bug fixed
}

/**
 * Multiplies two numeric values.
 * Used for testing purposes in the git bisect process.
 */
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
// function processOrder(order) {
//     let total = 0;
//     for (let item of order.items) {
//         total += item.price * item.quantity;
//         if (item.quantity > 10) {
//             console.log("Large quantity discount applied");
//         }
//     }
//     if (order.coupon) {
//         total -= order.coupon.discount;
//     }
//     console.log(`Total for ${order.customerName}: $${total}`);
//     sendEmail(order.customerEmail, `Your order total is $${total}`);
// }
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

// function processOrder(order) {
//     let total = calculateTotal(order);
//     total = applyDiscount(total, order.coupon);
//     console.log(`Total for ${order.customerName}: $${total}`);
//     sendEmail(order.customerEmail, `Your order total is $${total}`);
// }

// Refactored version of the processOrder function with guard clauses & error handling
function processOrder(order) {
    // Guard clause: order must be provided
    if (!order || typeof order !== "object") {
        throw new Error("A valid order object is required.");
    }

    // Guard clause: items must exist
    if (!Array.isArray(order.items) || order.items.length === 0) {
        throw new Error("Order must include at least one item.");
    }

    // Guard clause: validate coupon format
    if (order.coupon && typeof order.coupon.discount !== "number") {
        throw new Error("Coupon must have a numeric discount value.");
    }

    // Guard clause: customer details
    if (!order.customerName || !order.customerEmail) {
        throw new Error("Customer name and email are required.");
    }

    // safe calculation
    let total = calculateTotal(order);
    total = applyDiscount(total, order.coupon);

    console.log(`Total for ${order.customerName}: $${total}`);

    // Try/catch for external servic
    try {
        sendEmail(order.customerEmail, `Your order total is $${total}`);
    } catch (err) {
        console.error("Failed to send email:", err.message);
    }

    return total;
}