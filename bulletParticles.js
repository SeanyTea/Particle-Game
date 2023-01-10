export class bulletParticles{
    constructor(pos_x,pos_y){
        this.x = pos_x;
        this.y = pos_y;
        this.color = 'white';
        this.size = Math.random()*7.5+1;
        this.speedX = Math.random()*4-2.5;
        this.speedY = Math.random()*4-2.5;
        this.normSpeed = Math.sqrt(this.speedX*this.speedX + this.speedY* this.speedY);
        this.sizeX = this.size*this.speedX/this.normSpeed;
        this.sizeY = this.size*this.speedY/this.normSpeed;
        
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.3;
    }
    draw(ctx){
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x + this.sizeX,this.y+this.sizeY);
        ctx.stroke();
        ctx.closePath();
    }
}