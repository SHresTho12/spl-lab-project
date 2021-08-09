const canvas = document.getElementById("dotsCanvas");
var data = { //global variable set equal to object
    canvas: null,
    ctx: null,
    clickedDot: null, //dot that was previously clicked--fromDot
    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable
        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle
        dots:null
};

function prepCanvas() { //setup resolution and size of canvas
    var res = window.devicePixelRatio || 1, //resolution
        scale = 1 / res;
    data.canvas = document.getElementById('dotCanvas'); //dots canvas
    data.ctx = data.canvas.getContext('2d'); //context
   
    data.canvas.width =window.innerWidth - 60;
    data.canvas.height = 645;
   
    // console.log(data.canvas.height);
    data.ctx.scale(res, res);
    data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function
        console.log(event.clientX,event.clientY);
        checkForDot(event);
    });
}

prepCanvas();