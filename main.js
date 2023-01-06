import {mouseParticles} from './mouseParticles.js';
import { bulletParticles } from './bulletParticles.js';
import { objectiveParticles } from './objectiveParticles.js';
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
            bulletParticleArray.push(new bulletParticles(mouse))
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


    // * Animations
    let frame = 0;
    function animate(){
        // Clear the screen at each iteration
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleMouseParticles();
        handleBulletParticles();
        frame++;
        requestAnimationFrame(animate)

    }
    

})


