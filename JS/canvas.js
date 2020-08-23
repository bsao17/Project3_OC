"use strict";


class Canvas {
  constructor() {
      this.canvas = $('#canvasDisplay');
      this.context = this.canvas[0].getContext("2d");
      this.draw = false;
      this.clear = $('#buttonClearSignature');
      this.canvas_width = this.canvas.prop('width');
      this.canvas_height = this.canvas.prop('height');
      this.clear = $('#buttonClearSignature');
      this.context.lineWidth = 3;
      this.context.lineCap = "round";
      this.context.strokeStyle = "#5cadd3";
      this.initCanvas();   
      this.count = 0;
      this.canvasEmpty = true;
  }

  startPosition(e) {
      this.draw = true; 
      this.canvasEmpty =true
      this.paint(e);
  }

  startPositionPad(e) {
      e.preventDefault();
      this.draw = true; 
      this.paintPad(e);
  }

  stopPosition() {
      this.draw = false; 
      this.context.beginPath();
  }

  paint(e) {
      if (!this.draw) return; 
      // to draw we take the positions of mouse and and initialize this draw and do the line with lineTo function
      this.context.lineTo(e.offsetX, e.offsetY);
      this.context.stroke(); 
      this.context.beginPath();
      this.context.moveTo(e.offsetX, e.offsetY);
      this.count++;
  }

  paintPad(e) {
      let x = e.originalEvent.touches[0].clientX;
      let y = e.originalEvent.touches[0].clientY;  
      if (!this.draw) return; 
      this.context.lineTo(x - this.canvas[0].getBoundingClientRect().left,
                          y - this.canvas[0].getBoundingClientRect().top);
      this.context.stroke(); 
      this.context.beginPath();
      this.context.moveTo(x - this.canvas[0].getBoundingClientRect().left,
                          y - this.canvas[0].getBoundingClientRect().top);
      this.count++;
      if (this.count < 50) {
          $('#message_canvas').text('Votre signature n\'est pas assez longue.');
          $('#confirm_location').hide();
      } else {
          $('#message_canvas').text('');
          $('#confirm_location').show();
      }               
  };

  // init different actions do with mouse or finger (for touchscreen)
  initCanvas() {
      this.canvas.mousedown(e => { this.startPosition(e); this.canvasEmpty = false; this.canvasEmptydisplay(); });
      this.canvas.mouseup(() => { this.stopPosition() });
      this.canvas.mouseleave(() => { this.stopPosition() });
      this.canvas.mousemove(e => { this.paint(e);});
      this.canvas.on("touchstart", e => { this.startPositionPad(e) });
      this.canvas.on("touchend", () => { this.stopPosition() ;
      });
      this.canvas.on("touchmove", e => { this.paintPad(e) });
      // clear the canvas on click button "clear" or after click on reservation button
      this.clear.click(() => {
          this.context.clearRect(0, 0, this.canvas_width, this.canvas_height);
         
      });
     
  };

    canvasEmptydisplay() {
      if (this.canvasEmpty) {
        document.querySelector("#buttonConfirmResa").style.opacity = "1";
      } else if (this.canvasEmpty == false) {
        document.querySelector("#buttonConfirmResa").style.opacity = "1";
      }
    }
};  

const canvas = new Canvas();


