import numberJson from '../../../Assests/dotsGameResource/images_json/numbersJson.json';

let resultArray;
let actualObject;
let score = 0;
let edges = 0;
let scaleofdevice = window.devicePixelRatio;

// var count = Object.keys(jsonData).length;

// console.log(count);
var nextButton = document.getElementById('nextButton');
var checkButton = document.getElementById('check');
var scoreBar = document.getElementById('score');
let dotsNumber = 0;
var data = { //global variable set equal to object
    canvas: null,
    ctx: null,
    clickedDot: null, //dot that was previously clicked--fromDot
    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable
        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle
        dots:null
};

//creating the object that will hold result
function resultObject(number){
    resultArray = JSON.parse(JSON.stringify(numberJson[number]));
    let length = Object.keys(resultArray).length;
    for(let i = 1 ; i<=length ; i++){
        let indexElement = 'v' + i.toString();
        for(let j =1 ; j <=length ; j++){
            let indexElement2 = 'v' + j.toString();
            if( resultArray[indexElement][indexElement2] = 1) edges++;
            resultArray[indexElement][indexElement2] = 0;
        }
    }
}


//Creating the array for the dots position
function dotsIndex(arg){
    
    let dots = [];
    let length = Object.keys(arg).length;
    for(let i = 1 ; i <= length;i++){
        let indexElement = 'v' + i.toString();
        var width = (arg[indexElement].cx/1920)*data.canvas.width, height = (arg[indexElement].cy/1080)*data.canvas.height;
        let index = {x:width, y:height };
        dots.push(index);
    }
    console.log(data.dots);
    return dots;

}



//Dynamically changing the alphabet
nextButton.addEventListener('click' , ()=> {
   
    prepCanvas();
    initilizeDots();
    drawDots();
    data.clickedDot =null;
} );




//finds whether or not two circles are colliding on the screen
function circleCollision(c1, c2) { 
    var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;

    if (a > Math.sqrt((x * x) + (y * y))) return true; //colliding
    else return false; //not colliding
}

function initilizeDots(){
     dotsNumber = Math.floor(Math.random() * 5);
     console.log(dotsNumber);
     
     actualObject = numberJson[dotsNumber];
     
    data.dots = dotsIndex(numberJson[dotsNumber]);
     resultObject(dotsNumber);
    }

function prepCanvas() { //setup resolution and size of canvas
    var res = window.devicePixelRatio || 1, //resolution
        scale = 1 / res;
    data.canvas = document.getElementById('dots'); //dots canvas
    data.ctx = data.canvas.getContext('2d'); //context
   
    data.canvas.width =window.innerWidth * scale;
    data.canvas.height =window.innerHeight * scale;
    data.canvas.style.width =window.innerWidth *scale + 'px';
    data.canvas.style.height = window.innerHeight * scale + 'px';
    // console.log(data.canvas.height);
    data.ctx.scale(res, res);
    data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function
        console.log(event.clientX,event.clientY);
        checkForDot(event);
    });
}

function drawDots() { //draws the dots on the screen
    var i = 0;
    for (; i < data.dots.length; i++) { //loop 
        var d = data.dots[i];
        //var width = (d.x/1920)*data.canvas.width;
        //var height = (d.y/1080)*data.canvas.height;
        data.ctx.beginPath(); //begin a new path
        data.ctx.arc(d.x, d.y, 15/scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle
        data.ctx.fillStyle = '#ffb900'; //grey color
        data.ctx.fill(); //add fill to see on screen--set fillstyle
        data.ctx.closePath(); //close the path
    }
}


//Score Counting 
function scoreCount(dot1 , dot2){


resultArray[dot1][dot2] = 1;
console.log(resultArray[dot1][dot2]);
resultArray[dot2][dot1] = 1;

console.log(resultArray);
}

//find the dots
function findDots(dot1 , dot2){
    let length = Object.keys(resultArray).length;
    let d1 ,d2;
    for(let i  = 1 ; i<= length ; i++){
        let indexElement = 'v' + i.toString();
        var dotx = (resultArray[indexElement].cx/1920)*data.canvas.width,  doty = (resultArray[indexElement].cy/1080)*data.canvas.height;
        if(dot1.x == dotx && dot1.y == doty ) d1 = indexElement;
        else if(dot2.x == dotx && dot2.y == doty) d2 = indexElement;
    }
    console.log(d1,d2);
    scoreCount(d1,d2);
}



function startGame() {
    resetValues();
    
    score = 0;
    
}

function drawLine(toDot) { //drawing the line to toDot
    data.ctx.beginPath();
   //var width = (data.canvas.width * clickedDot.x) /1920 , height = (data.canvas.height * clickedDot.y)/1080,width2 = (data.canvas.width * toDot.x) /1920 , height = (data.canvas.height * toDot.y) /1080;
    data.ctx.moveTo(data.clickedDot.x, data.clickedDot.y); //position of clickedDot(fromDot)
    data.ctx.lineTo(toDot.x, toDot.y); //position of toDot

    data.ctx.lineWidth = 5;
    data.ctx.strokeStyle = '#777';
    data.ctx.stroke();
    data.ctx.closePath();
    findDots(toDot , data.clickedDot);
}

function checkForDot(event) { //when user clicks down on mouse, checks if user clicked on a dot 
    //event which will give pageX and pageY property

    var i = 0,
        col = null; //collision dot (dot with which we collide)
    for (; i < data.dots.length; i++) { //run a loop of dots to check whether or not it was on any of them
        var d = data.dots[i], //dot at current index
            //width = (data.canvas.width * d.x)/1920,height = (data.canvas.height *d.y)/1080,
            c1 = { x: d.x, y: d.y, r: 15/scaleofdevice }, //circle1 object
            c2 = { x: event.clientX/scaleofdevice, y: event.clientY/scaleofdevice, r: 15/scaleofdevice}; //circle2 object--touch
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
    // document.getElementById("hint").onclick = displayLetter('../../../images/ConnectDotsGame/A.jpg', 150, 200);
}



checkButton.addEventListener('click',()=>{
    console.log(actualObject);
    console.log(resultArray);
    let length = Object.keys(resultArray).length;
    for(let i = 1 ; i<=length ; i++){
        let indexElement = 'v' + i.toString();
        for(let j =1 ; j <=length ; j++){
            let indexElement2 = 'v' + j.toString();
            if(resultArray[indexElement][indexElement2] == actualObject[indexElement][indexElement2]) score++;
            if(resultArray[indexElement][indexElement2] != actualObject[indexElement][indexElement2]) score--;
        }
    }
    scoreBar.innerHTML = Math.floor(score/edges * 10);

   
    resetValues();
    
})

function resetValues(){
    
    data.clickedDot =null;
    resultArray = null;
    actualObject = null;
    prepCanvas();
    initilizeDots();
    drawDots();
}