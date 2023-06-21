class Canvas {
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.recreate();
  }

  loadCanvas() {
    this.canvas = document.getElementById(this.canvasId);
    this.ctx = this.canvas.getContext("2d");
  }

  setWidth(width) {
    this.canvas.width = this.width = Math.max(window.innerWidth, width); // this.width can be queried by external agents.
  }

  setHeight(height) {
    this.canvas.height = this.height = height; // this.height can be queried by external agents.
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  recreate() {
    this.loadCanvas();
    const canvasPrime = this.canvas.cloneNode(false);
    this.canvas.parentNode.replaceChild(canvasPrime, this.canvas);
    this.loadCanvas();
  }
}
