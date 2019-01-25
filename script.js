let matrix = new Array(6).fill(0).map(() => new Array(6).fill(0));

player = 1;
function change() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      document.getElementById(i + "" + j).innerHTML = matrix[i][j];
    }
  }
}
function changePlayer() {
  console.log("pla");
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }
}
function mat(a, b, type) {
  //console.log(a+''+b)
  let value = parseInt(document.getElementById(a + "" + b).innerHTML);
  if (value.toString().substr(0, 1) == player || value < 10 || type == 1) {
    if (value < 10) {
      value = parseInt(player + "" + value);
    } else {
    }
    if (type == 1 && value > 10) {
      console.log("re");
      console.log(value);
      console.log(
        parseInt(
          value
            .toString()
            .replace(value.toString().substr(1, 2), player.toString())
        )
      );
      value = parseInt(
        value
          .toString()
          .replace(value.toString().substr(0, 1), player.toString())
      );
    }
    value++;
    //console.log(value);
    if (value.toString().substr(1, 2) < 4) {
      matrix[a][b] = value;
    }
    if (value.toString().substr(1, 2) >= 4) {
      matrix[a][b] = 0;
      // console.log(a+1);
      mat(a + 1, b, 1);
      mat(a - 1, b, 1);
      mat(a, b + 1, 1);
      mat(a, b - 1, 1);
    }
    if (type == 0) {
      changePlayer();
    }
  }
  change();
}
function clicked() {}
change();
