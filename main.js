const handOptions = {
  "rock": "asset/Rock.png",
  "paper": "asset/Paper.png",
  "scissors": "asset/Scissors.png"
}
let SCORE = 0;
const pickUserHand = (hand) =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    document.getElementById("userPickedImg").src = handOptions[hand];
    pickComputerHand(hand);
}
const newGame = () =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}
const pickComputerHand = (hand) =>{
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)]
    document.getElementById("pcPickedImg").src = handOptions[cpHand];
    refree(hand, cpHand);
}
const refree = (userHand, cpHand) =>{
    if (userHand === "paper" && cpHand === "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand === "paper" && cpHand === "paper") {
    setDecision("It's a tie!");
    }
    if (userHand === "rock" && cpHand === "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
    if (userHand === "rock" && cpHand === "paper") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "rock" && cpHand === "rock") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "scissors") {
    setDecision("It's a tie!");
    }
    if (userHand === "scissors" && cpHand === "rock") {
    setDecision("YOU LOSE!");
    }
    if (userHand === "scissors" && cpHand === "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
    }
}
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }
  