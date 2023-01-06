export class mouseParticles {
    constructor(pos,hue){
        this.x = pos.x;
        this.y = pos.y;
        this.size = Math.random()*5+1;
        this.speedX = Math.random()*3-2;
        this.speedY = Math.random()*3-2;
        this.color = 'hsl(' + hue + ',100%,50%)'
    }
    update(){
        // add to speed
        this.x += this.speedX;
        this.y += this.speedY;

        // reduce size
        this.size -= 0.1;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}