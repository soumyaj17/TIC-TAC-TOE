let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#playagain");
let hiddentext = document.querySelector(".winnertext");
let heading1 = document.querySelector("#heading1");

let playerSymbol = "";
let opponentSymbol = "";
let turn0 = true;
let gameStarted = false;

let winarr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const enablebtn = () => {
  for (let j of boxes) {
    j.disabled = false;
    j.innerText = "";
    j.classList.remove("xStyle", "oStyle");
  }
};

const disablebtn = () => {
  for (let i of boxes) {
    i.disabled = true;
  }
};

const showwinner = (winner) => {
  heading1.innerText = `CONGRATULATIONS! THE WINNER IS PLAYER ${winner}`;
  hiddentext.classList.remove("hide");
  disablebtn();
};

const checkwinner = () => {
  for (let i of winarr) {
    let pos1val = boxes[i[0]].innerText;
    let pos2val = boxes[i[1]].innerText;
    let pos3val = boxes[i[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameStarted || box.innerText !== "") return;

    if (turn0) {
      box.innerText = playerSymbol;
      box.classList.add(playerSymbol === "X" ? "xStyle" : "oStyle");
    } 
    else {
      box.innerText = opponentSymbol;
      box.classList.add(opponentSymbol === "X" ? "xStyle" : "oStyle");
    }

    box.disabled = true;
    turn0 = !turn0;
    checkwinner();
  });
});

const playnew = () => {
  turn0 = true;
  enablebtn();
  hiddentext.classList.add("hide");
  document.querySelector("#playerSelect").style.display = "block";
  gameStarted = false;
  playerSymbol = "";
  opponentSymbol = "";
};

rstbtn.addEventListener("click", playnew);



document.querySelector("#chooseX").addEventListener("click", () => {
  playerSymbol = "X";
  opponentSymbol = "O";
  startGame();
});

document.querySelector("#chooseO").addEventListener("click", () => {
  playerSymbol = "O";
  opponentSymbol = "X";
  startGame();
});

const startGame = () => {
  document.querySelector("#playerSelect").style.display = "none";
  enablebtn();
  gameStarted = true;
};