console.log("Grab elements...");

const tiles = document.querySelectorAll(".tiles");
const start = document.querySelector(".start-button");
const tile = document.querySelectorAll(".tile");

const t1 = document.getElementById("1-1");
const t2 = document.getElementById("1-2");
const t3 = document.getElementById("1-3");
const t4 = document.getElementById("2-1");
const t5 = document.getElementById("2-2");
const t6 = document.getElementById("2-3");
const t7 = document.getElementById("3-1");
const t8 = document.getElementById("3-2");
const t9 = document.getElementById("3-3");

// console.log (t1.innerText);
// console.log (t2.innerText);
// console.log (t3.innerText);
// console.log (t4.innerText);
// console.log (t5.innerText);
// console.log (t6.innerText);
// console.log (t7.innerText);
// console.log (t8.innerText);
// console.log (t9.innerText);

console.log("Initialize...");

let lastMove="";
let movesLeft = 9;
let p1MovesLeft = 5;
let p2MovesLeft = 4;
let token="X";
let position = "";
let isGameOver = false;

console.log("Start Game Play");

console.log (`position = ${position}`);
console.log (`lastMove = ${lastMove}`);
console.log (`movesLeft = ${movesLeft}`);
console.log (`p1movesLeft = ${p1MovesLeft}`);
console.log (`p2MovesLeft = ${p2MovesLeft}`);
console.log (`token = ${token}`);

console.log ("Game in progress...");

tile.forEach(move => {

    move.addEventListener("click", (event) => {
        event.preventDefault();
        start.innerHTML = "Re-start game?"
        position = move.innerHTML;

        if (movesLeft > 0) {
            console.log ("Check # of moves left...")
            move.innerHTML = token;
            movesLeft --;

            if (token === "X") {
                console.log ("Check # of X moves left...")
                p1MovesLeft --;
                token = "O";
            } else {
                console.log ("Check O of moves left...")
                p2MovesLeft --;
                token = "X"
            }

            if (start.addEventListener("click",(event) => {
                console.log("Re-starting board...");
                lastMove="";
                movesLeft = 9;
                p1MovesLeft = 5;
                p2MovesLeft = 4;
                token="X";
                position = "";
                isGameOver = false;
                t1.innerText="1";
                t2.innerText="2";
                t3.innerText="3";
                t4.innerText="4";
                t5.innerText="5";
                t6.innerText="6";
                t7.innerText="7";
                t8.innerText="8";
                t9.innerText="9";  
            }));

            if (movesLeft < 5) {
                if ((t1.innerText==="X" && t2.innerText==="X" && t3.innerText==="X") || (t1.innerText==="O" && t2.innerText==="O" && t3.innerText==="O")) {
                    alert ("We have a winner in position 1-2-3!");
                }
                if ((t4.innerText==="X" && t5.innerText==="X" && t6.innerText=="X") || (t4.innerText==="O" && t5.innerText==="O" && t6.innerText==="O")) {
                    alert ("We have a winner in position 4-5-6!");
                }
                if ((t7.innerText==="X" && t8.innerText==="X" && t9.innerText==="X") || (t7.innerText==="O" && t8.innerText==="O" && t9.innerText==="O")) {
                    alert ("We have a winner in position 7-8-9!");
                } 
                if ((t1.innerText==="X" && t4.innerText==="X" && t7.innerText==="X") || (t1.innerText==="O" && t4.innerText==="O" && t7.innerText==="O")) {
                    alert ("We have a winner in position 1-4-7!");
                }
                if ((t2.innerText==="X" && t5.innerText==="X" && t8.innerText==="X") || (t2.innerText==="O" && t5.innerText==="O" && t8.innerText==="O")) {
                    alert ("We have a winner in position 2-5-8!");
                }
                if ((t3.innerText==="X" && t6.innerText==="X" && t9.innerText==="X") || (t3.innerText==="O" && t6.innerText==="O" && t9.innerText==="O")) {
                    alert ("We have a winner in position 3-6-9!");
                }
                if ((t1.innerText==="X" && t5.innerText==="X" && t9.innerText==="X") || (t1.innerText==="O" && t5.innerText==="O" && t9.innerText==="O")) {
                    alert ("We have a winner in position 1-5-9!");
                }
                if ((t3.innerText==="X" && t5.innerText==="X" && t7.innerText==="X") || (t3.innerText==="O" && t5.innerText==="O" && t7.innerText==="O")) {
                    alert ("We have a winner in position 3-5-7!");
                }
            }
            // console.log ("--- CHECK VALUES AT END OF LOOP ---")
            // console.log(`token = ${token}`);
            // console.log (`movesLeft = ${movesLeft}`);
            // console.log (`p1MovesLeft = ${p1MovesLeft}`);
            // console.log (`p2MovesLeft = ${p2MovesLeft}`);
            // console.log (`move.innerHTML = ${move.innerHTML}`);
            // console.log(`Is Game Over? = ${isGameOver}`);

        if (movesLeft == 0 && p1MovesLeft == 0 && p2MovesLeft == 0) {
            isGameOver = true;
            console.log(`Is Game Over? = ${isGameOver}`);
            // move.textContent = move.innerHTML;
            console.log ("Proceed to last move check");
            start.innerHTML = "Play again?";
            tiles.innerHTML = `<button disabled>`;
            
            if (start.addEventListener("click",(event) => {
                console.log("Re-setting board...");
            
                lastMove="";
                movesLeft = 9;
                p1MovesLeft = 5;
                p2MovesLeft = 4;
                token="X";
                position = "";
                isGameOver = false;
                t1.innerText="1";
                t2.innerText="2";
                t3.innerText="3";
                t4.innerText="4";
                t5.innerText="5";
                t6.innerText="6";
                t7.innerText="7";
                t8.innerText="8";
                t9.innerText="9";  
            }));

        }
    }})});