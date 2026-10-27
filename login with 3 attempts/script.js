let attempts = 3;
let isLogged = false;

while (attempts > 0) {
    let password = prompt("Enter password (attempts left: " + attempts + "):");
    
    if (password === "js2026") {
        console.log("Welcome");
        isLogged = true;
        break;
    } else {
        attempts--;
    }
}

if (!isLogged) {
    console.log("Account locked");
}