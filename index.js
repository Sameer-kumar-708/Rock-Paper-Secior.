let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gencompChoices =  () => {
  const option = ["Rock","Paper","Scissor"];
  const randomIdx = Math.floor(Math.random()*3);
  return option[randomIdx];
}

const playGame = (userchoice) =>{
    const compChoice = gencompChoices();
   if(userchoice === compChoice){
    drawGame();
   }else{
    let userWin = true;
    if(userchoice === "Rock"){
        //Scissor , paper
        userWin = compChoice === "Paper" ? false : true;
   }else if(userchoice === "Paper"){
       //rock,Scissor
       userWin = compChoice === "Scissor" ? false : true;
   }else{
    userWin = compChoice === "Rock" ? false : true;
   }
    showWinner(userWin , userchoice , compChoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
    });
});

