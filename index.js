const handOptions = {
    "rock": "/assets/icon-rock.svg",
    "paper": "/assets/icon-paper.svg",
    "scissors": "/assets/icon-scissors.svg"
}

function pickHand(hand) {
    const hands = document.getElementById('hands');
    hands.style.display = "none";

    const pickedSection = document.getElementById('picked');
    pickedSection.style.display = "flex";

    document.getElementById("userPickedImage").src = handOptions[hand];

    const userpickedCircle = document.getElementById("userpickedCircle")
    userpickedCircle.classList.add(hand)

    computerHand(hand);
}

function computerHand() {

}