(function() {
    let num = 100;
    function menu() {
        num += 100;
        alert(num);
    }
    menu();
}());

(function(){
    let num = 100;
    function menu(){
        alert(num);
    }
}());