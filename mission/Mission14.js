let num = 1;
let str ="<table border = 1>";

for( let i = 1; i <=5; i++) {
    str += "<tr>";
    for(let j = 1; j <=5; j++){
        str += `<td>${num}</td>`;
        num++;
    }
    str += "</tr>";
}

str += "</table>";
document.write(str);