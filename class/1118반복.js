let i = 1;
while( i <= 10 ) {
    document.write(`안녕하세요 ${i} <br>`);
    i++;
    if( i === 5){
        i = 6;
        continue;
    }
}
document.write("<hr><br>");

let i1 = 1;
while( i1 <= 30) {
    if( i1 % 2 === 0 && i1 % 6 === 0){
        document.write(i1, "<br />");
    }
    i1++;
}
document.write("<hr><br>");


// let i2 = 20;

// while(i2 >= 10) {
//     if( i2 % 2 === 0 ){
//         document.write(`<p class="blue">${i2} </p>`);
//     }
//     else {
//         document.write(`<p class="red">${i2}</p>`);
//     }
//     i2--;
// }
// document.write("<hr><br>");

let i3 = 10;

do {
    document.write(`<p class="green"> Hello</p>`);
}
while(i3 < 3)



document.write("<hr><br>");

for(let i = 1; i <= 10; i++) {
    document.write(`반복${i} <br>`);
}

document.write("<hr><br>");

for(let i = 1; i <= 100; i++) {
    if( i % 5 === 0 && i % 7 != 0) {
        document.write(`<p class = "red">${i}</p>`);
    }
    else if( i % 7 === 0 && i % 5 != 0) {
        document.write(`<p class = "green">${i}</p>`);
    }
    else if( i % 7 === 0 && i % 5 === 0) {
        document.write(`<p class = "blue">${i}</p>`);
    }
}