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
      checkForWin();
    }
    if (type == 0) {
      changePlayer();
    }
  }
  change();
}
function checkForWin() {
  var flag1 = 0;
  var flag2 = 0; 
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
     const x= document.getElementById(i + "" + j).innerHTML ;
     if(x.substr(0,1) > 0){
      if(x.substr(0,1) == 1)
      {
        flag1 = 1;
      }
      if(x.substr(0,1) == 2)
      {
        flag2 = 1;
      }
     }
    }
   
  }
  if(flag1 = 0 && flag2 == 1)
  {
    console.log('player 2');
  }
  if(flag1 = 1 && flag2 == 0){
    console.log('player 1');
  }
}
change();
