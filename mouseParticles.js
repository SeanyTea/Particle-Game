export class mouseParticles {
    constructor(mouse){
        this.x = mouse.x;
        this.y = mouse.y;
    }
    draw(ctx){
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x+50,this.y+50);
        ctx.stroke();

    }
}