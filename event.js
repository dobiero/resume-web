//script for events

var box = document.getElementById("box");
var button = document.getElementById("clickbait");

button.onclick = function(){
    if (box.className == "open"){
        //shrink the box
        box.className="";
        button.innerHTML = "Read More";
    }
    else{
        //expand the box
        box.className = "open";
        button.innerHTML = "Read Less";
    }
}