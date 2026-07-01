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
  gameOver = false;
  enableBoxes();
  msgContainer.classList.add("hide");
};
rstBtn.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    restartGame();
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
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
    
    checkDraw();
    
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
let gameOver = false;

const showWinner = (winner) => {
  msg.innerText =  `🎉 Congratulations..Winner ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  gameOver = true;
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
        return;
      } 
    }
  }
  
};

const checkDraw = () => {
  let isDraw = true;
  boxes.forEach((box) => {
    if(box.innerText === ""){
      isDraw = false;
    }
  });
  if( isDraw && !gameOver){
    msg.innerText = " 🤝 It is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes()
  }
}
