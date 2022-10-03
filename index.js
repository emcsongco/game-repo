const winningCombo = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const moves = [
    {"1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9"}
];

const entries = Object.entries(moves);
const values = Object.values(moves);
const keys = Object.keys(moves);

// console.log(winningCombo);
// console.log(entries);
// console.log(values);
// console.log(keys);

console.log("Grab elements...");

const tiles = document.querySelectorAll(".tiles");
const start = document.querySelector(".start-button");
const tile = document.querySelectorAll(".tile");

// console.log(tiles);
// console.log(tiles.innerHTML);
// console.log(start);

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

            // console.log ("--- CHECK VALUES AT END OF LOOP ---")
            // console.log(`token = ${token}`);
            // console.log (`movesLeft = ${movesLeft}`);
            // console.log (`p1MovesLeft = ${p1MovesLeft}`);
            // console.log (`p2MovesLeft = ${p2MovesLeft}`);
            // console.log (`move.innerHTML = ${move.innerHTML}`);
            // console.log(`Is Game Over? = ${isGameOver}`);
        }

        if (movesLeft == 0 && p1MovesLeft == 0 && p2MovesLeft == 0) {
            isGameOver = true;
            console.log(`Is Game Over? = ${isGameOver}`);
            // move.textContent = move.innerHTML;
            console.log ("Proceed to last move check");
            start.innerHTML = "Play again?";
            tiles.innerHTML = `<button disabled>`;
            
            if (start.addEventListener("click",(event) => {
                console.log("Initialize...");
            
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
    })
});



