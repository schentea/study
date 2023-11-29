
function view() {
   document.getElementById("test").style.display="block";
}

let width = 100;
let height = 100;

let grow = setInterval(function() {
    width += 5;
    height += 5;
    test.style.width = width + "px";
    test.style.height = height + "px";
    if(width === 150){
        clearInterval(grow);
    }    
},1000)

setTimeout(view, 5000);
    







