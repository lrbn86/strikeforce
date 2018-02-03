var HEIGHT = 800;
var WIDTH = 600;

var game = new Phaser.Game(HEIGHT, WIDTH, Phaser.AUTO, '', {preload: preload, create: create, update: update});

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
    game.add.sprite(HEIGHT / 2, WIDTH /2, 'star');
}
 
function update() {}
