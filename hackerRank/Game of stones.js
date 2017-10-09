var Player = function (id) {
	this.id = id;
	this.possibleMoves = [2];
};

Player.prototype.hasMove = function (game) {
	var hasMove = false;
  for (var i = 0; i < this.possibleMoves.length; i++) {
    if (game.numStones - this.possibleMoves[i] >= 0) {
    	hasMove = true;
    }
  }
  return hasMove;
};

Player.prototype.move = function (game) {
	game.numStones -= this.possibleMoves[0];
};

var Game = function (options) {
	this.numStones = options.numStones;
  this.player1 = options.player1;
  this.player2 = options.player2;
  this.initialize();
};

Game.prototype.initialize = function () {
  this.setCurrentPlayer(this.player1);
  this.setWinner(false);
};

Game.prototype.start = function () {
	if (!this.winner) {
    if (!this.currentPlayer.hasMove(this)) {
      this.setCurrentPlayer();
      this.setWinner(this.currentPlayer);
      console.log(this.winner.id);
      return;
    }
    this.currentPlayer.move(this);
    this.setCurrentPlayer();
    this.start();
  }
};

Game.prototype.setCurrentPlayer = function (player) {
	var currentPlayer;
	if (!player) {
    currentPlayer = (this.currentPlayer.id === 'First') ? this.player2 : this.player1;
  } else {
  	currentPlayer = player;
  }
  this.currentPlayer = currentPlayer;
};

Game.prototype.setWinner = function (winner) {
	this.winner = winner;
};

(function (nValues) {
  for (var i = 0; i < nValues.length; i++) {
    var game = new Game({
      numStones: nValues[i],
      player1: new Player('First'),
      player2: new Player('Second')
    });
    game.start();
  }
})([1,2,3,4,5,6,7,10]);
