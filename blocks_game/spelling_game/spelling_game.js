
var count = 0; 
var score = 0;
var level_count = 1;
var total_level = 8;

const letters = document.querySelectorAll('.letter');
const boxes = document.querySelectorAll('.box');

const apple_boxes = document.querySelector('.boxes_apple').children;
console.log(apple_boxes);
console.log("number of apple boxes "+apple_boxes.length);
const apple_game = document.querySelector('.apple_game')
const correct = document.querySelector('.correct');



function onclick_done_apple(e){ 
    console.log("number of apple boxes "+apple_boxes.length);
    
    if(count < apple_boxes.length){
        console.log("sorry, you have to spell the word.");
        console.log("number of letters "+count);
    }
    else 
    {
    apple_done_btn_clicked = true;
    console.log(count);
    for (let i = 0; i < apple_boxes.length; i++) 
    {
        var box_id = apple_boxes[i].id;
        var item_id = apple_boxes[i].firstChild.id;
    
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
    if(count === apple_boxes.length)
    {
        console.log(count);
        score = score + 5;
        correct.classList.remove('hide');
        window.alert("your current score: " + score);
    }
    else cross.classList.remove('hide');
    
    }
}

function done(){
    console.log('done btn pressed');
    if(level_count === 1) onclick_done_apple();
}

function resetCurrentWord(e){
    console.log("reset btn clicked");
    if(level_count === 1){
        for (let i = 0; i < boxes.length; i++){
            boxes[i].removeChild();
        }
    }
}

function showHint(e){
    console.log("hint btn clicked");
    console.log(apple_boxes[0].appendChild('.item_a'));
    if(level_count === 1){
        apple_boxes[0].appendChild('.item_a');
        apple_boxes[4].appendChild('.item_e');
      
    } 
}

function goToNextLevel(){
    // if (done_button_clicked){
        while(level_count < total_level){
            if(level_count === 1){
                document.querySelector('.apple_game').style.display = "none";
                document.querySelector('.orange_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 2){
                document.querySelector('.orange_game').style.display = "none";
                document.querySelector('.car_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 3){
                document.querySelector('.car_game').style.display = "none";
                document.querySelector('.rose_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 4){
                document.querySelector('.rose_game').style.display = "none";
                document.querySelector('.tree_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 5){
                document.querySelector('.tree_game').style.display = "none";
                document.querySelector('.mug_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 6){
                document.querySelector('.mug_game').style.display = "none";
                document.querySelector('.cupcake_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            if(level_count === 7){
                document.querySelector('.cupcake_game').style.display = "none";
                document.querySelector('.books_game').style.display = "block";
                level_count++;
                console.log("going to level " + level_count);
                break;
            }
            else break;
        }    
}



/***** draggable elements */

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
    e.preventDefault();
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
