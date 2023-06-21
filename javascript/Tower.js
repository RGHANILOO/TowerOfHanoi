class Tower {
    constructor(position, base_width, stem_height, ctx) {
      this.position = position;
      this.ctx = ctx;
      this.disks = [];
  
      this.base = { width: base_width, height: 20 };
      this.stem = { width: 20, height: stem_height };
      this.height = this.base.height + this.stem.height;
      this.base.position = new Point(this.position.x, this.position.y + this.stem.height);
      this.stem.position = new Point(
        this.position.x + (this.base.width / 2 - this.stem.width / 2),
        this.position.y
      );
  
      this.top = new Point(this.stem.position.x + this.stem.width / 2, this.stem.position.y);
      this.disks_top = this.base.position.y;
    }
  
    toString() {
      return `Tower(x=${this.position.x}, y=${this.position.y})`;
    }
  
    add_disk(disk) {
      this.disks.push(disk);
      this.disks_top -= disk.height;
    }
  
    remove_disk(disk) {
      this.disks.splice(this.disks.indexOf(disk), 1);
      this.disks_top += disk.height;
    }
  
    draw() {
      this.draw_self();
      this.draw_disks();
    }
  
    draw_self() {
      this.ctx.save();
      this.ctx.globalCompositeOperation = 'destination-over';
      this.ctx.beginPath();
      this.ctx.rect(this.base.position.x, this.base.position.y, this.base.width, this.base.height);
      this.ctx.rect(this.stem.position.x, this.stem.position.y, this.stem.width, this.stem.height);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }
  
    draw_disks() {
      for (const disk of this.disks) {
        disk.draw();
      }
    }
  
    get_top_disk() {
      return this.disks[this.disks.length - 1];
    }
  }
  