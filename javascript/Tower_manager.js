class TowerManager {
    constructor(canvas, disks_count) {
      this.canvas = canvas;
      this.disks_count = parseInt(disks_count, 10);
      this.towers_count = 3;
      this.towers = [];
      this.createTowers();
      this.addInitialDisks();
    }
  
    addInitialDisks() {
      const disk_widths = this.calculateDiskWidths();
      while (width = disk_widths.pop()) {
        new Disk(this.towers[0], width, Colour.random().toString());
      }
    }
  
    draw() {
      this.canvas.clear();
      for (const tower of this.towers) {
        tower.draw();
      }
    }
  
    createTowers() {
      const diskWidths = this.calculateDiskWidths();
      const base_width = diskWidths.pop() + 30;
      const stem_height = this.disks_count * Disk.height + 40;
      const base_horizontal_separation = Math.max(16, base_width / 10);
      const horizontal_padding = 42;
      const vertical_padding = 80;
  
      const towers_width = base_width * this.towers_count + base_horizontal_separation * (this.towers_count - 1);
      this.canvas.set_width(towers_width + 2 * horizontal_padding);
      let x = (this.canvas.width - towers_width) / 2;
  
      for (let i = 0; i < this.towers_count; i++) {
        const tower = new Tower(new Point(x, vertical_padding), base_width, stem_height, this.canvas.ctx);
        this.towers.push(tower);
        x += base_width + base_horizontal_separation;
      }
      this.canvas.set_height(this.towers[0].height + 2 * vertical_padding);
    }
  
    calculateDiskWidths() {
      const disk_widths = [];
      let width = 40;
      for (let i = 0; i < this.disks_count; i++) {
        disk_widths.push(width += 20);
      }
      return disk_widths;
    }
  
    getClickedDisk(point) {
      const disks = this.getAllDisks();
      for (const disk of disks) {
        if (disk.is_clicked_on(point)) {
          return disk;
        }
      }
    }
  
    getAllDisks() {
      const disks = [];
      for (const tower of this.towers) {
        disks.push(...tower.disks);
      }
      return disks;
    }
  
    findClosestTower(point) {
      const distances = [];
      for (const tower of this.towers) {
        distances.push({
          'tower': tower,
          'distance': tower.top.distance_to(point)
        });
      }
      distances.sort((a, b) => a.distance - b.distance);
      return distances[0]['tower'];
    }
  
    toString() {
      return 'TowerManager( ' + this.towers + ' )';
    }
  }
  