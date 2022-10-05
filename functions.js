// const cells = [1,2,3,4,5,6,7,8,9];
let cells = [];
// select tile from the available open tiles to help identify next automatic move

// export 
// const getRandomCell = () => {
//     let i = cells.length;
//     console.log (i); 
//     while (i > 0, i--) {   
//         let randomCell = cells[Math.floor(Math.random() * cells.length)];
//         cells.splice (cells.indexOf(randomCell),1);
//         console.log (randomCell);
//         console.log (cells);
//     }
// }
// const t1 = document.getElementById("1-1");
// const t2 = document.getElementById("1-2");
// const t3 = document.getElementById("1-3");
// const t4 = document.getElementById("2-1");
// const t5 = document.getElementById("2-2");
// const t6 = document.getElementById("2-3");
// const t7 = document.getElementById("3-1");
// const t8 = document.getElementById("3-2");
// const t9 = document.getElementById("3-3");

  let t1 = `<i class="fa-solid fa-o"></i>`;
  let t2 = `<i class="empty"></i>`;
  let t3 = `<i class="fa-solid fa-x"></i>`;
  let t4 = `<i class="empty"></i>`;
  let t5 = `<i class="empty"></i>`;
  let t6 = `<i class="empty"></i>`;
  let t7 = `<i class="empty"></i>`;
  let t8 = `<i class="empty"></i>`;
  let t9 = `<i class="empty"></i>`;

const moveToRandomCell = () => {
    if (t1 !=`<i class="empty"></i>`) {
        cells.map
        cells.push(1); 
    }
    if (t2 !=`<i class="empty"></i>`) {
        cells.push(2);
    }
    if (t3 !=`<i class="empty"></i>`) {
        cells.push(3);
    }
    if (t4 !=`<i class="empty"></i>`) {
        cells.push(4);
    }
    if (t5 !=`<i class="empty"></i>`) {
        cells.push(5);
    }
    if (t6 !=`<i class="empty"></i>`) {
        cells.push(6);
    }
    if (t7!=`<i class="empty"></i>`) {
        cells.push(7);
    }
    if (t8 !=`<i class="empty"></i>`) {
        cells.push(8);
    }
    if (t9 !=`<i class="empty"></i>`) {
        cells.push(9);
    }
}
console.log (cells);

    // let i = cells.length;
    // console.log (i); 
    // while (i > 0, i--) {   
    //     let randomCell = cells[Math.floor(Math.random() * cells.length)];
    //     cells.splice (cells.indexOf(randomCell),1);
    //     console.log (randomCell);
    //     console.log (cells);
    // }
// }
// moveToRandomCell();



