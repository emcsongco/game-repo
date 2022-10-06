console.log("Grab elements...");
    const tiles = document.querySelectorAll(".tiles");
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
    let lastMove = "";
    let movesLeft = 9;
    let p1MovesLeft = 5;
    let p2MovesLeft = 4;
    let token = tokenX
    let position = "";
    let isGameOver = false;
    let status = "";
    

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
    message.innerText = "***";
    t1.innerHTML = `<i class="empty"></i>`;
    t2.innerHTML = `<i class="empty"></i>`;
    t3.innerHTML = `<i class="empty"></i>`;
    t4.innerHTML = `<i class="empty"></i>`;
    t5.innerHTML = `<i class="empty"></i>`;
    t6.innerHTML = `<i class="empty"></i>`;
    t7.innerHTML = `<i class="empty"></i>`;
    t8.innerHTML = `<i class="empty"></i>`;
    t9.innerHTML = `<i class="empty"></i>`;
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
      alert ("Player X Wins!")
    } else if (position === tokenO) {
      status = "--Player O Wins!";
      message.innerText = status;
      console.log (status);
      alert ("--Player O Wins!")
    } else {
      status = "It's a Tie!";
      message.innerText = status;
      console.log (status);
      alert ("--It's a Tie!")
    }
    isGameOver = true;
    return (status);
  }
}

console.log("Ready to play!");
// -----------------------------------------------------
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

    // CHECK TOKEN MOVEMENTS THROUGHOUT GAME PLAY
      if (token === tokenX) {
        console.log("Check # of X moves left...");
        p1MovesLeft--;
        token = tokenO;
      } else {
        console.log("Check O of moves left...");
        p2MovesLeft--;
        token = tokenX;
      }

      // RESTART BOARD AT ANY TIME
      if (
        start.addEventListener("click", (event) => {
          console.log("Re-starting board...");
          initializeBoard();
        })
      );

      // CHECK MOVES AGAINST WINNING COMBINATIONS
      if (position===tokenX) {
        checkWinningCombo(tokenX);
        // message.innerHTML = "Player X Wins";
      } else if (position===tokenO) {
        checkWinningCombo(tokenO)
        // message.innerHTML = "Player O Wins!";
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
      if (movesLeft == 0 && p1MovesLeft == 0 && p2MovesLeft == 0) {
        isGameOver = true;
        console.log(`Is Game Over? = ${isGameOver}`);
        console.log("Proceed to last move check");
        if (start.addEventListener("click", (event) => {
            console.log("Re-setting board...");
            initializeBoard();
          })
        );
      }
  
    } 
  });
});