"use strict";

//MOUSE CURSOR BUBBLES
function cursorbubbles ()  {
const canvas = document.getElementById("canvas");
{ CanvasRenderingContext2D }
const ctx = canvas.getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let particlesArr = [];
const colors = [
    "rgba(255,255,255,0.2)",
    "rgba(255,255,255,0.2)",
    "rgba(255,255,255,0.2)",
    "rgba(255,255,255,0.2)",
    "rgba(255,255,255,0.2)",
];
const maxSize = 20;
const minSize = 0;
const mouseRadius = 30;

let mouse = {
    x: null,
    y: null
};

window.addEventListener("mousemove", event => {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        const hitLeft = this.x - this.size * 2 < 0;
        const hitRight = this.x + this.size * 2 > canvas.width;
        const hitTop = this.y - this.size * 2 < 0;
        const hitBottom = this.y + this.size * 2 > canvas.height;

        if (hitLeft || hitRight) {
            this.directionX = -this.directionX;
        }

        if (hitTop || hitBottom) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        // mouse interaction
        if (   mouse.x - this.x <   mouseRadius
            && mouse.x - this.x >  -mouseRadius
            && mouse.y - this.y <   mouseRadius
            && mouse.y - this.y >  -mouseRadius) {
                if (this.size < maxSize) {
                    this.size += 3;
                }
            }
        else if (this.size > minSize) {
            this.size -= 0.1;
        }

        if (this.size < 0) {
            this.size = 0;
        }

        this.draw();
    }
}

window.addEventListener("resize", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    init();
});

window.addEventListener("mouseout", () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

// create particle arr
function init() {
    particlesArr = [];

    for (let i = 0; i < 750; i++) {
        const size = 0;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 0.2) - 0.1;
        const directionY = (Math.random() * 0.2) - 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particlesArr.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// animate loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].update();
    }
}

init();
animate();
}
cursorbubbles ();

// var el = document.getElementById("articles");

// function obt_articles () {
//         window.alert("https://en.wikipedia.org/wiki/Special:Random");
//         window.alert("https://en.wikipedia.org/wiki/Special:Random");
// }

// el.addEventListener("click",obt_articles)


var timeElapsedMilisec = 0;
var timeElapsedSec = "0" + 0
var timeElapsedMin = 0
var timerID = -1;
    function tick() {
        //miliseconds
        timeElapsedMilisec++;
        if (timeElapsedMilisec < 10) {
            timeElapsedMilisec = "0" + timeElapsedMilisec;
        }
        document.getElementById("milisec").innerHTML = timeElapsedMilisec;
        //seconds
        if (timeElapsedMilisec == 99) {
            timeElapsedSec++;
            if (timeElapsedSec < 10) {
                timeElapsedSec = "0" + timeElapsedSec;
            }
            timeElapsedMilisec = "0" + 0;
        }
        document.getElementById("second").innerHTML = timeElapsedSec;
        //minutes
        if (timeElapsedSec == 59) {
            timeElapsedMin++;
            timeElapsedSec = "0" + 0;
        }
        document.getElementById("minute").innerHTML = timeElapsedMin;
    }

    function start() {
        if(timerID == -1){
            timerID = setInterval(tick, 10);
        }
    }

    function stop() {
        if(timerID != -1){
            clearInterval(timerID);
            timerID = -1;
        }
     }

    function reset() {
        stop();
        timeElapsedMilisec = -1;
        timeElapsedSec = "0" + 0;
        timeElapsedMin = 0;
        tick()
    }

