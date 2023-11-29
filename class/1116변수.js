// let s = "javascript";
// let num = "100";
// let tag = "<h1>String</h1>";


// document.write(`s : ${s} <br>num : ${num} <br>tag : ${tag}`)
// document.write(typeof s);
// document.write(typeof num);
// document.write(typeof tag);

// console.log(typeof s);
// console.log(typeof num);
// console.log(typeof tag);

// let s = 100;
// let t = Number("500");
// let numA = "200";
// let numb = t + numA;
// const numC = "100";
// const numD = "400";


// document.write(s + "<br>");
// document.write(t + "<br>");
// document.write(t + numA +  "<br>");
// document.write(numC + numD + "<br>");


// console.log(typeof s);
// console.log(typeof t);
// console.log(typeof numB);

// let s = true;
// let t = 10 >= 100;
// let k = Boolean("hello");
// let m = Boolean(0); // 0, undifined, Null 값에 대해 False 반환
// let k2 = Boolean("홍길동"); // 나머지 모든 데이터에는 True 반환

// document.write(s + "<br>");
// document.write(t + "<br>");
// document.write(k + "<br>");
// document.write(m + "<br>");
// document.write(k2 + "<br>");

// document.write(Boolean(null === undefined));

// 1.변수명 첫글자로는 $, _, 영문자만 올 수 있다
// let 1num = 10; (X)
let $num = 10;

//2.변수명 첫 글자 다음은 영문자, 숫자, _, $만 포함할 수 있다
// let 100num = 10; (X)
let num100 = 10;

//3. 변수명으로는 예약어를 사용활 수 없다.
let document = 10; // (X)
let num = 10;

//4. 변수명을 지을 때는 되도록 의미를 부여해 작성하는 것이 좋다.
let num1 = "hello"; // (X)
let num2 = 10;

//5.변수명을 사용할 때는 대,소문자를 구분해야 합니다.
let num3 = 10; 
document.write(NUM3); //(X)
let num4 = 10; 
document.write(num4)