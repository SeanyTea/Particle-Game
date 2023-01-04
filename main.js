import {mouseParticles} from './mouseParticles.js';

window.addEventListener('load',function(){
    // * Get elements for start screen
    const startScreen = this.document.getElementById('startScreen');
    const buttonBox = document.getElementById('buttonBox');
    const howToButton = document.getElementById('howToButton');
    const playGameButton = document.getElementById('startButton');

    // * Implements buttons

    playGameButton.addEventListener('click', function(){
        console.log('Start game!')
        startScreen.style.display = 'none';
        const gameLoop = new Game;
        gameLoop.startGame();
    })
    // ! Implement a "How to play" page
    howToButton.addEventListener('click',function(){
        buttonBox.style.display = 'none';
    })
    // ! Implement a "High Score" page

    // ! Implement "Play Game" functionality
})

class Game {
    constructor(){
        this.mouseParticleArray = [];
        this.mouse = {
            x: null,
            y: null,
        }
        this.ctx = null;
    }
    drawCanvas(){
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.display = 'block';
        
    }

    startGame(){
        this.drawCanvas();
        this.animate();
    }

    animate(){
        this.canvas.addEventListener('mousemove',function(e){
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            for (let i = 0; i<5;i++){
                this.mouseParticleArray.push(new mouseParticles)
            }
            console.log(this.mouseParticleArray.length)
        })
        requestAnimationFrame(animate);
    }
    
}
