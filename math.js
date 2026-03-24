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

/////////// Identifying & Fixing Code Smells
// Magic Numbers & Magic Strings
function calculateShipping(weight) {
    if (weight > 20) return weight * 1.5 + 10;
    return weight * 1.2 + 5;
}
// Long Function
function processUser(user) {
    console.log("Starting process");

    if (user.role === "admin") {
        user.permissions = ["ALL"];
    } else {
        user.permissions = ["READ"];
    }

    if (user.active) {
        console.log("User active");
    } else {
        console.log("User inactive");
    }

    user.lastLogin = new Date();

    sendEmail(user.email, "Your account was updated");

    console.log("Process finished");
}
// Duplicate Code
function getAdminMessage(name) {
    return "Welcome " + name + ", you have admin access.";
}

function getUserMessage(name) {
    return "Welcome " + name + ", you have user access.";
}
// Large Class (God Object)
class AppManager {
    constructor() {
        this.users = [];
        this.logs = [];
        this.settings = {};
    }

    addUser(user) { /* ... */ }
    removeUser(id) { /* ... */ }
    logError(err) { /* ... */ }
    updateSettings(newSettings) { /* ... */ }
    sendMarketingEmails() { /* ... */ }
}
// Deeply Nested Conditionals
function checkAccess(user) {
    if (user) {
        if (user.role) {
            if (user.active) {
                if (user.role === "admin") {
                    return true;
                }
            }
        }
    }
    return false;
}
// Commented-Out Code
function sum(a, b) {
    // let temp = a * 10;  // old logic
    return a + b;
}
// Inconsistent Naming
let n = 5;
let UserName = "john";
function calc(x) {
    return x * n;
}

// Refactored version of the above code smells
// Refactored Magic Numbers & Strings
const HEAVY_WEIGHT_LIMIT = 20;
const HEAVY_RATE = 1.5;
const NORMAL_RATE = 1.2;
const HEAVY_FEE = 10;
const NORMAL_FEE = 5;

function calculateShipping(weight) {
    return weight > HEAVY_WEIGHT_LIMIT
        ? weight * HEAVY_RATE + HEAVY_FEE
        : weight * NORMAL_RATE + NORMAL_FEE;
}
// Refactored Long Function
function setPermissions(user) {
    user.permissions = user.role === "admin" ? ["ALL"] : ["READ"];
}

function logActivity(user) {
    console.log(user.active ? "User active" : "User inactive");
}

function notifyUser(email) {
    sendEmail(email, "Your account was updated");
}

function processUser(user) {
    console.log("Starting process");
    setPermissions(user);
    logActivity(user);
    user.lastLogin = new Date();
    notifyUser(user.email);
    console.log("Process finished");
}
// Refactored Duplicate Code
function getMessage(name, role) {
    return `Welcome ${name}, you have ${role} access.`;
}
// Refactored Large Class (Split into Responsibilities)
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) { /* ... */ }
    removeUser(id) { /* ... */ }
}

class Logger {
    logError(err) { /* ... */ }
}

class SettingsManager {
    updateSettings(settings) { /* ... */ }
}
// Refactored Deeply Nested Conditionals
function checkAccess(user) {
    if (!user) return false;
    if (!user.active) return false;
    return user.role === "admin";
}
// Refactored Commented-Out Code
function sum(a, b) {
    return a + b;
}
// Refactored Inconsistent Naming
const multiplier = 5;
const username = "john";

function calculate(value) {
    return value * multiplier;
}