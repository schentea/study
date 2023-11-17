document.write('<table border = "2" >')

for(let i = 2; i <=9; i++){
    document.write("<tr>");
    for(let k = 1; k <= 9; k++)
        document.write(`<td> ${i*k} </td>`);
}document.write("</tr>");




 