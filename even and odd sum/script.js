let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}

console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);