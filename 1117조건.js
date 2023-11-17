let walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", 0);

if(walkAmount >= 10000){
    document.write("매우 좋은 습관을 지니고 계시는군요 <br>");
}
else {
    document.write("좀더 걸어 봅시다.<br>");
}

//출력되는 경우와 되지 않는 경우
let num1 = 3;
let num2 = 0;
if(num1) {
    document.write(num1);
}

if(num2) {
    document.write(num2);
}

document.write("<br><hr><br>");

let userName = prompt("방문자의 이름은? ", "");

if(userName) {
    document.write(userName + "님 반갑습니다! 방문을 환영합니다. ");
}

document.write("<br><hr><br>");

let numF = prompt("당신이 좋아하는 숫자는?", 1);

if(numF % 2 === 0) {
    document.write("당신이 좋아하는 숫자는 짝수입니다.");
}
else {
    document.write("당신이 좋아하는 숫자는 홀수입니다.");
}

document.write("<br><hr><br>");

let result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if(result) {
    document.write("탈퇴 처리되었습니다.");
}
else {
    document.write("탈퇴 취소되었습니다.");
}

document.write("<br><hr><br>");

let mon = prompt("현재는 몇 월입니까?", 4);

if(mon >= 9 && mon <= 11){
    document.write("독서의 계절 가을이네요.");
}
else if(mon >= 6 && mon <= 8) {
    document.write("여행가기 좋은 여름이네요.");
}
else if(mon >= 3 && mon <= 5) {
    document.write("햇살 가득한 봄이네요.");
}
else{
    document.write("스키의 계절 겨울이네요.");
}

document.write("<br><hr><br>");

let id = "easy1004";
let pw = 112233;

let userId = prompt("아이디는 ?", "");
let userPass = prompt("비밀번호는? ", 123);

if(id === userId) {
    if(pw === userPass){
        document.write(`${userId}님 반갑습니다.`);
    }
    else {
        alert("비밀번호가 일치하지 않습니다.");
        location.reload();
    }
}
else {
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}