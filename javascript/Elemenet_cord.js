class ElementCoordinateFinder {
    constructor(element) {
      this.element = element;
    }
  
    get_mouse_coordinates(event) {
      return new Point(event.pageX - this.get_offset_x(), event.pageY - this.get_offset_y());
    }
  
    get_offset(type) {
      const offsetProperty = type === 'x' ? 'offsetLeft' : 'offsetTop';
      let result = this.element[offsetProperty];
      for (let parent = this.element; parent = parent.offsetParent; parent != null) {
        result += parent[offsetProperty];
      }
      return result;
    }
  
    get_offset_x() {
      return this.get_offset('x');
    }
  
    get_offset_y() {
      return this.get_offset('y');
    }
  }
  