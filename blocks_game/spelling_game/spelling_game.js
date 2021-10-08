var score = 0;
var level_count = 1;
var total_level = 8;

const letters = document.querySelectorAll('.letter');
const boxes = document.querySelectorAll('.box');
const apple_game = document.querySelector('.apple_game')
const correct = document.querySelector('.correct');

const apple_boxes = document.querySelector('.boxes_apple').children;
const orange_boxes = document.querySelector('.boxes_orange').children;
const car_boxes = document.querySelector('.boxes_car').children;

const apple_letters = document.querySelector('.draggables_apple').children;

function checkSpellingApple(e){ 
    var count = 0;
    
    // if(count < apple_boxes.length){
    //     console.log("sorry, you have to spell the word.");
    //     console.log("number of letters "+count);
    // }

    // else 
    // {
    
    for (let i = 0; i < apple_boxes.length; i++) 
    {
        var box_id = apple_boxes[i].id;
        var item_id = apple_boxes[i].firstChild.id;
        console.log(box_id);
        console.log(item_id);
        if(item_id === "item_p1" || item_id === "item_p2") 
        {
            if(box_id === "p1" || box_id === "p2") count++;
        }
        else if (item_id === "item_a" && box_id === "a") count++;
        else if (item_id === "item_l" && box_id === "l") count++;
        else if (item_id === "item_e" && box_id === "e") count++;

        console.log(count);
    }
    if(count === apple_boxes.length){
        console.log(count);
        score = score + 5;
        document.getElementById('apple').src = "image/goodjob2.gif";
        document.getElementById("score").innerHTML = "current score: " + score;
    }
    else cross.classList.remove('hide');
    //}
}

function checkSpellingOrange(e){
    var count = 0; 
    //if "done" is pressed before completing
    // if(count < orange_boxes.length){
    //     console.log("sorry, you have to spell the word.");
    //     console.log("number of letters "+count);
    // }
    // else {
        for (let i = 0; i < orange_boxes.length; i++) {
            var box_id = orange_boxes[i].id;
            var item_id = orange_boxes[i].firstChild.id;
            
            if(box_id === "o" && item_id === "orange_o") count++;
            if(box_id === "r" && item_id === "orange_r") count++;
            if(box_id === "a" && item_id === "orange_a") count++;
            if(box_id === "n" && item_id === "orange_n") count++;
            if(box_id === "g" && item_id === "orange_g") count++;
            if(box_id === "e" && item_id === "orange_e") count++;
            console.log(count);
        }
        if(count === orange_boxes.length){
            console.log(count);
            score = score + 5;
            document.getElementById("orange").src = "image/goodjob.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        // else cross.classList.remove('hide');
    //}
}

function done(){
    console.log('done btn pressed');
    if(level_count === 1) checkSpellingApple();
    if(level_count === 2 ) checkSpellingOrange();
}

function resetCurrentWord(e){
    console.log("reset btn clicked");
    if(level_count === 1){
        for (let i = 0; i < boxes.length; i++){
            apple_letters.append(boxes[i]);
            boxes[i].innerHTML = " ";
        }
    }
}

function showHint(){
    console.log("hint btn clicked");
    if(level_count === 1){
        apple_boxes[0].appendChild(apple_letters[4]);
        apple_boxes[4].appendChild(apple_letters[2]);
      
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
