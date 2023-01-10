export class enemyParticles{
    constructor(canvas){
        this.size_x = 20;
        this.size_y = 40;
        this.size = 20;
        this.x = Math.random()*(canvas.width - this.size_x);
        this.y = Math.random()*(canvas.height - this.size_y);
        this.dA = Math.random()*3;
        this.angle = 1;
        this.color = 'white';

    }
    update(mouse){
        // update speed
        this.speedX = (this.x - mouse.x);
        this.speedY = (this.y- mouse.y);
        this.velocityX = 2*this.speedX/(Math.sqrt(this.speedX*this.speedX + this.speedY*this.speedY));
        this.velocityY = 2*this.speedY/(Math.sqrt(this.speedX*this.speedX + this.speedY*this.speedY));
        this.x -= this.velocityX;
        this.y -= this.velocityY;
        this.angle += this.dA;
    }
    draw(ctx){
        let triangleBase = 30;
        let triangleHeight = 1/2*Math.sqrt(3)*triangleBase;
        this.sprite = new Path2D();
        ctx.strokeStyle = 'white';

        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle * Math.PI / 180)
    
        ctx.beginPath();
        this.sprite.moveTo(0, -triangleBase/2);
        this.sprite.lineTo(0, triangleBase/2);
        
        this.sprite.lineTo(0 + triangleHeight, 0);
        this.sprite.lineTo(0, -triangleBase/2)
        this.sprite.shadowColor = "rgba(0,255,255, 1)";
        this.sprite.shadowOffsetX = 3; 
        this.sprite.shadowOffsetY = 3;
        this.sprite.shadowBlur = 10;
        ctx.closePath();
        ctx.stroke(this.sprite);

    }
}
