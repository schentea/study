let count = 0;

myFnc();

function myFnc() {
    count++;
    document.write(`hello ${count} <br>`);
}

myFnc();
function theFnc() {
    count++;
    document.write(`bye ${count} <br>`);
}

theFnc();

let color =["red", "yellow", "aqua", "purple"];

let i = 0;
function changeColor() {
    i++;
    if(i >= color.length){
        i = 0;
    }
    let bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = color[i];
}
