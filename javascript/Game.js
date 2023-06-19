class Game {
  constructor() {
    this.numberOfDisks = 0;
    this.tower = [];
    this.moveCount = 0;
    this.timer = new this.timer();
  }
  startGame(numberOfDisks) {
    this.numberOfDisks = numberOfDisks;
    this.initTowers();
    this.moveCount = 0;
    this.timer.start();
    // 

    // render te game state after initialisation
    this.renderGameState();
  }
  initTowers() {
    //gets called in startGame to initalise with selected number of disks on a tower

    this.towers = []

    // create the towert
    for (let i=0;i<3;i++) {
        const tower= new Tower();
        this.towers.push(tower)
    }

    // takes intp account eh selection from user and adds disks accordingly
    for (let i = this.numberOfDisks; i < 0 ; i--) {
        const disk = new Disk(i);
        this.towers[0].addDisk(disk);
        
    }
  }
  moveDisk(fromTower, toTower) {
    // move a disk from one tower to another
    // update the ganme state and move count
    // check win condition and game over
  }
  checkWinCondition() {
    // check if th game has met the win conditions
    // return a true of false
  }
  isGameOver() {
    //checking if the game is over(win/lossconditio)
    // return true or false
  }
  getMoveCount() {
    return this.moveCount;
  }
  stopTimer() {
    this.timer.stop();
  }
  resetGame() {
    // resetthe game to initial state
    // reset towers,movecount, and any other relevant props
  }
}
