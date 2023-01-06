import {mouseParticles} from './mouseParticles.js';

window.addEventListener('load',function(){
    // * Get elements for start screen
    const startScreen = this.document.getElementById('startScreen');
    const buttonBox = document.getElementById('buttonBox');
    const howToButton = document.getElementById('howToButton');
    const playGameButton = document.getElementById('startButton');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    

    const mouseParticleArray = [];
    let mouse = {
        x:null,
        y:null,
    }
    let gameToggle = 0;
    // * Implements buttons

    playGameButton.addEventListener('click', function(){
        console.log('Start game!')
        startScreen.style.display = 'none';
        handleStart();
        
    })
    canvas.addEventListener('mousemove',function(e){
        mouse.x = e.x;
        mouse.y = e.y;
        // Add a particle to array
        console.log(mouse.x,mouse.y);
        mouseParticleArray.push(new mouseParticles(mouse));
        j++;

    })
    // ! Implement a "How to play" page
    howToButton.addEventListener('click',function(){
        buttonBox.style.display = 'none';
    })
    // ! Implement a "High Score" page


    // ! Implement "Play Game" functionality
    // Create a function to handle start.

    function handleStart(){
        canvas.style.display = 'block';
        mouseParticleArray.push(new mouseParticles(mouse));
        animate();
    }
    //create an animate function
    let j = 0;
    function animate(){
        for (let i = 0; i < mouseParticleArray.length;i++){
            mouseParticleArray[i].draw(ctx);
        }
        requestAnimationFrame(animate)

    }
    

})


