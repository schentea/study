// let a = 10;
// let b = 20;
// let c = 10;
// let f = "20";
// let result

// result = a > b;
// document.write(result, "<br>");
// result = a < b;
// document.write(result, "<br>");
// result = a <= b;
// document.write(result, "<br>");
// result = b == f;
// document.write(result, "<br>");
// result = a != b;
// document.write(result, "<br>");
// result = b === f;
// document.write(result, "<br>");

let a = 10;
let b = 20;
let c = 30;
let d = 40;

let result;

result = a > b || b >= c || c > d;
document.write(result, "<br>");

result = a > b || b >= d || c <= d;
document.write(result, "<br>");

result = a <= b && b >= d && c <= d;
document.write(result, "<br>");

result = a <= b && b <= d && c <= d;
document.write(result, "<br>");

result = !(a > b);
document.write(result, "<br>");

//삼항 조건 연산자

let num1 = 10;
let num2 = 3;

let result2 = num1 > num2 ? "javascript" : " Hello";
document.write(result2, "<br>");

if( num1 > num2 ) {
    result2 = "javascript";
    document.write(result2, "<br>");
}
else {
    result2 = "Hello";
    document.write(result2, "<br>");
}