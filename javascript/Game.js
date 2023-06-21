
const diskSelect = document.getElementById('disk-select');
const disk_count = Number(diskSelect.value);

const game = new Game(disk_count);

class Game {
  constructor(disks_count) {
    this.start_new(disks_count);
  }

  start_new(disks_count) {
    debug.msg('New game');

    this.canvas = new Canvas('canvas');
    this.tower_manager = new TowerManager(this.canvas, disks_count);
    this.input_handler = new InputHandler(this.canvas.ctx, this.tower_manager);
    this.game_state = new GameState(this.tower_manager, this.input_handler);
    this.victory_celebrator = new VictoryCelebrator(this.input_handler);

    this.game_state.on_victory = () => {
      this.victory_celebrator.on_victory();
    };

    this.render();

    this.canvas.clear();
    this.tower_manager.draw();
  }

}

// create a class of Game capturing the number of inputs from the select value as its parameter
// initialise the game with the selected number of disks or deafualt to 3 to innitalise the game within the canvas object
// create a new canvas object
// create a new tower manager object
// create a new input handler object referencing the canvas and tower manager objects
// create a new game state object referencing the tower manager and input handler objects
// create a new victory celebrator object referencing the input handler object
// render the initialised game for user to interact with
// clear the canvas
// draw the tower manager object

