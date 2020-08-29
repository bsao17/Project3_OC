
class Signature{
    constructor(canvas){
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.lineColor = this.ctx.strokeStyle ='#58A1D5';
        this.lineSize = this.ctx.lineWidth = "1.5";
        this.print = false;
        this.canvasEmpty = true;
        this.button = false
         
    }

    makeSignature(){

        this.canvas.addEventListener('mousedown', (e)=>{
            let X = e.offsetX;
            let Y = e.offsetY;
            this.print = true;
            this.button = !this.button;
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

        this.canvas.addEventListener('mouseup', ()=>{ this.print = false; });

        this.canvas.addEventListener('mouseleave', ()=>{ this.print = false; });

        this.canvas.addEventListener('touchstart', (e)=>{
            e.preventDefault();
        })
        
    }

    drawing(x, y){
        this.lineColor;
        this.lineSize;
        this.ctx.lineTo(x, y)
        this.ctx.stroke();
        
    }

    clearCanvas(x, y){
        document.getElementById('buttonClearSignature').addEventListener('click', ()=>{
            this.ctx.clearRect(x, y, this.canvas.width, this.canvas.height);
            
        })
    }
}

const signature = new Signature('canvasDisplay');
signature.makeSignature();
signature.clearCanvas(0, 0);
