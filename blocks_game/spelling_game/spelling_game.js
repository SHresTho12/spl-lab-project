var score = 0;
var level_count = 1;
var total_level = 8;


const hintBtn = document.getElementById('hint_btn');


const letters = document.querySelectorAll('.letter');
const boxes = document.querySelectorAll('.box');
var arr = [];
for (var i=0; i<letters.length; i++){
    arr.push(letters[i]);
}
document.getElementsByClassName("letter");
const apple_game = document.querySelector('.apple_game')
const correct = document.querySelector('.correct');

const apple_boxes = document.querySelector('.boxes_apple').children;
const orange_boxes = document.querySelector('.boxes_orange').children;
const car_boxes = document.querySelector('.boxes_car').children;
const rose_boxes = document.querySelector('.boxes_rose').children;
const tree_boxes = document.querySelector('.boxes_tree').children;
const mug_boxes = document.querySelector('.boxes_mug').children;
const cupcake_boxes = document.querySelector('.boxes_cupcake').children;
const books_boxes = document.querySelector('.boxes_books').children;


const apple_letters = document.querySelector('.draggables_apple').children;
const orange_letters = document.querySelector('.draggables_orange').children;
const car_letters = document.querySelector('.draggables_car').children;
const rose_letters = document.querySelector('.draggables_rose').children;
const tree_letters = document.querySelector('.draggables_tree').children;
const mug_letters = document.querySelector('.draggables_mug').children;
const cupcake_letters = document.querySelector('.draggables_cupcake').children;
const books_letters = document.querySelector('.draggables_books').children;

var yay = new Audio('yay.mp3');
var yay2 = new Audio('goodjob.mp3');
var yay3 = new Audio('welldone.mp3');
var oops = new Audio('oops.mp3');

function lettersPlaced(e, count){
    if(count < e.length){
        var lettersPlaced = 0;
        for(var i=0; i<e.length; i++){
            if(e[i].hasChildNodes()) lettersPlaced++;
        }
        if(lettersPlaced < e.length)
            alert("please fill all the boxes");
    }
}


function checkSpellingApple(e){ 
    var count = 0;
    lettersPlaced(apple_boxes, count);

    
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
        yay.play();
        document.getElementById('apple').src = "image/goodjob2.gif";
        document.getElementById("score").innerHTML = "current score: " + score;
    }
    else {
        oops.play();
        document.getElementById('apple').src = "image/sorry.gif";
        alert("wrong spelling!! please retry.");
    }


}

function checkSpellingOrange(e){
    var count = 0; 

    lettersPlaced(orange_boxes, count);

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

            yay2.play();

            document.getElementById("orange").src = "image/goodjob.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('orange').src = "image/sorry2.gif";
            alert("wrong spelling!! please retry.");
        }
}
function checkSpellingCar(e){//someting's wrong here
    var count = 0; 

    lettersPlaced(car_boxes, count);

        for (let i = 0; i < car_boxes.length; i++) {
            var box_id = car_boxes[i].id;
            var item_id = car_boxes[i].firstChild.id;
            
            if(box_id === "c" && item_id === "car_c") count++;
            if(box_id === "a" && item_id === "car_a") count++;
            if(box_id === "r" && item_id === "car_r") count++;
            console.log(count);
        }
        if(count === car_boxes.length){
            console.log(count);
            score = score + 5;

            yay3.play();

            document.getElementById("car").src = "image/goodjob3.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('car').src = "image/sorry.gif";
            alert("wrong spelling!! please retry.");
        }

}
function checkSpellingRose(e){
    var count = 0; 
    lettersPlaced(rose_boxes, count);
        for (let i = 0; i < rose_boxes.length; i++) {
            var box_id = rose_boxes[i].id;
            var item_id = rose_boxes[i].firstChild.id;
            
            if(box_id === "r" && item_id === "rose_r") count++;
            if(box_id === "o" && item_id === "rose_o") count++;
            if(box_id === "s" && item_id === "rose_s") count++;
            if(box_id === "e" && item_id === "rose_e") count++;
            console.log(count);
        }
        if(count === rose_boxes.length){
            console.log(count);
            score = score + 5;
            yay.play();
            document.getElementById("rose").src = "image/goodjob4.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('rose').src = "image/sorry2.gif";
            alert("wrong spelling!! please retry.");
        }
}
function checkSpellingTree(e){
    var count = 0; 
    lettersPlaced(tree_boxes, count);
        for (let i = 0; i < tree_boxes.length; i++) {
            var box_id = tree_boxes[i].id;
            var item_id = tree_boxes[i].firstChild.id;
            
            if(box_id === "t" && item_id === "tree_t") count++;
            if(box_id === "r" && item_id === "tree_r") count++;
            if((box_id === "e" && item_id === "tree_e1") || (box_id === "e" && item_id === "tree_e2")) count++;
            
            console.log(count);
        }
        if(count === tree_boxes.length){
            console.log(count);
            score = score + 5;
            yay2.play();
            document.getElementById("tree").src = "image/goodjob.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('tree').src = "image/sorry.gif";
            alert("wrong spelling!! please retry.");
        }
}
function checkSpellingMug(e){
    var count = 0; 
    lettersPlaced(mug_boxes, count);
        for (let i = 0; i < mug_boxes.length; i++) {
            var box_id = mug_boxes[i].id;
            var item_id = mug_boxes[i].firstChild.id;
            
            if(box_id === "m" && item_id === "mug_m") count++;
            if(box_id === "u" && item_id === "mug_u") count++;
            if(box_id === "g" && item_id === "mug_g") count++;
            console.log(count);
        }
        if(count === mug_boxes.length){
            console.log(count);
            score = score + 5;
            yay3.play();
            document.getElementById("mug").src = "image/goodjob2.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('mug').src = "image/sorry2.gif";
            alert("wrong spelling!! please retry.");
        }
}
function checkSpellingCupcake(e){
    var count = 0; 
    lettersPlaced(cupcake_boxes, count);
        for (let i = 0; i < cupcake_boxes.length; i++) {
            var box_id = cupcake_boxes[i].id;
            var item_id = cupcake_boxes[i].firstChild.id;
            
            if((box_id === "c" && item_id === "cupcake_c1") || (box_id === "c" && item_id === "cupcake_c2")) count++;
            if(box_id === "u" && item_id === "cupcake_u") count++;
            if(box_id === "p" && item_id === "cupcake_p") count++;
            if(box_id === "a" && item_id === "cupcake_a") count++;
            if(box_id === "k" && item_id === "cupcake_k") count++;
            if(box_id === "e" && item_id === "cupcake_e") count++;
            console.log(count);
        }
        if(count === cupcake_boxes.length){
            console.log(count);
            score = score + 5;
            yay.play();
            document.getElementById("cupcake").src = "image/goodjob3.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('cupcake').src = "image/sorry.gif";
            alert("wrong spelling!! please retry.");
        }
}
function checkSpellingBooks(e){
    var count = 0; 
    lettersPlaced(books_boxes, count);
        for (let i = 0; i < books_boxes.length; i++) {
            var box_id = books_boxes[i].id;
            var item_id = books_boxes[i].firstChild.id;
            
            if((box_id === "o" && item_id === "books_o1") || (box_id === "o" && item_id === "books_o2")) count++;
            if(box_id === "b" && item_id === "books_b") count++;
            if(box_id === "k" && item_id === "books_k") count++;
            if(box_id === "s" && item_id === "books_s") count++;
            console.log(count);
        }
        if(count === books_boxes.length){
            console.log(count);
            yay2.play();
            score = score + 5;
            document.getElementById("books").src = "image/goodjob4.gif";
            document.getElementById("score").innerHTML = "current score: " + score;
        }
        else {
            oops.play();
            document.getElementById('books').src = "image/sorry2.gif";
            alert("wrong spelling!! please retry.");
        }
}

function done(){
    console.log('done btn pressed');
    if(level_count === 1) checkSpellingApple();
    if(level_count === 2 ) checkSpellingOrange();
    if(level_count === 3) checkSpellingCar();
    if(level_count === 4) checkSpellingRose();
    if(level_count === 5) checkSpellingTree();
    if(level_count === 6) checkSpellingMug();
    if(level_count === 7) checkSpellingCupcake();
    if(level_count === 8) checkSpellingBooks();
}

function resetCurrentWord(e){
    console.log("reset btn clicked");
    if(level_count === 1){
        for (let i = 0; i < boxes.length; i++){
            apple_letters.appendChild(boxes[i]);
            boxes[i].innerHTML = " ";
        }
    }

}
function checkSpellingRose(e){
    var count = 0; 


function showHint(){
    console.log("hint btn clicked");
    
    if(level_count === 1){//apple
        apple_boxes[0].appendChild(apple_letters[4]);
        apple_boxes[4].appendChild(apple_letters[2]);
        hintBtn.disabled = true;
    } 

    if(level_count === 2){//orange
        orange_boxes[0].appendChild(orange_letters[1]);
        orange_boxes[1].appendChild(orange_letters[4]);
        hintBtn.disabled = true;
    }

    if(level_count === 3){//car
        car_boxes[2].appendChild(car_letters[2]);
        hintBtn.disabled = true;
    }

    if(level_count === 4){//rose
        rose_boxes[1].appendChild(rose_letters[1]);
        hintBtn.disabled = true;
    }

    if(level_count === 5){//tree
        tree_boxes[3].appendChild(tree_letters[3]);
        hintBtn.disabled = true;
    }

    if(level_count === 6){//mug
        mug_boxes[0].appendChild(mug_letters[2]);
        hintBtn.disabled = true;
    }

    if(level_count === 7){//cupcake
        cupcake_boxes[0].appendChild(cupcake_letters[3]);
        cupcake_boxes[3].appendChild(cupcake_letters[5]);
        hintBtn.disabled = true;
    }

    if(level_count === 8){//books
        books_boxes[0].appendChild(books_letters[2]);
        books_boxes[4].appendChild(books_letters[3]);
        hintBtn.disabled = true;
    }
}

function goToNextLevel(){
    // if (done_button_clicked){
        while(level_count < total_level){
            hintBtn.disabled = false;

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
