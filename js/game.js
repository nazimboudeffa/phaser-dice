var d;

bootState = {
  preload: function() {

  },
  create: function() {
    this.state.start('preloader');
  }
},

preloadState = {
  preload: function() {
    this.load.atlasJSONHash('dice', 'assets/dice.png', 'assets/dice.json');
  },
  create: function() {
    this.game.state.start('play');
  }
},

playState = {
  create: function() {
    this.game.stage.backgroundColor = '#0a6c03';
    this.addDice();
  },
  addDice: function() {
    d = new Dice(game.world.centerX, game.world.centerY);
    d.inputEnabled = true;
    d.events.onInputDown.add(this.rollDice, this);
  },
  rollDice: function(type) {
    d.enableDice();
    d.roll();
  },
  rollDiceComplete: function() {
    d.disableDice();
  }
};

var game = new Phaser.Game(360, 640);
game.state.add('boot', bootState);
game.state.add('preloader', preloadState);
game.state.add('play', playState);

game.state.start('boot');
