var grid = [
  [2, 2, 3, 5],
  [1, 3, 4, 5],
  [2, 3, 4, 5],
  [2, 4, 5, 6]
];

makeNewGrid();

function makeNewGrid() {
  grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  makeNewCel();
  makeNewCel();
  makeNewCel();
  upDateUI();
}

function upDateUI() {
  console.log(grid);
  for (let rows = 1; rows < 5; rows++) {
    for (let colums = 1; colums < 5; colums++) {
      if (!grid[colums - 1][rows - 1] == 0) {
        // document.getElementById(colums + "-" + rows).style.background = "#f3f3f3";
        document.getElementById(colums + "-" + rows).innerHTML = grid[colums - 1][rows - 1];
      } else {
        document.getElementById(colums + "-" + rows).innerHTML = ""
      }
    }
  }
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    console.log("up");
  } else if (e.keyCode == "40") {
    console.log("down");
  } else if (e.keyCode == "37") {
    console.log("left");
    moveleft();
  } else if (e.keyCode == "39") {
    console.log("right");
  }
}

function moveleft() {
  for (let colum = 0; colum < 4; colum++) {
    for (let cel = 0; cel < 4; cel++) {
      for (let pEmthyCel = 0; pEmthyCel < 4; pEmthyCel++) {
        if (pEmthyCel < cel) {
          if (!grid[colum][cel] == 0 ) {
            if (grid[colum][pEmthyCel] == 0) {

              grid[colum][pEmthyCel] = grid[colum][cel];
              grid[colum][cel] = 0;
              console.log(
                "pEmthyCel = " + grid[colum][pEmthyCel] +
                " cel = " + grid[colum][cel]
              );
            } else if (grid[colum][cel] == grid[colum][pEmthyCel]) {
              grid[colum][pEmthyCel] = grid[colum][cel] + grid[colum][pEmthyCel];
              grid[colum][cel] = 0;
            }
          }
        }
      }
    }
  }
  makeNewCel();
  console.log("grid =" + grid);
  upDateUI();
}

function makeNewCel() {
  
  while (true) {
    let row = Math.floor(Math.random() * 4);
    let column = Math.floor(Math.random() * 4);
    console.log(column);
    console.log(grid);
    if (grid[column][row] == 0) {
      let randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber < 85) {
        grid[column][row] = 2;
      } else {
        grid[column][row] = 4;
      }
      break;
    }
  }
  upDateUI
}