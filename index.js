const handOptions = {
    "rock": "/assets/icon-rock.svg",
    "paper": "/assets/icon-paper.svg",
    "scissors": "/assets/icon-scissors.svg"
}

const fiveHandOption={
    "rock": "/assets/icon-rock.svg",
    "paper": "/assets/icon-paper.svg",
    "scissors": "/assets/icon-scissors.svg",
    "spock":"/assets/icon-spock.svg",
    "lizard":"/assets/icon-lizard.svg"
}

let score = 0

function choose(level){
    if(level=='simple'){
    
        let choosen=document.getElementById('chooseLevel')
        choosen.style.display="none"

        let handsSection = document.getElementById('hands');
        handsSection.style.display = "flex";

        let fiveHandSection=document.getElementById('fivehands');
        fiveHandSection.style.display="none"
    }
    else if(level=='pro'){

        let choosen=document.getElementById('chooseLevel')
        choosen.style.display="none"

        let fiveHandSection=document.getElementById('fivehands');
        fiveHandSection.style.display="flex"

        let handsSection = document.getElementById('hands');
        handsSection.style.display = "none";
    }
}


function pickHand(hand,isSimple) {
    if(isSimple){
    let handsSection = document.getElementById('hands');
    handsSection.style.display = "none";

    let pickedSection = document.getElementById('picked');
    pickedSection.style.display = "flex";

    document.getElementById("userPickedImage").src = handOptions[hand];

    let userpickedCircle = document.getElementById("userpickedCircle")
    userpickedCircle.classList.add(hand)

    computerHand(hand,false);
    }

    else{
    let fiveHandSection=document.getElementById('fivehands');
    fiveHandSection.style.display="none"

    let pickedSection = document.getElementById('picked');
    pickedSection.style.display = "flex";

    document.getElementById("userPickedImage").src = fiveHandOption[hand];

    let userpickedCircle = document.getElementById("userpickedCircle")
    userpickedCircle.classList.add(hand)

    computerHand(hand,true)
    }
    
}

function pickFiveHand(hand){
    const fiveHandSection=document.getElementById('fivehands');
    fiveHandSection.style.display="none"

    const pickedSection = document.getElementById('picked');
    pickedSection.style.display = "flex";

    document.getElementById("userPickedImage").src = fiveHandOption[hand];

    const userpickedCircle = document.getElementById("userpickedCircle")
    userpickedCircle.classList.add(hand)

    computerHand(hand,true)

}

function computerHand(hand,isPro) {
    if(!isPro){
        let hands = ["rock", "paper", "scissors"];
        let computerHand = hands[Math.floor(Math.random() * hands.length)];
        document.getElementById("computerPickedImage").src = handOptions[computerHand];
        const computerpicked = document.getElementById("computerpickedCircle")
        computerpicked.classList.add(computerHand)
        result(hand, computerHand)
    }
    else{
        let hands = ["rock", "paper", "scissors","spock","lizard"];
        let computerHand = hands[Math.floor(Math.random() * hands.length)];
        document.getElementById("computerPickedImage").src = fiveHandOption[computerHand];
        const computerpicked = document.getElementById("computerpickedCircle")
        computerpicked.classList.add(computerHand)
        result(hand, computerHand)
    }
    
}

function result(userHand, computerHand) {
    

    //rock
    if (userHand == "rock" && computerHand == "paper") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
    }
    if (userHand == "rock" && computerHand == "rock") {
        setResult("It's a tie!");
    }
    if (userHand == "rock" && computerHand == "scissors") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "rock" && computerHand == "spock") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
    }
    if (userHand == "rock" && computerHand == "lizard") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }

    //paper
    if (userHand == "paper" && computerHand == "scissors") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);}
    }
    if (userHand == "paper" && computerHand == "paper") {
        setResult("It's a tie!");
    }
    if (userHand == "paper" && computerHand == "rock") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "paper" && computerHand == "spock") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "paper" && computerHand == "lizard") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);}
    }

    //scissors
    if (userHand == "scissors" && computerHand == "rock") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);}
    }
    if (userHand == "scissors" && computerHand == "scissors") {
        setResult("It's a tie!");
    }
    if (userHand == "scissors" && computerHand == "paper") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "scissors" && computerHand == "spock") {
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);}
    }
    if (userHand == "scissors" && computerHand == "lizard") {
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    
    //spock
    if (userHand == "spock" && computerHand == "spock") {
        setResult("It's a tie!");
    }
    if(userHand=="spock" && computerHand == "scissors"){
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if(userHand=="spock" && computerHand == "paper"){
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
    }
    if(userHand=="spock" && computerHand == "rock"){
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if(userHand=="spock" && computerHand == "lizard"){
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
    }
    //lizard
    if (userHand == "lizard" && computerHand == "lizard") {
        setResult("It's a tie!");
    }
    if(userHand=="lizard" && computerHand == "spock"){
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if(userHand=="lizard" && computerHand == "scissors"){
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
    }
    if(userHand=="lizard" && computerHand == "paper"){
        setResult("YOU WIN!");
        setScore(score + 1);
    }
    if(userHand=="lizard" && computerHand == "rock"){
        setResult("YOU LOSE!");
        if(score > 0) {setScore(score - 1);} 
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

    let choosen=document.getElementById('chooseLevel')
    choosen.style.display="flex"

    let hands = document.getElementById("hands");
    hands.style.display = "none";

    let fiveHands = document.getElementById("fivehands");
    fiveHands.style.display = "none";

    let user=document.getElementById('userpickedCircle');
    user.removeAttribute('class')
    user.classList.add('circle')

    let computer=document.getElementById('computerpickedCircle');
    computer.removeAttribute('class')
    computer.classList.add('circle')

    let picked = document.getElementById("picked");
    picked.style.display = "none";
    
}