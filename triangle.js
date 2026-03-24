function decideType(sides) {
    if (!Array.isArray(sides) || sides.length !== 3) {
        console.log("Invalid input! You should provide three numbers!");
        return "invalid";
    }

    const [a, b, c] = sides;

    // Check all integers
    if (![a, b, c].every(n => Number.isInteger(n))) {
        console.log("Invalid input! You should provide integers!");
        return "invalid";
    }

    // Check positive
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Invalid input! You should provide positive integers!");
        return "invalid";
    }

    // Triangle inequality
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("Not a triangle! the sum of two sides should be larger than the third!");
        return "invalid";
    }

    // Determine triangle type
    let shape = "";
    if (a === b && b === c) {
        shape = "equilateral";
    } else if (a === b || b === c || a === c) {
        shape = "isosceles";
    } else {
        shape = "scalene";
    }

    console.log("The shape of this triangle is " + shape + ".");
    return shape;
}

module.exports = { decideType };