class InputHandler {
    constructor(ctx, tower_manager) {
      this.ctx = ctx;
      this.tower_manager = tower_manager;
      this.canvas = ctx.canvas;
      this.coordinate_finder = new ElementCoordinateFinder(this.canvas);
      this.add_event_listeners();
      this.enable_input();
    }
  
    add_event_listeners() {
      debug.msg('Adding event listeners');
      const self = this;
      this.canvas.addEventListener('mousedown', (event) => {
        self.on_canvas_mousedown(event);
      }, false);
      this.canvas.addEventListener('mousemove', (event) => {
        self.on_canvas_mousemove(event);
      }, false);
      this.canvas.addEventListener('mouseup', (event) => {
        self.on_canvas_mouseup(event);
      }, false);
    }
  
    on_canvas_mousedown(event) {
      if (!this.allow_input) return;
      const coords = this.coordinate_finder.get_mouse_coordinates(event);
      this.disk = this.tower_manager.get_clicked_disk(coords);
      if (!this.disk || !this.disk.is_top_disk()) return;
  
      this.mouse_delta = coords.subtract(this.disk.position);
      this.dragging = true;
    }
  
    on_canvas_mousemove(event) {
      if (!this.dragging) return;
      const coords = this.coordinate_finder.get_mouse_coordinates(event);
      this.disk.move_to(coords.subtract(this.mouse_delta));
      this.tower_manager.draw();
      this.show_distance_to_each_tower();
    }
  
    show_distance_to_each_tower() {
      debug.clear();
      debug.msg('Distance to tower 1: ' + this.disk.centre.distance_to(this.tower_manager.towers[0].top));
      debug.msg('Distance to tower 2: ' + this.disk.centre.distance_to(this.tower_manager.towers[1].top));
      debug.msg('Distance to tower 3: ' + this.disk.centre.distance_to(this.tower_manager.towers[2].top));
    }
  
    on_canvas_mouseup(event) {
      if (!this.dragging) return;
      this.dragging = false;
      const closest_tower = this.tower_manager.find_closest_tower(this.disk.centre);
      this.disk.transfer_to_tower(closest_tower);
  
      this.tower_manager.draw();
    }
  
    disable_input() {
      debug.msg('Input disabled');
      this.allow_input = false;
    }
  
    enable_input() {
      debug.msg('Input enabled');
      this.allow_input = true;
    }
  }
  