const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let messages = ["No", "Are you sure?😭", "Really sure?", "Come on chunky, say yes!", "Last chance!", "You know you want to! ❤️"];
let clickCount = 0;
let yesButtonSize = 1.2; // Initial size

noButton.addEventListener("click", function() {
    if (clickCount < messages.length - 1) {
        noButton.innerText = messages[clickCount];
        clickCount++;
    } else {
        noButton.innerText = "Too late! 🐽";
        noButton.disabled = true;
    }

    // Increase the "Yes" button size
    yesButtonSize += 0.3;
    yesButton.style.fontSize = `${yesButtonSize}rem`;
    yesButton.style.padding = `${yesButtonSize * 10}px ${yesButtonSize * 20}px`;
});