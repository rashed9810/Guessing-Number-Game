const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnCheckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");



// Generate random number from 1 to 20
let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// console.log(secretNum);

// Event to check the random number
btnCheckEl.addEventListener("click", () => {
    const guess = Number(inputNumEl.value);

    // Check if input is empty
    if (!guess) {
        msgEl.textContent = "Please Enter a Number :(";
        return; // Exit the function if input is empty
    }

    // Check if the guess is correct
    if (guess === secretNum) {
        // Success
        hideNumEl.textContent = secretNum;
        hideNumEl.style.width = "50%";
        hideNumEl.style.transition = "all 0.5s ease-in";
        containerEl.style.backgroundColor = "#e0d8d3";
        msgEl.textContent = "Congratulation You've won the Game :)";

        // Update high score
        if (score > highScore) {
            highScore = score;
            highScoreEl.textContent = highScore;
        }
    } else if (guess !== secretNum) {
        if (score > 1) {
            score--;
            scoreEl.textContent = score;
            msgEl.textContent = guess > secretNum ? "Too High" : "Too Low";
        } else {
            msgEl.textContent = "You've Lost the Game";
            containerEl.style.backgroundColor = "#fff";
            scoreEl.textContent = 0;
        }
    }
});

// Event to reset the game
btnPlayEl.addEventListener("click", () => {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20 + 1);
    msgEl.textContent = "Start guessing...";
    // chances = 3; // Reset chances

    scoreEl.textContent = score;
    // chancesEl.textContent = `Remaining Chances: ${chances}`; // Display initial chances
    inputNumEl.value = "";
    hideNumEl.textContent = "?";
    hideNumEl.style.width = "30rem";
    containerEl.style.backgroundColor = "#222";
});



/*
Note: This is implementation problem so you have to solve this manually::-

- User will get 3 chances to guess. You have to show the remaining guessing number in the client side.
- During 3 chances if user can guess the correct number a pop up will be shown to congratulate otherwise  show a pop up message to restart the game.
- When user will restart the game all the values will be cleared and a new random number will be selected.
- User can play the game */


/*
const chancesEl = document.querySelector(".chances"); // New element for displaying remaining chances
let chances = 3; // Initial chances


function showPopup(message) {
   
}
        showPopup("Congratulations! You guessed the correct number.");

        if (chances > 1) {
            chances--;
            chancesEl.textContent = `Remaining Chances: ${chances}`; // Display remaining chances
            score--;
            scoreEl.textContent = score;
            msgEl.textContent = guess > secretNum ? "Too High" : "Too Low";
        } else {
            msgEl.textContent = "You've Lost the Game";
            containerEl.style.backgroundColor = "#fff";
            scoreEl.textContent = 0;
            showPopup("Sorry, you've run out of chances. Game Over!");
        }
    };
*/

