const handOptions = {
    "rock": "/assets/icon-rock.svg",
    "paper": "/assets/icon-paper.svg",
    "scissors": "/assets/icon-scissors.svg"
}

let score = 0

function pickHand(hand) {
    const handsSection = document.getElementById('hands');
    handsSection.style.display = "none";

    const pickedSection = document.getElementById('picked');
    pickedSection.style.display = "flex";

    document.getElementById("userPickedImage").src = handOptions[hand];

    const userpickedCircle = document.getElementById("userpickedCircle")
    userpickedCircle.classList.add(hand)

    computerHand(hand);
}

function computerHand(hand) {
    let hands = ["rock", "paper", "scissors"];
    let computerHand = hands[Math.floor(Math.random() * hands.length)];
    document.getElementById("computerPickedImage").src = handOptions[computerHand];
    const computerpicked = document.getElementById("computerpickedCircle")
    computerpicked.classList.add(computerHand)
    result(hand, computerHand)
}

function result(userHand, computerHand) {
    if (userHand == "paper" && computerHand == "scissors") {
        setResult("YOU LOSE!");
    }
    if (userHand == "rock" && computerHand == "paper") {
        setResult("YOU LOSE!");
    }
    if (userHand == "scissors" && computerHand == "rock") {
        setResult("YOU LOSE!");
    }
    if (userHand == "paper" && computerHand == "paper") {
        setResult("It's a tie!");
    }
    if (userHand == "rock" && computerHand == "rock") {
        setResult("It's a tie!");
    }
    if (userHand == "scissors" && computerHand == "scissors") {
        setResult("It's a tie!");
    }
    if (userHand == "scissors" && computerHand == "paper") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "paper" && computerHand == "rock") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "rock" && computerHand == "scissors") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
};



function setResult(result) {
    document.querySelector(".result h1").innerText = result;
}

function setScore(newScore) {
    score = newScore;
    document.querySelector(".score h1").innerText = newScore;
}

function restart() {
    let picked = document.getElementById("picked");
    picked.style.display = "none";

    let hands = document.getElementById("hands");
    hands.style.display = "flex";
}