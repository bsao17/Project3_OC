
class Signature{
    constructor(canvas){
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.lineColor = this.ctx.strokeStyle ='blue';
        this.lineSize = this.ctx.lineWidth = "2";
        this.print = false;

         
    }

    makeSignature(){

        this.canvas.addEventListener('mousedown', (e)=>{
            let X = e.offsetX;
            let Y = e.offsetY;
            this.print = true;
            this.ctx.beginPath();
            console.log(X + 'x', Y + 'Y');
        })

        this.canvas.addEventListener('mousemove', (e)=>{
            if(this.print == true){
                let X = e.offsetX;
                let Y = e.offsetY;
                this.drawing(X, Y);
                console.log(X + 'X', Y + 'Y');
            }
        })

        this.canvas.addEventListener('mouseup', ()=>{
            this.print = false;
            
        })
    }

    drawing(x, y){
        this.lineColor;
        this.lineSize;
        this.ctx.lineTo(x, y)
        this.ctx.stroke();
        
    }
}

const signature = new Signature('canvasDisplay');
signature.makeSignature();