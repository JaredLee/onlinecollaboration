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
//MOUSE CURSOR BUBBLES

var clicks =[6, 4, 24, 9, 10, 11];
var time =[41, 90, 582, 153, 77, 200];
var word =["Steak", "Farenheit", "Galileo Galilei", "Supported Employment", "Pollution", "Radiation"];
var word2 =["paper", "Jews", "A Series Of Unfortunate Events", "William Rupertus", "Science Fiction", "Adam West"];
var score =[];
function combinescore() {
  for(var i = 0; i < clicks.length; i++){
  score.push(Math.floor(1 / (clicks[i] * time[i]) * 100000));
  }
}

//declaring funcitons
function duplicate_circle() {

var c1 = document.getElementById("circle1");
var ctx1 = c1.getContext("2d");
var click1 = clicks[0];
var time1 = time[0];
var y_cord1 = 40;
var counter1 = 0;
var blue1 = 255;
var s1 = Math.floor(1 / (click1 * time1) * 100000);
document.getElementById("score1").innerHTML = s1;
document.getElementById("word_1_1").innerHTML = word[0];
document.getElementById("word_1_2").innerHTML = word2[0];

var c2 = document.getElementById("circle2");
var ctx2 = c2.getContext("2d");
var click2 = clicks[1];
var time2 = time[1];
var y_cord2 = 40;
var counter2 = 0;
var blue2 = 255;
var s2 = Math.floor(1 / (click2 * time2) * 100000)
document.getElementById("score2").innerHTML = s2
document.getElementById("word_2_1").innerHTML = word[1];
document.getElementById("word_2_2").innerHTML = word2[1];

var c3 = document.getElementById("circle3");
var ctx3 = c3.getContext("2d");
var click3 = clicks[2];
var time3 = time[2];
var y_cord3 = 40;
var counter3 = 0;
var blue3 = 255;
var s3 = Math.floor(1 / (click3 * time3) * 100000)
document.getElementById("score3").innerHTML = s3
document.getElementById("word_3_1").innerHTML = word[2];
document.getElementById("word_3_2").innerHTML = word2[2];

var c4 = document.getElementById("circle4");
var ctx4 = c4.getContext("2d");
var click4 = clicks[3];
var time4 = time[3];
var y_cord4 = 40;
var counter4 = 0;
var blue4 = 255;
var s4 = Math.floor(1 / (click4 * time4) * 100000)
document.getElementById("score4").innerHTML = s4
document.getElementById("word_4_1").innerHTML = word[3];
document.getElementById("word_4_2").innerHTML = word2[3];

var c5 = document.getElementById("circle5");
var ctx5 = c5.getContext("2d");
var click5 = clicks[4];
var time5 = time[4];
var y_cord5 = 40;
var counter5 = 0;
var blue5 = 255;
var s5 = Math.floor(1 / (click5 * time5) * 100000)
document.getElementById("score5").innerHTML = s5
document.getElementById("word_5_1").innerHTML = word[4];
document.getElementById("word_5_2").innerHTML = word2[4];

var c6 = document.getElementById("circle6");
var ctx6 = c6.getContext("2d");
var click6 = clicks[5];
var time6 = time[5];
var y_cord6 = 40;
var counter6 = 0;
var blue6 = 255;
var s6 = Math.floor(1 / (click6 * time6) * 100000)
document.getElementById("score6").innerHTML = s6
document.getElementById("word_6_1").innerHTML = word[5];
document.getElementById("word_6_2").innerHTML = word2[5];

ctx1.fillStyle = 'rgb(255, 255, 255)';
ctx1.fillRect(20,20,710,150);
  for (var i = 0; i < click1; i++) {
    ctx1.beginPath();
    if (i > 19 && i < 21) {
      y_cord1 += 35;
      counter1 = 0;
    }
    if (i > 19 && i < 21) {
      blue1 -= 115
    }
    ctx1.strokeStyle = 'rgb(0, ' + Math.floor(blue1 - 10 * counter1) + ', 212.5)';
    ctx1.arc(40 + counter1 * 35, y_cord1, 15, 0, 2 * Math.PI, );
    ctx1.stroke();
    counter1++;
  }

  for (var i = 0; i < time1; i++) {
    ctx1.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx1.fillRect(26 + i * 1.11, 110, 30, 20);
  }

  ctx2.fillStyle = 'rgb(255, 255, 255)';
  ctx2.fillRect(20,20,710,150);
  for (var i = 0; i < click2; i++) {
    ctx2.beginPath();
    if (i > 19 && i < 21) {
      y_cord2 += 35;
      counter2 = 0;
    }
    if (i > 19 && i < 21) {
      blue2 -= 115
    }
    ctx2.strokeStyle = 'rgb(0, ' + Math.floor(blue2 - 10 * counter2) + ', 212.5)';
    ctx2.arc(40 + counter2 * 35, y_cord2, 15, 0, 2 * Math.PI, );
    ctx2.stroke();
    counter2++;
  }
  for (var i = 0; i < time2; i++) {
    ctx2.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx2.fillRect(26 + i * 1.11, 110, 30, 20);
  }

ctx3.fillStyle = 'rgb(255, 255, 255)';
ctx3.fillRect(20,20,710,150);
  for (var i = 0; i < click3; i++) {
    ctx3.beginPath();
    if (i > 19 && i < 21) {
      y_cord3 += 35;
      counter3 = 0;
    }
    if (i > 19 && i < 21) {
      blue3 -= 115
    }
    ctx3.strokeStyle = 'rgb(0, ' + Math.floor(blue3 - 10 * counter3) + ', 212.5)';
    ctx3.arc(40 + counter3 * 35, y_cord3, 15, 0, 2 * Math.PI, );
    ctx3.stroke();
    counter3++;
  }
  for (var i = 0; i < time3; i++) {
    ctx3.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx3.fillRect(26 + i * 1.11, 110, 30, 20);
  }

ctx4.fillStyle = 'rgb(255, 255, 255)';
ctx4.fillRect(20,20,710,150);
  for (var i = 0; i < click4; i++) {
    ctx4.beginPath();
    if (i > 19 && i < 21) {
      y_cord4 += 35;
      counter4 = 0;
    }
    if (i > 19 && i < 21) {
      blue4 -= 115
    }
    ctx4.strokeStyle = 'rgb(0, ' + Math.floor(blue4 - 10 * counter4) + ', 212.5)';
    ctx4.arc(40 + counter4 * 35, y_cord4, 15, 0, 2 * Math.PI, );
    ctx4.stroke();
    counter4++;
  }
  for (var i = 0; i < time4; i++) {
    ctx4.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx4.fillRect(26 + i * 1.11, 110, 30, 20);
  }

ctx5.fillStyle = 'rgb(255, 255, 255)';
ctx5.fillRect(20,20,710,150);
  for (var i = 0; i < click5; i++) {
    ctx5.beginPath();
    if (i > 19 && i < 21) {
      y_cord5 += 35;
      counter5 = 0;
    }
    if (i > 19 && i < 21) {
      blue5 -= 115
    }
    ctx5.strokeStyle = 'rgb(0, ' + Math.floor(blue5 - 10 * counter5) + ', 212.5)';
    ctx5.arc(40 + counter5 * 35, y_cord5, 15, 0, 2 * Math.PI, );
    ctx5.stroke();
    counter5++;
  }
  for (var i = 0; i < time5; i++) {
    ctx5.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx5.fillRect(26 + i * 1.11, 110, 30, 20);
  }

ctx6.fillStyle = 'rgb(255, 255, 255)';
ctx6.fillRect(20,20,710,150);
  for (var i = 0; i < click6; i++) {
    ctx6.beginPath();
    if (i > 19 && i < 21) {
      y_cord6 += 35;
      counter6 = 0;
    }
    if (i > 19 && i < 21) {
      blue6 -= 115
    }
    ctx6.strokeStyle = 'rgb(0, ' + Math.floor(blue6 - 10 * counter6) + ', 212.5)';
    ctx6.arc(40 + counter6 * 35, y_cord6, 15, 0, 2 * Math.PI, );
    ctx6.stroke();
    counter6++;
  }
  for (var i = 0; i < time6; i++) {
    ctx6.fillStyle = 'rgb(' + Math.floor(255 - 0.2 * i) + ', 0, 0)';
    ctx6.fillRect(26 + i * 1.11, 110, 30, 20);
  }
}

function ascendingclicks_sort () {
    var temp;
    var temp2;
    var temp3;
    var temp4;
    for (var i=0; i < clicks.length; i++){
        for (var j=i+1; j < clicks.length; j++){
            if (clicks[i] > clicks[j]){
                temp = clicks[i];
                clicks[i] = clicks[j];
                clicks[j] = temp;

                temp2 = time[i];
                time[i] = time[j];
                time[j] = temp2;

                temp3 = word[i];
                word[i] = word[j];
                word[j] = temp3

                temp4 = word2[i];
                word2[i] = word2[j];
                word2[j] = temp4
            }
        }
    }
    duplicate_circle();
}

function descendingclicks_sort () {
  var temp;
  var temp2;
  var temp3;
  var temp4;
  for (var i=0; i < clicks.length; i++){
      for (var j=i+1; j < clicks.length; j++){
          if (clicks[i] < clicks[j]){
              temp = clicks[i];
              clicks[i] = clicks[j];
              clicks[j] = temp;

              temp2 = time[i];
              time[i] = time[j];
              time[j] = temp2;

              temp3 = word[i];
              word[i] = word[j];
              word[j] = temp3

              temp4 = word2[i];
              word2[i] = word2[j];
              word2[j] = temp4
          }
      }
  }
  duplicate_circle();
}

function ascendingtime_sort () {
  var temp;
  var temp2;
  var temp3;
  var temp4;
  for (var i=0; i < time.length; i++){
      for (var j=i+1; j < time.length; j++){
          if (time[i] > time[j]){
              temp = time[i];
              time[i] = time[j];
              time[j] = temp;

              temp2 = clicks[i];
              clicks[i] = clicks[j];
              clicks[j] = temp2;

              temp3 = word[i];
              word[i] = word[j];
              word[j] = temp3

              temp4 = word2[i];
              word2[i] = word2[j];
              word2[j] = temp4
          }
      }
  }
  duplicate_circle();
}

function descendingtime_sort () {
var temp;
var temp2;
var temp3;
var temp4;
for (var i=0; i < time.length; i++){
    for (var j=i+1; j < time.length; j++){
        if (time[i] < time[j]){
            temp = time[i];
            time[i] = time[j];
            time[j] = temp;

            temp2 = clicks[i];
            clicks[i] = clicks[j];
            clicks[j] = temp2;

            temp3 = word[i];
            word[i] = word[j];
            word[j] = temp3

            temp4 = word2[i];
            word2[i] = word2[j];
            word2[j] = temp4
        }
    }
}
duplicate_circle();
}

function ascendingscore_sort () {
  var temp;
  var temp2;
  var temp3;
  var temp4;
  var temp5;
  for (var i=0; i < score.length; i++){
      for (var j=i+1; j < score.length; j++){
          if (score[i] > score[j]){
              temp = score[i];
              score[i] = score[j];
              score[j] = temp;

              temp2 = clicks[i];
              clicks[i] = clicks[j];
              clicks[j] = temp2;

              temp3 = time[i];
              time[i] = time[j];
              time[j] = temp3;

              temp4 = word[i];
              word[i] = word[j];
              word[j] = temp4
  
              temp5 = word2[i];
              word2[i] = word2[j];
              word2[j] = temp5
          }
      }
  }
  duplicate_circle();
}

function descendingscore_sort () {
  var temp;
  var temp2;
  var temp3;
  var temp4;
  var temp5;
  for (var i=0; i < score.length; i++){
      for (var j=i+1; j < score.length; j++){
          if (score[i] < score[j]){
              temp = score[i];
              score[i] = score[j];
              score[j] = temp;

              temp2 = clicks[i];
              clicks[i] = clicks[j];
              clicks[j] = temp2;

              temp3 = time[i];
              time[i] = time[j];
              time[j] = temp3;

              temp4 = word[i];
              word[i] = word[j];
              word[j] = temp4
  
              temp5 = word2[i];
              word2[i] = word2[j];
              word2[j] = temp5
          }
      }
  }
  duplicate_circle();
}

var el = document.getElementById("click");
var el2 = document.getElementById("time");
var el3 = document.getElementById("effective");

var flag = 0
function click_sort() {
     if (flag == 0){
            ascendingclicks_sort();
            flag = 1;
     }
    else {
            descendingclicks_sort();
            flag = 0;
     }
}

var flagb = 0
function time_sort() {
     if (flagb == 0){
            ascendingtime_sort();
            flagb = 1;
     }
    else {
            descendingtime_sort();
            flagb = 0;
     }
}

var flagc = 0
function score_sort() {
     if (flagc == 0){
            ascendingscore_sort();
            flagc = 1;
     }
    else {
            descendingscore_sort();
            flagc = 0;
     }
}

//call functions
duplicate_circle();
combinescore();
el.addEventListener("click",click_sort)
el2.addEventListener("click",time_sort)
el3.addEventListener("click",score_sort)
