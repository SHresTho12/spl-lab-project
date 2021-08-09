




const canvas = document.getElementById("dotsCanvas");
var data = { //global variable set equal to object
    canvas: null,
    ctx: null,
    clickedDot: null, //dot that was previously clicked--fromDot
    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable
        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle
        dots:null,
        is_drawing : false, 
        draw_color :"black",
        drawing_width : "2"
};

function prepCanvas() { //setup resolution and size of canvas
    var res = window.devicePixelRatio || 1, //resolution
        scale = 1 / res;
    data.canvas = document.getElementById('dotCanvas'); //dots canvas
    data.ctx = data.canvas.getContext('2d'); //context
   
    data.canvas.width =window.innerWidth - 60;
    data.canvas.height = 645;
    data.canvas.addEventListener("touchstart", start , false); 
    data.canvas.addEventListener("touchmove", draw , false); 
    data.canvas.addEventListener("mousedown", start , false); 
    data.canvas.addEventListener("mousemove", draw , false); 
    data.canvas.addEventListener("touchEnd",stop,false);
    data.canvas.addEventListener("mouseUp",stop,false);
    data.canvas.addEventListener("mouseOut",stop,false);
    // console.log(data.canvas.height);
    //data.ctx.scale(res, res);
    // data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function
    //     console.log(event.clientX,event.clientY);
    //     checkForDot(event);
    // });
}


function start(event){

data.is_drawing = true;
data.ctx.beginPath();
data.ctx.moveTo(event.clientX - data.canvas.offsetLeft,
                 event.clientY - data.canvas.offsetTop);
                

event.preventDefault();
}
function draw(event){
if(data.is_drawing){
    data.ctx.lineTo(event.clientX - data.canvas.offsetLeft,
        event.clientY - data.canvas.offsetTop);
data.ctx.strokeStyle = data.draw_color;
data.ctx.lineWidth = data.drawing_width;
data.ctx.lineCap = "round";
data.ctx.lineJoin = "round";
data.ctx.stroke();
}

event.preventDefault();
}


function stop(event){
    if(data.is_drawing){
        data.ctx.stroke();
        data.ctx.closePath();
        data.is_drawing = false;

    }
    event.preventDefault();
}
function change_color(element){
    data.draw_color = element.style.background;
}
prepCanvas();