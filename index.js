console.log("Grab elements...");
// -----------------------------------------------------
const tiles = document.querySelectorAll(".tiles");
const start = document.querySelector(".start-button");
const tile = document.querySelectorAll(".tile");
const choiceBox = document.querySelector(".player-container");

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
// -----------------------------------------------------
const tokenX = `<i class="fa-solid fa-x"></i>`;
const tokenO = `<i class="fa-solid fa-o"></i>`;
let lastMove = "";
let movesLeft = 9;
let p1MovesLeft = 5;
let p2MovesLeft = 4;
let token = tokenX
let position = "";
let isGameOver = false;


console.log("Start Game Play");
// -----------------------------------------------------

console.log(`position = ${position}`);
console.log(`lastMove = ${lastMove}`);
console.log(`movesLeft = ${movesLeft}`);
console.log(`p1movesLeft = ${p1MovesLeft}`);
console.log(`p2MovesLeft = ${p2MovesLeft}`);
console.log(`token = ${token}`);

choiceBox.innerHTML = `
  <button class="player-container__option">Player ${tokenX}</button>
  <button class="player-container__option">Player ${tokenO}</button>
`

console.log("Game in progress...");
// -----------------------------------------------------

tile.forEach((move) => {
  move.addEventListener("click", (event) => {
    event.preventDefault();
    position = move.innerHTML;

    // CHECK MOVES LEFT THROUGHOUT GAME PLAY
    // -----------------------------------------------------

    if (movesLeft > 0) {
      console.log("Check # of moves left...");
      move.innerHTML = token;
      movesLeft--;


    // CHECK TOKEN MOVEMENTS THROUGHOUT GAME PLAY
    // -----------------------------------------------------

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
      // -----------------------------------------------------

      if (
        start.addEventListener("click", (event) => {
          console.log("Re-starting board...");
          lastMove = "";
          movesLeft = 9;
          p1MovesLeft = 5;
          p2MovesLeft = 4;
          token = tokenX;
          position = "";
          isGameOver = false;
          t1.innerHTML = `<i class="empty"></i>`;
          t2.innerHTML = `<i class="empty"></i>`;
          t3.innerHTML = `<i class="empty"></i>`;
          t4.innerHTML = `<i class="empty"></i>`;
          t5.innerHTML = `<i class="empty"></i>`;
          t6.innerHTML = `<i class="empty"></i>`;
          t7.innerHTML = `<i class="empty"></i>`;
          t8.innerHTML = `<i class="empty"></i>`;
          t9.innerHTML = `<i class="empty"></i>`;
        })
      );
      
      
      // CHECK MOVES AGAINST WINNING COMBINATIONS
      // -----------------------------------------------------

      if (movesLeft < 5) {
        if (
          (t1.innerHTML === tokenX &&
            t2.innerHTML === tokenX &&
            t3.innerHTML === tokenX) ||
          (t1.innerHTML === tokenO && t2.innerHTML === tokenO && t3.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 1-2-3!");
        }
        if (
          (t4.innerHTML === tokenX && t5.innerHTML === tokenX && t6.innerHTML === tokenX)||
          (t4.innerHTML === tokenO && t5.innerHTML === tokenO && t6.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 4-5-6!");
        }
        if (
          (t7.innerHTML === tokenX &&
            t8.innerHTML === tokenX &&
            t9.innerHTML === tokenX) ||
          (t7.innerHTML === tokenO && t8.innerHTML === tokenO && t9.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 7-8-9!");
        }
        if (
          (t1.innerHTML === tokenX &&
            t4.innerHTML === tokenX &&
            t7.innerHTML === tokenX) ||
          (t1.innerHTML === tokenO && t4.innerHTML === tokenO && t7.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 1-4-7!");
        }
        if (
          (t2.innerHTML === tokenX &&
            t5.innerHTML === tokenX &&
            t8.innerHTML === tokenX) ||
          (t2.innerHTML === tokenO && t5.innerHTML === tokenO && t8.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 2-5-8!");
        }
        if (
          (t3.innerHTML === tokenX &&
            t6.innerHTML === tokenX &&
            t9.innerHTML === tokenX) ||
          (t3.innerHTML === tokenO && t6.innerHTML === tokenO && t9.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 3-6-9!");
        }
        if (
          (t1.innerHTML === tokenX &&
            t5.innerHTML === tokenX &&
            t9.innerHTML === tokenX) ||
          (t1.innerHTML === tokenO && t5.innerHTML === tokenO && t9.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 1-5-9!");
        }
        if (
          (t3.innerHTML === tokenX &&
            t5.innerHTML === tokenX &&
            t7.innerHTML === tokenX) ||
          (t3.innerHTML === tokenO && t5.innerHTML === tokenO && t7.innerHTML === tokenO)
        ) {
          tiles.innerHTML = `<button disabled>`;
          alert("We have a winner in position 3-5-7!");
        }
        
      }
      // console.log ("--- CHECK VALUES AT END OF LOOP ---")
      console.log(`token = ${token}`);
      console.log (`movesLeft = ${movesLeft}`);
      console.log (`p1MovesLeft = ${p1MovesLeft}`);
      console.log (`p2MovesLeft = ${p2MovesLeft}`);
      console.log (`move.innerHTML = ${move.innerHTML}`);
      console.log(`Is Game Over? = ${isGameOver}`);


      // CHECK IF GAME IS OVER, GIVE OPTION TO PLAY AGAIN
      // -----------------------------------------------------

      if (movesLeft == 0 && p1MovesLeft == 0 && p2MovesLeft == 0) {
        isGameOver = true;
        console.log(`Is Game Over? = ${isGameOver}`);
        console.log("Proceed to last move check");
        tiles.innerHTML = `<button disabled>`;

        if (
          start.addEventListener("click", (event) => {
            console.log("Re-setting board...");

            lastMove = "";
            movesLeft = 9;
            p1MovesLeft = 5;
            p2MovesLeft = 4;
            token = tokenX;
            position = "";
            isGameOver = false;
            t1.innerHTML = `<i class="empty"></i>`;
            t2.innerHTML = `<i class="empty"></i>`;
            t3.innerHTML = `<i class="empty"></i>`;
            t4.innerHTML = `<i class="empty"></i>`;
            t5.innerHTML = `<i class="empty"></i>`;
            t6.innerHTML = `<i class="empty"></i>`;
            t7.innerHTML = `<i class="empty"></i>`;
            t8.innerHTML = `<i class="empty"></i>`;
            t9.innerHTML = `<i class="empty"></i>`;
          })
        );
      }
    }
  });
});