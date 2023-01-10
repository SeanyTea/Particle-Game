export class objectiveParticles{
    constructor(canvas){
        this.size =25;
        this.w = canvas.width;
        this.h = canvas.height;
        this.x = Math.random()*(this.w-this.size);
        this.y = Math.random()*(this.h-this.size);
        this.speedX = Math.random()*1.5+1;
        this.speedY = Math.random()*1.5+1;
        this.triangleBase = 25;

        this.triangleHeight =this.triangleBase* Math.sqrt(3)/2;
        this.angle = 1;
        this.dA = Math.random()*3;    }
    update(){
        if (this.x < 0 || (this.x + this.size) > this.w){
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || (this.y + this.size) > this.h){
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.dA;

    }
    draw(ctx){
        // ! Need to verify this
        ctx.save();
        //ctx.translate(this.x+100,this.y+100);
        //ctx.rotate(this.angle * Math.PI / 180)

        ctx.strokeStyle="rgb(252,90,184)";
        ctx.shadowColor="rgb(252,90,184)";
        ctx.shadowOffsetX=0;
        ctx.shadowOffsetY=0;
        ctx.shadowBlur=10;
        ctx.lineWidth = 5;
        ctx.strokeRect(this.x,this.y,this.size,this.size);
        ctx.restore();
    }
}