
var count = 0; //global
var score = 0;

const apple_game = document.querySelector('.apple_game')
const orange_game = document.querySelector('.orange_game')
const correct = document.querySelector('.correct');

const b1_apple = document.querySelector('.button1_apple');
b1_apple.addEventListener('click', onclick1_apple);

const b2_apple = document.querySelector('.button2_apple');
b2_apple.addEventListener('click', onclick2_apple);

var done_button_clicked = false;
function onclick1_apple(e)
{ 
    console.log('button1 pressed');
    done_button_clicked = true;
    console.log(count);
    for (let i = 0; i < boxes.length; i++) 
    {
        var box_id = boxes[i].id;
        var item_id = boxes[i].firstChild.id;

        // console.log(box_id);
        // console.log(item_id);
    
        if(item_id === "item_p1" || item_id === "item_p2") 
        {
            if(box_id === "p1" || box_id === "p2")
            {
                count++;
                console.log(count);
            }
        }
        else if (item_id === "item_a" && box_id === "a") 
        {
            count++;
            console.log(count);
        }
        else if (item_id === "item_l" && box_id === "l") 
        {
            count++;
            console.log(count);
        }
        else if (item_id === "item_e" && box_id === "e") 
        {
            count++;
            console.log(count);
        }
    }
    if(count === boxes.length)
    {
        console.log(count);
        score = score + 5;
        correct.classList.remove('hide');
        window.alert("your current score: " + score);
    }
    else cross.classList.remove('hide');
}

function onclick2_apple(e)
{
    console.log('button2 pressed');
    if (done_button_clicked)
    {
        apple_game.classList.add('hide');
        orange_game.classList.remove('.hide');
    }
        
}



/***** draggable elements */
const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('dragstart', dragStart);
});

function dragStart(e) {
    console.log("drag started")
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/***** drop targets *****/
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');

    // get the draggable element
    
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.append(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
