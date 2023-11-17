// let num1 = 15;
// let num2 = 2;

// let result;

// result=  num1 + num2;
// document.write(result, " Hello", "<br>");
// result=  num1 - num2;
// document.write(result,"<br>");
// result=  num1 * num2;
// document.write(result,"<br>");
// result=  num1 / num2;
// document.write(result,"<br>");
// result=  num1 % num2;
// document.write(result,"<br>");

let t1 = "학교종이";
let t2 = " 땡땡땡 ";
let t3 = 8282;
let t4 = " 어서 모이자 <br>";
let result2 = t1 + t2 + t3 + t4;

document.write(result2);

let num1 = 10;
let num2 = 3;

num1 += num2;
document.write(num1, "<br>"); //13 

num1 -= num2;
document.write(num1, "<br>"); //10

num1 *= num2;
document.write(num1, "<br>"); //30

num1 %= num2;
document.write(num1, "<br>"); //0

let str = "<table border = '1'>"; //"<table border = \"1\">" 이렇게도 사용 가능
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</td>";
str += "</table>";
document.write(str);

let num3 = 10;
let num4 = 20;
let result;

num3--;
document.write(num3, "<br>");

num3++;
document.write(num3, "<br>");

result = num4++;
document.write(result, "<br>");

result = ++num4;
document.write(result, "<br>");