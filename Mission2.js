//퀴즈 1
let num = prompt("다섯자리 정수를 입려하세요", 54564);

let num1 = parseInt(num / 10000);
num = num % 10000;

let num2 = parseInt(num / 1000);
num = num % 1000;

let num3 = parseInt(num / 100);
num = num % 100;

let num4 = parseInt(num / 10);
num = num % 10;

let num5 = num;

let sum = (num1 + num2 + num3 + num4+ num5);

document.write(`${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${sum} <br>`);
document.write("계속하려면 F5키를 눌러주세요.<br> <hr> <br>");

let n = prompt("다섯자리 정수를 입력하세요.", 12345);
let nLenght = n.length;
let nArray = [];

if(nLenght === 5){
    for(let i = 0; i < 5; i++) {
        nArray[i] = parseInt(n % 10);
        n /= 10;
    }
}
else {
    alert("다시");
    location.reload();
}

let sum1 = (nArray[0] + nArray[1] + nArray[2] + nArray[3] + nArray[4]);
nArray.reverse();

document.write(`${nArray[0]} + ${nArray[1]} + ${nArray[2]} + ${nArray[3]} + ${nArray[4]} = ${sum1}`);
document.write("<br><hr><br>");
//퀴즈 2

let s = prompt("성별을 입력하세요", "남성");
let weight = prompt("몸무게를 입력하세요", 58);
document.write(`입력한 성별 : ${s}<br>`);
document.write(`입력한 몸무게 : ${weight}<br>`);

if(s === "남성") {
    if(weight >= 85){
        document.write("과체중입니다. 운동하세요.<br>");
    }
    else if(50 <= weight && weight < 85){
        document.write("표준체중입니다. 현 페이스를 유지하세요.<br>");
    }
    else {
        document.write("표준체중 이하입니다. 고기를 드세요.<br>");
    }
}
else{
    if(weight >= 68){
        document.write("과체중입니다. 운동하세요.<br>");
    }
    else if(40 <= weight && weight < 68){
        document.write("표준체중입니다. 현 페이스를 유지하세요.<br>");
    } 
    else {
        document.write("표준체중 이하입니다. 고기를 드세요.<br>");
    }
}
document.write("계속하려면 F5키를 누르십시오.")

document.write("<br><hr><br>");

//퀴즈 3
let grade = prompt("성적을 입력하세요", 85);

document.write(`입력한 성적 : ${grade}<br>`);
if(grade >= 95){
    document.write("축하합니다. A+입니다.<br>");
}
else if(grade >= 90){
    document.write("축하합니다. A입니다.<br>");
}
else if(grade >= 85){
    document.write("축하합니다. B+입니다.<br>");
}
else if(grade >= 80){
    document.write("축하합니다. B입니다.<br>");
}
else if(grade >= 75){
    document.write("축하합니다. C+입니다.<br>");
}
else if(grade >= 70){
    document.write("축하합니다. C입니다.<br>");
}
else if(grade >= 65){
    document.write("축하합니다. D+입니다.<br>");
}
else if(grade >= 60){
    document.write("축하합니다. D입니다.<br>");
}
else {
    document.write("축하합니다. F입니다. ^^;; <br>");
}
document.write("계속하려면 F5키를 누르십시오.")