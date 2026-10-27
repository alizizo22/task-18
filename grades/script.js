let degree = prompt("Enter your degree:");
if (degree >= 85) {
console.log("Excellent");
    } else if (degree >= 75) {
console.log("Very Good");
    } else if (degree >= 65) {
console.log("Good");
    } else if (degree >= 50) {
console.log("Pass");
    } else {
console.log("Fail");
    }
if (degree === null || isNaN(degree) || degree < 0 || degree > 100) {
    console.log("Invalid degree");
} 
else 
    {
 degree = Number(degree);
 
}