// let x = 11; 
// let y = 3;

// document.write("x + y : " + (x + y) + "<br>");
// document.write("x - y : " + (x - y) + "<br>");
// document.write(`x * y : ${x * y}`)
// document.write("<br>")
// document.write("x / y : " + x / y + "<br>");
// document.write("x % y : " + x % y + "<br>");
// document.write(parseInt(x / y));
// document.write("<br>")

// let a = 10;
// let b = 10;
// let c = 10;

// a = a - 5;
// document.write(a + "<br>");

// b -= 5; // b = b - 5
// document.write(b + "<br>");

// c -= 5; // c = c - 5
// document.write(c + "<br>");

// c =- 5; // c = -5
// document.write(c + "<br>");

let d = 10;
let e = 10;

document.write((++d - 3) + "<br>"); // d의 값 증가 후 -3
document.write(d + "<br>"); // d = 11
document.write((e++ - 3) + "<br>"); // e - 3 을 한 후 e에서 1빼기
document.write(e + "<br>"); // 11

// let x = 3;
// let y= 5;
// let a = "abc";
// let b = "bcd";

// document.write((x > y) + "<br>"); // false => 3은 5보다 작음
// document.write((a <= b) + "<br>"); // true => 알파벳 a는 b보다 작음
// document.write( x < a); // false => 타입이 다르므로 비교할 수 없음
// document.write( x == y + "<br>"); //false => 같지 않음
// document.write(x === y + "<br>") //false => 자료형은 같으나 피연산자는 다름
// let x = true;
// let y = false;

// document.write((x && y) + "<br>"); // 두 개 모두 true면 true => false
// document.write((x || y) + "<br>"); // 둘 중 하나만 true 여도 true => true
// document.write(!x); // 피연산자의 반대값 지정 => false

let x = 3 + 4;
let y = "좋은 " + "하루 되세요!";
let z = 12 + "월";

document.write(x + "<br>");
document.write(y + "<br>");
document.write(z);