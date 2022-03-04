const inputNum = document.querySelector("#inputNum");
const sub = document.querySelector("#submit");
const highOrLow = document.querySelector(".highOrLow");
let randomNumber = Math.floor(Math.random() * 100);
let resetButton;

sub.addEventListener("click", guessNum);

function guessNum() {
  let userGuess = Number(inputNum.value);
  //console.log(userGuess);
  console.log(randomNumber);
  if (userGuess === randomNumber) {
    highOrLow.textContent = "猜对了";
    resetButton = document.createElement("button");
    document.body.appendChild(resetButton);
    resetButton.textContent = '开始新游戏';
    resetButton.addEventListener('click', resetGame);
  }
  else if(userGuess > randomNumber) {
      highOrLow.textContent = "大了";
  }
  else {
      highOrLow.textContent = "小了";
  }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100); 
    highOrLow.textContent = "";
    document.body.removeChild(resetButton);
    inputNum.value = "";
    //console.log(resetButton);
}
