"use strict";

class Signature {
  constructor(displayId, buttonClear) {
    this.displayId = document.getElementById(displayId);
    this.ctx = this.displayId.getContext("2d");
    this.buttonClear = document.getElementById(buttonClear);
    this.x = 0;
    this.y = 0;
    this.painting = false;
    this.canvasEmpty = true;
  }

  makeSignature() {
    this.displayId.addEventListener("pointerdown", (e) => {
      this.painting = true;
      this.drawLine(e);
      this.canvasEmpty = false;
      this.canvasEmptydisplay();
      console.log(this.canvasEmptydisplay);
    });

    /**------------------------------------------------------------ */
    this.displayId.addEventListener("pointermove", (e) => {
      if (this.painting === true) {
        this.drawLine(e);
        this.canvasEmpty = false;
      }
    });

    /**------------------------------------------------------------ */

    window.addEventListener("mouseup", (e) => {
      this.painting = false;
      this.ctx.beginPath();
    });
  }

  /**----------------------------------------------------------------- */
  clear(x, y) {
    this.buttonClear.addEventListener("click", () => {
      this.ctx.clearRect(x, y, this.displayId.width, this.displayId.height);
      this.canvasEmpty = true;
      this.canvasEmptydisplay();
    });
  }

  /**------------------------------------------------------------------ */
  drawLine(e) {
    this.ctx.strokeStyle = "#5078A7";
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = 5;
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }

  canvasEmptydisplay() {
    if (this.canvasEmpty) {
      document.querySelector("#buttonConfirmResa").style.opacity = "0";
    } else if (this.canvasEmpty == false) {
      document.querySelector("#buttonConfirmResa").style.opacity = "1";
    }
  }
}
