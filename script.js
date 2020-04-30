var col1 = document.getElementsByClassName("col1");
var col2 = document.getElementsByClassName("col2");
var col3 = document.getElementsByClassName("col3");
var col4 = document.getElementsByClassName("col4");

var row1 = document.getElementsByClassName("row1");
var row2 = document.getElementsByClassName("row2");
var row3 = document.getElementsByClassName("row3");
var row4 = document.getElementsByClassName("row4");

var slider = document.getElementById("myRange");

for (let col of col1) {
    col.addEventListener("click", function() {
        if (col.classList.contains("selected")){
            col.classList.remove("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumsoff.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "bassoff.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthoff.png";
            }
            else{
                col.querySelector("img").src = "vocalsoff.png";
            }
        }
        else{
            col.classList.add("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumson.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "basson.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthon.png";
            }
            else{
                col.querySelector("img").src = "vocalson.png";
            }
        }
    });
}
for (let col of col2) {
    col.onclick = function() {
        if (col.classList.contains("selected")){
            col.classList.remove("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumsoff.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "bassoff.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthoff.png";
            }
            else{
                col.querySelector("img").src = "vocalsoff.png";
            }
        }
        else{
            col.classList.add("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumson.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "basson.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthon.png";
            }
            else{
                col.querySelector("img").src = "vocalson.png";
            }
        }
    }
}
for (let col of col3) {
    col.onclick = function() {
        if (col.classList.contains("selected")){
            col.classList.remove("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumsoff.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "bassoff.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthoff.png";
            }
            else{
                col.querySelector("img").src = "vocalsoff.png";
            }
        }
        else{
            col.classList.add("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumson.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "basson.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthon.png";
            }
            else{
                col.querySelector("img").src = "vocalson.png";
            }
        }
    }
}
for (let col of col4) {
    col.onclick = function() {
        if (col.classList.contains("selected")){
            col.classList.remove("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumsoff.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "bassoff.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthoff.png";
            }
            else{
                col.querySelector("img").src = "vocalsoff.png";
            }
        }
        else{
            col.classList.add("selected");
            if(col.querySelector("img").src.includes("drums")){
                col.querySelector("img").src = "drumson.png";
            }
            else if(col.querySelector("img").src.includes("bass")){
                col.querySelector("img").src = "basson.png";
            }
            else if(col.querySelector("img").src.includes("synth")){
                col.querySelector("img").src = "synthon.png";
            }
            else{
                col.querySelector("img").src = "vocalson.png";
            }
        }
    }
}

function getCol1Track(){
    let audioString = "";
    let cols = document.getElementsByClassName("col1");
    for(col of cols){
        if(col.classList.contains("selected")){
            if(col.querySelector("img").src.includes("bass")){
                audioString = audioString.concat("B");
            }
            else if(col.querySelector("img").src.includes("drums")){
                audioString = audioString.concat("D");
            }
            else if(col.querySelector("img").src.includes("synth")){
                audioString = audioString.concat("S");
            }
            else{
                audioString = audioString.concat("V");
            }
        }
    }
    return audioString;
}

function getCol2Track(){
    let audioString = "";
    let cols = document.getElementsByClassName("col2");
    for(col of cols){
        if(col.classList.contains("selected")){
            if(col.querySelector("img").src.includes("bass")){
                audioString = audioString.concat("B");
            }
            else if(col.querySelector("img").src.includes("drums")){
                audioString = audioString.concat("D");
            }
            else if(col.querySelector("img").src.includes("synth")){
                audioString = audioString.concat("S");
            }
            else{
                audioString = audioString.concat("V");
            }
        }
    }
    return audioString;
}

function getCol3Track(){
    let audioString = "";
    let cols = document.getElementsByClassName("col3");
    for(col of cols){
        if(col.classList.contains("selected")){
            if(col.querySelector("img").src.includes("bass")){
                audioString = audioString.concat("B");
            }
            else if(col.querySelector("img").src.includes("drums")){
                audioString = audioString.concat("D");
            }
            else if(col.querySelector("img").src.includes("synth")){
                audioString = audioString.concat("S");
            }
            else{
                audioString = audioString.concat("V");
            }
        }
    }
    return audioString;
}

function getCol4Track(){
    let audioString = "";
    let cols = document.getElementsByClassName("col4");
    for(col of cols){
        if(col.classList.contains("selected")){
            if(col.querySelector("img").src.includes("bass")){
                audioString = audioString.concat("B");
            }
            else if(col.querySelector("img").src.includes("drums")){
                audioString = audioString.concat("D");
            }
            else if(col.querySelector("img").src.includes("synth")){
                audioString = audioString.concat("S");
            }
            else{
                audioString = audioString.concat("V");
            }
        }
    }
    return audioString;
}

var player = new Gapless5("player");

slider = document.getElementById("slider");

function playAll(){
    player.stop();
    player = new Gapless5("player", {
        tracks: ["tracks/"+getCol1Track()+".wav", "tracks/"+getCol2Track()+".wav", "tracks/"+getCol3Track()+".wav", "tracks/"+getCol4Track()+".wav"]
    });
    player.play();
    slider.oninput = function() {
        document.getElementById("player").querySelector("input[type=range][class=volume]").value = this.value;
        $("#player").find("input[type=range][class=volume]").trigger("oninput");
    }
}

function stopAll() {
    player.stop();
}