for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <=  i; j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br><hr><br>");

for(let i = 1; i <=5; i++) {
    for(let j = 5; j >= i; j--){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br><hr><br>");

for(let i = 1; i <= 5; i++){
    for(let j = 4; j >= i; j--){
        document.write('&nbsp');
        
    }
    for(let k = 1; k <= i; k++){
        document.write("*");
    }
    document.write("<br>");
}