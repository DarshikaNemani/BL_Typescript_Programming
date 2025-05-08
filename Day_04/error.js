function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero not allowed");
    }
    else if (a % b !== 0) {
        throw new Error("".concat(a, " is not divisible by ").concat(b));
    }
    else {
        console.log("".concat(a, " is divisible by ").concat(b));
    }
}
try {
    divide(5, 0);
}
catch (e) {
    if (e instanceof Error) {
        console.log("Error:", e.message);
    }
    else {
        console.log("Unknown error");
    }
}
