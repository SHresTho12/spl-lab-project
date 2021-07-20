//import jsonData from './jsonFile.json';
/*
var count = Object.keys(jsonData).length;
//console.log(jsonData);
console.log(count);

console(Object.keys(jsonData)[1]);
*/
var data = { //global variable set equal to object
    canvas: null,
    ctx: null,
    clickedDot: null, //dot that was previously clicked--fromDot
    dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable
        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle
};

function circleCollision(c1, c2) { //finds whether or not two circles are colliding on the screen
    var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;

    if (a > Math.sqrt((x * x) + (y * y))) return true; //colliding
    else return false; //not colliding
}

function prepCanvas() { //setup resolution and size of canvas
    var res = window.devicePixelRatio || 1, //resolution
        scale = 1 / res;
    data.canvas = document.getElementById('dots'); //dots canvas
    data.ctx = data.canvas.getContext('2d'); //context


    data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function
        checkForDot(event);
    });
}

function drawDots() { //draws the dots on the screen
    var i = 0;
    for (; i < data.dots.length; i++) { //loop 
        var d = data.dots[i];

        data.ctx.beginPath(); //begin a new path
        data.ctx.arc(d.x, d.y, 10, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle
        data.ctx.fillStyle = '#777'; //grey color
        data.ctx.fill(); //add fill to see on screen--set fillstyle
        data.ctx.closePath(); //close the path
    }
}

function startGame() {
    prepCanvas();
    drawDots();
}

function drawLine(toDot) { //drawing the line to toDot
    data.ctx.beginPath();
    data.ctx.moveTo(data.clickedDot.x, data.clickedDot.y); //position of clickedDot(fromDot)
    data.ctx.lineTo(toDot.x, toDot.y); //position of toDot

    data.ctx.lineWidth = 5;
    data.ctx.strokeStyle = '#777';
    data.ctx.stroke();
    data.ctx.closePath();
}

function checkForDot(event) { //when user clicks down on mouse, checks if user clicked on a dot 
    //event which will give pageX and pageY property

    var i = 0,
        col = null; //collision dot (dot with which we collide)
    for (; i < data.dots.length; i++) { //run a loop of dots to check whether or not it was on any of them
        var d = data.dots[i], //dot at current index
            c1 = { x: d.x, y: d.y, r: 10 }, //circle1 object
            c2 = { x: event.pageX, y: event.pageY, r: 10 }; //circle2 object--touch
        if (circleCollision(c1, c2)) col = d; //check if the circles are colliding-- if colliding, set collision dot = dot at current index
    }

    if (col !== null) { //colliding
        if (data.clickedDot !== null) {
            data.dots.fillStyle = 'black';
            drawLine(col);
        }
        data.clickedDot = col; //save previous clicked dot
    } else data.clickedDot = null; //not colliding on the screen--reset the line by clicking on empty space
}

function displayLetter(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;

    document.body.appendChild(img);
}

window.onload = function() {
    document.getElementById("strt").addEventListener("click", startGame);
    document.getElementById("hint").onclick = displayLetter('../../../images/ConnectDotsGame/A.jpg', 150, 200);
}