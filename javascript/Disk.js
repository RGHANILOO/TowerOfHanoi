class Disk {
    constructor(tower, width, colour) {
      this.colour = colour;
      this.width = width;
      this.height = Disk.height;
      this.transfer_to_tower(tower);
    }
  
    static height = 15;
  
    move_to(point) {
      this.position = point;
      this.centre = new Point(this.position.x + this.width / 2, this.position.y + this.height / 2);
    }
  
    transfer_to_tower(destination) {
      const top_disk = destination.get_top_disk();
      if (top_disk && top_disk.width < this.width) {
        destination = this.tower;
      }
  
      if (this.tower) {
        this.tower.remove_disk(this);
      }
      this.move_to(
        new Point(
          destination.position.x + (destination.base.width - this.width) / 2,
          destination.disks_top - this.height
        )
      );
      destination.add_disk(this);
      this.tower = destination;
  
      this.on_disk_transferred();
    }
  
    draw() {
      this.tower.ctx.beginPath();
      this.tower.ctx.rect(this.position.x, this.position.y, this.width, this.height);
      this.tower.ctx.closePath();
  
      this.tower.ctx.save();
      this.tower.ctx.fillStyle = this.colour;
      this.tower.ctx.fill();
      this.tower.ctx.restore();
    }
  
    is_clicked_on(point) {
      return (
        point.x >= this.position.x &&
        point.x < this.position.x + this.width &&
        point.y >= this.position.y &&
        point.y < this.position.y + this.height
      );
    }
  
    is_top_disk() {
      return this === this.tower.get_top_disk();
    }
  
    toString() {
      return `Disk(width=${this.width}, colour=${this.colour})`;
    }
  
    on_disk_transferred() {}
  }
  