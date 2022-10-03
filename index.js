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

console.log (t1.innerText);
console.log (t2.innerText);
console.log (t3.innerText);
console.log (t4.innerText);
console.log (t5.innerText);
console.log (t6.innerText);
console.log (t7.innerText);
console.log (t8.innerText);
console.log (t9.innerText);

console.log("Initialize...");

let lastMove="";
let movesLeft = 9;
let p1MovesLeft = 5;
let p2MovesLeft = 4;
let token="X";
let position = "";

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
        position = move.innerHTML;
        // console.log (`position = ${position}`);
        // move.innerHTML = token;
        // console.log (`move.innerHTML = ${move.innerHTML}`);
        // if position == "
        if (movesLeft > 0) {
            move.innerHTML = token;
            if (token === "X") {
                p1MovesLeft --;
                token = "O";
            } else {
                p2MovesLeft --;
                token = "X"
            }
            start.innerHTML = "Re-start game?"
            movesLeft --;
            console.log(token);
            console.log (`movesLeft = ${movesLeft}`);
            console.log (`p1MovesLeft = ${p1MovesLeft}`);
            console.log (`p2MovesLeft = ${p2MovesLeft}`);
            console.log (`move.innerHTML = ${move.innerHTML}`);
        }
        if (movesLeft==0 && p1MovesLeft==0 && p2MovesLeft==0) {
            token = move.innerHTML;
            // console.log("Game Over! Thanks for playing!");
            console.log (move.innerHTML);
            alert ("Game Over! Thanks for playing!");
            start.innerHTML = "Play again?"
            // if onclick.start {
            //     lastMove="";
            //     movesLeft = 9;
            //     p1MovesLeft = 5;
            //     p2MovesLeft = 4;
            //     token="X";
            //     position = "";
            // }
            tiles.disabled;
            event.disabled;
            return;

            // if (onclick.start) {
            //     console.log("Re-start button clicked!");
            }

    })     
});