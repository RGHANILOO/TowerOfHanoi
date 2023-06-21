class GameState {
    constructor(tower_manager) {
      this.tower_manager = tower_manager;
      this.connect_to_disks();
      this.last_complete_tower = this.find_complete_tower();
    }
  
    on_disk_transferred() {
      const complete_tower = this.find_complete_tower();
      if (complete_tower && complete_tower !== this.last_complete_tower) {
        this.last_complete_tower = complete_tower;
        this.on_victory();
      }
    }
  
    find_complete_tower() {
      const towers = this.tower_manager.towers;
      for (const i in towers) {
        if (towers[i].disks.length === this.count_total_disks()) return towers[i];
      }
    }
  
    count_total_disks() {
      return this.tower_manager.get_all_disks().length;
    }
  
    connect_to_disks() {
      const disks = this.tower_manager.get_all_disks();
      for (const i in disks) {
        // Using an arrow function to preserve the 'this' reference to the GameState object.
        disks[i].on_disk_transferred = () => {
          this.on_disk_transferred();
        };
      }
    }
  
    // Called when the player is victorious. External agents may override this method to implement victory behavior.
    on_victory() {}
  }
  