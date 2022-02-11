function Player(turn) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
  this.playerName = 0;
}
let rollDie = function() {
  return Math.floor(6*Math.random())+1;

}

Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  alert(this.playerName + ", your turn is over.");
}

Player.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert("Sorry" + this.playerName + ", you lose your turn")
  } else {
    this.tempScore += this.roll;
  }
}


Player.prototype.winnerCheck = function() {
  if(this.totalScore >= 100) {
    alert(this.playerName + " you win!");
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.playerName = "";
}
let clearValue = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

let player1 = "";
let player2 = "";
