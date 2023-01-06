export class mouseParticles {
    constructor(mouse){
        this.x = mouse.x;
        this.y = mouse.y;
    }
    draw(ctx){
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x,this.y,5,0,Math.PI*2);
        console.log("IN LOOP",this.x,this.y);
        ctx.fill();

    }
}