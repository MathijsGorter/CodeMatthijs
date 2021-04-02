var grid = [[0]];

makeNewGrid();

document.onkeydown = checkKey;

function makeNewGrid() {
  let currentRow = [0];
  grid.length = 0;
  for (let colums = 1; colums < 5; colums++) {
    currentRow.length = 0;
    for (let row = 1; row < 5; row++) {
      randomNumber = Math.floor(Math.random() * 100)
      if (randomNumber < 30) {
        currentRow.push (0)
        // document.getElementById(row + "-" + colums).innerHTML = "";
      } else if (randomNumber < 80) {
        currentRow.push (2)
        // document.getElementById(row + "-" + colums).innerHTML = "2";
      } else {
        currentRow.push (4)
        // document.getElementById(row + "-" + colums).innerHTML = "4";
      }
    }
    grid.push([])
  }
  updateUI();
}

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
      console.log("up")
    }
    else if (e.keyCode == '40') {
      console.log("down")
    }
    else if (e.keyCode == '37') {
      console.log("left")

    }
    else if (e.keyCode == '39') {
      console.log("right")

    }

}
function updateUI() {
  for (let colum = 1; colum < 5; colum++) {
    for (let row = 1; row < 5; row++) {
      document.getElementById(row + "-" + colum).innerHTML = grid[colum[row]];

    }
  }
}