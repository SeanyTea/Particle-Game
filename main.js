import {mouseParticles} from './mouseParticles.js';
import { bulletParticles } from './bulletParticles.js';
import { objectiveParticles } from './objectiveParticles.js';
import { enemyParticles } from './enemyParticles.js';
window.addEventListener('load',function(){
    // * Get elements for start screen
    const startScreen = this.document.getElementById('startScreen');
    const buttonBox = document.getElementById('buttonBox');
    const howToButton = document.getElementById('howToButton');
    const playGameButton = document.getElementById('startButton');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    

    const mouseParticleArray = [];
    const bulletParticleArray = [];
    const objectiveParticleArray= [];
    const enemyParticleArray = [];
    let mouse = {
        x:null,
        y:null,
    }
    let gameToggle = 0;
    let hue = 0;
    // * Implements buttons

    playGameButton.addEventListener('click', function(){
        console.log('Start game!')
        startScreen.style.display = 'none';
        handleStart();
        
    })
    canvas.addEventListener('mousemove',function(e){
        mouse.x = e.x;
        mouse.y = e.y;
        hue++;
        // Add a particle to array
        for (let i = 0; i < 5; i++){
            mouseParticleArray.push(new mouseParticles(mouse,hue));

        }

    })
    window.addEventListener('keypress', function(e){
        for (let i = 0; i < 50; i++){
            bulletParticleArray.push(new bulletParticles(mouse.x,mouse.y))
        }
    })
    // ! Implement a "How to play" page
    howToButton.addEventListener('click',function(){
        buttonBox.style.display = 'none';
    })
    // ! Implement a "High Score" page

    // ! Implement bullets

    // ! Implement friendly
    // ! Implement enemies
    
    // * Start handling
    function handleStart(){
        canvas.style.display = 'block';
        // set canvas height and width
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        animate();
    }
    // * Particle handling

    function handleMouseParticles(){
        for (let i =  0; i < mouseParticleArray.length;i++){
            mouseParticleArray[i].update(ctx);
            mouseParticleArray[i].draw(ctx);
            if (mouseParticleArray[i].size < 0.2){
                mouseParticleArray.splice(i,1);
                i--;
            }
        }
    }
    function handleBulletParticles(){
        for (let i =0; i < bulletParticleArray.length;i++){
            bulletParticleArray[i].update()
            bulletParticleArray[i].draw(ctx);

            if (bulletParticleArray[i].size < 0.2){
                bulletParticleArray.splice(i,1);
                i--;
            }
        }
    }
    function handleObjectiveParticles(){
        for (let i = 0; i < objectiveParticleArray.length; i++){
            let objective = objectiveParticleArray[i]
            objective.update();
            objective.draw(ctx);

            // * check if there is a mouse collision

            if (mouse.x <= objective.x || mouse.x >= objective.x+objective.size || mouse.y <= objective.y || mouse.y >= objective.y+objective.size){
                continue;
            }
            objectiveParticleArray.splice(i,1)
            i--;
            for (let i = 0; i < 50; i++){
                bulletParticleArray.push(new bulletParticles(objective.x,objective.y));
            }
        }
    }

    function handleEnemyParticles(){
        for (let i = 0; i < enemyParticleArray.length;i++){
            const enemy = enemyParticleArray[i];
            enemy.update(mouse);
            ctx.save();
            enemy.draw(ctx);
            for (let j = 0; j < bulletParticleArray.length;j++){
                const isPointInPath = ctx.isPointInPath(enemy.sprite,bulletParticleArray[j].x,bulletParticleArray[j].y);
                if (isPointInPath == true){
                    console.log('yes')
                    enemyParticleArray.splice(i,1);
                    i--;
                    break; 
                    }
                }
            ctx.restore();

            }
        }
    


    // * Animations
    let frame = 0;
    function animate(){
        // Clear the screen at each iteration
        if (frame%250 == 0){
            objectiveParticleArray.push(new objectiveParticles(canvas));
            enemyParticleArray.push(new enemyParticles(canvas));
        }
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleMouseParticles();
        handleBulletParticles();
        handleObjectiveParticles();
        handleEnemyParticles();
        frame++;
        requestAnimationFrame(animate)

    }
    

})


