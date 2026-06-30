let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelectorAll(".reset");
let msgContainer = document.querySelector(".winner-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const restartGame = () => {
  msg.innerText = "Congratulations..Winner ";
  enableBoxes();
  msgContainer.classList.add("hide");
};
rstBtn.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    restartGame();
    console.log("game refreshed");
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    box.style.backgroundColor = "white";
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "blue";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "red";
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = msg.innerText + `${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("Winnerr..", pos1);
        showWinner(pos1);
      }
    }
  }
};
