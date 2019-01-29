let matrix = new Array(9).fill(0).map(() => new Array(6).fill(0));

player = 1;
function change() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 6; j++) {
      document.getElementById(i + "" + j).innerHTML = matrix[i][j];
    }
  }
  drawBall();
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
    
    if (value.toString().substr(1, 2) < 4) {
      matrix[a][b] = value;
    }
    if (value.toString().substr(1, 2) >= 4) {
      matrix[a][b] = 0;
    
      mat(a + 1, b, 1);
      mat(a - 1, b, 1);
      mat(a, b + 1, 1);
      mat(a, b - 1, 1);
      checkForWin();
    }
    if(value.toString().substr(1, 2) >= 3 && (a==0||b==0|| a==8||b==5 )) {
      matrix[a][b] = 0;
      if(a==0) {
      mat(a + 1, b, 1);
      mat(a, b + 1, 1);
      mat(a, b - 1, 1);}
      if(b == 0) {
        mat(a + 1, b, 1);
        mat(a - 1, b, 1);
        mat(a, b + 1, 1);
      }
      if(a==8) {
        mat(a - 1, b, 1);
        mat(a, b + 1, 1);
        mat(a, b - 1, 1);
      }
      if(b==5) {
        mat(a + 1, b, 1);
        mat(a - 1, b, 1);
        mat(a, b - 1, 1);
      }
      checkForWin();
    }
    if(value.toString().substr(1, 2) >= 2&&((a==0&&b==0)||(a==0&&b==5)||(a==8&&b==5)||(a==8&&b==0))){
      matrix[a][b] = 0;
      if(a==0&&b==0) {
        mat(a + 1, b, 1);
        mat(a, b + 1, 1);
      }
      if((a==0&&b==5)){
        mat(a + 1, b, 1);
        
        mat(a, b - 1, 1);
      }
      if((a==8&&b==5)) {
        mat(a - 1, b, 1);
        
        mat(a, b - 1, 1);
      }
      if((a==8&&b==0)) {
        mat(a - 1, b, 1);
        
        mat(a, b + 1, 1);
      }
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
      const x = document.getElementById(i + "" + j).innerHTML;
      if (x.substr(0, 1) > 0) {
        if (x.substr(0, 1) == 1) {
          flag1 = 1;
        }
        if (x.substr(0, 1) == 2) {
          flag2 = 1;
        }
      }
    }

  }
  if (flag1 = 0 && flag2 == 1) {
    console.log('player 2');
  }
  if (flag1 = 1 && flag2 == 0) {
    console.log('player 1');
  }
}
change();
function drawBall() {
var valueq = document.getElementById('00').innerHTML;

if(valueq.substr(1,2)==1)
{
 var y = `<a class="single"></a><p id="00" onclick="mat(0,0,0)">${valueq}</p>`;
 var x = document.getElementById('b00').innerHTML=y;}
}