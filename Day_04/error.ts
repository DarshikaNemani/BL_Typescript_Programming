function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error("Division by zero not allowed");
    } else if (a % b !== 0) {
        throw new Error(`${a} is not divisible by ${b}`);
    } else {
        console.log(`${a} is divisible by ${b}`);
    }
}

try {
    divide(5, 0);
} catch (e) {
    if (e instanceof Error) {
        console.log("Error:", e.message);
    } else {
        console.log("Unknown error");
    }
}