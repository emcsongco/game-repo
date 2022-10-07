console.log("Grab elements...");
    const tiles = document.querySelectorAll(".container__tiles");
    const start = document.querySelector(".start-button");
    const tile = document.querySelectorAll(".tile");
    const choiceBox = document.querySelector(".player-container");
    const message = document.querySelector("#message");

    const t1 = document.getElementById("1-1");
    const t2 = document.getElementById("1-2");
    const t3 = document.getElementById("1-3");
    const t4 = document.getElementById("2-1");
    const t5 = document.getElementById("2-2");
    const t6 = document.getElementById("2-3");
    const t7 = document.getElementById("3-1");
    const t8 = document.getElementById("3-2");
    const t9 = document.getElementById("3-3");

    console.log("Initialize...");
    const tokenX = `<i class="fa-solid fa-x"></i>`;
    const tokenO = `<i class="fa-solid fa-o"></i>`;
    const emptyCell = `<i class="empty"></i>`;
    let lastMove = "";
    let movesLeft = 9;
    let p1MovesLeft = 5;
    let p2MovesLeft = 4;
    let token = tokenX
    let position = "";
    let isGameOver = false;
    let status = "";    
    const board = ["","","","","","","","",""]

console.log("Start Game Play");
    console.log(`position = ${position}`);
    console.log(`lastMove = ${lastMove}`);
    console.log(`movesLeft = ${movesLeft}`);
    console.log(`p1movesLeft = ${p1MovesLeft}`);
    console.log(`p2MovesLeft = ${p2MovesLeft}`);
    console.log(`token = ${token}`);

const initializeBoard = () => {
    lastMove = "";
    movesLeft = 9;
    p1MovesLeft = 5;
    p2MovesLeft = 4;
    token = tokenX;
    position = "";
    isGameOver = false;
    message.innerText = "Player X moves first";
    t1.innerHTML = emptyCell;
    t2.innerHTML = emptyCell;
    t3.innerHTML = emptyCell;
    t4.innerHTML = emptyCell;
    t5.innerHTML = emptyCell;
    t6.innerHTML = emptyCell;
    t7.innerHTML = emptyCell;
    t8.innerHTML = emptyCell;
    t9.innerHTML = emptyCell;
}

const checkWinningCombo = (position) => {
  let status = "";
  if (
    ((t1.innerHTML === position && t2.innerHTML === position && t3.innerHTML === position) ||
    (t4.innerHTML === position && t5.innerHTML === position && t6.innerHTML === position) ||
    (t7.innerHTML === position && t8.innerHTML === position && t9.innerHTML === position) ||
    (t1.innerHTML === position && t4.innerHTML === position && t7.innerHTML === position) ||
    (t2.innerHTML === position && t5.innerHTML === position && t8.innerHTML === position) ||
    (t3.innerHTML === position && t6.innerHTML === position && t9.innerHTML === position) ||
    (t3.innerHTML === position && t5.innerHTML === position && t7.innerHTML === position) ||
    (t1.innerHTML === position && t5.innerHTML === position && t9.innerHTML === position))
  ) { if (position === tokenX) {
      status = "Player X Wins!";
      message.innerText = status;
      console.log (status);
      // alert ("Player X Wins!")
    } else if (position === tokenO) {
      status = "Player O Wins!";
      message.innerText = status;
      console.log (status);
      // alert ("Player O Wins!")
    } else {
      status = "No Winner!";
      message.innerText = status;
      console.log (status);
    }
    isGameOver = true;
    return (status);
  }
}

console.log("Ready to play!");
// -----------------------------------------------------
// RESTART BOARD AT ANY TIME
if (
  start.addEventListener("click", (event) => {
    console.log("Re-starting board...");
    initializeBoard();
  })
);
tile.forEach((move) => {
  move.addEventListener("click", (event) => {
    event.preventDefault();
    position = move.innerHTML;

    // CHECK MOVES LEFT THROUGHOUT GAME PLAY
    if (movesLeft > 0 && !isGameOver) {
      console.log("Check # of moves left...");
      move.innerHTML = token;
      movesLeft--;
      position = move.innerHTML;
      console.log(tile);

    // CHECK TOKEN MOVEMENTS THROUGHOUT GAME PLAY
      if (token === tokenX && !isGameOver) {
        console.log("Check # of X moves left...");
        p1MovesLeft--;
        if (p1MovesLeft ===0) {
          message.innerHTML = "No Winner!";
        } else {  
          message.innerHTML = "Player O's turn";
          token = tokenO;
        }
      } else if (token === tokenO && !isGameOver) {
        console.log("Check # of O moves left...");
        p2MovesLeft--;
        if (p1MovesLeft === 0) {
          isGameOver = true;
        }
        message.innerHTML = "Player X's turn";
        token = tokenX;
      } else if (isGameOver) {
        message.innerHTML = "No Winner!"
      }

      // CHECK MOVES AGAINST WINNING COMBINATIONS
      if (position===tokenX && !isGameOver) {
        checkWinningCombo(tokenX);
      } else if (position===tokenO && !isGameOver) {
        checkWinningCombo(tokenO)
      } 

      // console.log ("--- CHECK VALUES AT END OF LOOP ---")
      console.log(`token = ${token}`);
      console.log(`lastMove = ${lastMove}`);
      console.log(`position = ${position}`);
      console.log (`movesLeft = ${movesLeft}`);
      console.log (`p1MovesLeft = ${p1MovesLeft}`);
      console.log (`p2MovesLeft = ${p2MovesLeft}`);
      console.log (`move.innerHTML = ${move.innerHTML}`);
      console.log(`Is Game Over? = ${isGameOver}`);
      console.log(t1.innerHTML);
      console.log(t2.innerHTML);
      console.log(t3.innerHTML);
      console.log(t4.innerHTML);
      console.log(t5.innerHTML);
      console.log(t6.innerHTML);
      console.log(t7.innerHTML);
      console.log(t8.innerHTML);
      console.log(t9.innerHTML);

      // CHECK IF GAME IS OVER, GIVE OPTION TO PLAY AGAIN
      if (movesLeft === 0 && p1MovesLeft === 0 && p2MovesLeft === 0) {
        isGameOver = true;
        console.log(`Is Game Over? = ${isGameOver}`);
        console.log("Proceed to last move check");
        if (position===tokenX) {
          checkWinningCombo(tokenX)
        }else{ 
          message.innerHTML = "It's a Tie!"
        }

        if (start.addEventListener("click", (event) => {
            console.log("Re-setting board...");
            initializeBoard();
          })
        );
      }
    } 
  });
});