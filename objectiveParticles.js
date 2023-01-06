export class objectiveParticles{
    constructor(canvas){
        this.size = Math.random(10);
        this.x = Math.random(canvas.width);
        this.y = Math.random(canvas.height);
    }

    draw(ctx){
        // ! Need to verify this
        ctx.lineWidth=25;
        ctx.strokeStyle='white';
        ctx.shadowColor='blue';
        ctx.shadowOffsetX=0;
        ctx.shadowOffsetY=0;
        ctx.shadowBlur=25;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
}