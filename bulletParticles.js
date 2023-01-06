export class bulletParticles{
    constructor(pos){
        this.x = pos.x;
        this.y = pos.y;
        this.color = 'white';
        this.size = Math.random()*15+1;
        this.speedX = Math.random()*4-2;
        this.speedY = Math.random()*4-2;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.3;
    }
    draw(ctx){
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x + this.size,this.y+this.size);
        ctx.stroke();
        ctx.closePath();
    }
}