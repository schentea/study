let t = 'Hello Thank you good luck to you';

document.write(t.charAt(16),"<br>");
document.write(t.indexOf("you"), "<br>");
document.write(t.indexOf("you",16), "<br>");
document.write(t.lastIndexOf("you"), "<br>");

document.write(t.lastIndexOf("you",25), "<br>");
document.write(t.match("lcuk"), "<br>");

document.write(t.search("you"), "<br>");

document.write(t.substr(21,4), "<br>");
document.write(t.substring(6,12), "<br>");

document.write(t.replace("you","me"), "<br>");

document.write(t.toLowerCase(), "<br>");
document.write(t.toUpperCase(), "<br>");

document.write(t.length, "<br>");


let s =t.split(" ");

document.write(s[0], "<br>");
document.write(s[4], "<br>");

let str = "A";
t =str.charCodeAt(0);

document.write(t, "<br>");
document.write(String.fromCharCode(65), "<br>");

let userName = prompt("당신의 영문 이름은?", " ");

let upperName = userName.toUpperCase();
document.write(upperName,"<br>");

let userNum = prompt("당신의 연락처는?", "");
let result = userNum.substring(0, userNum.length - 4) + "****";
document.write(result,"<br>");

let userEmail = prompt("당신의 이메일 주소는", " ");
let arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

let check1 = false;
let check2 = false;
if(userEmail.indexOf("@") > 0) { check1 = true };

for(let i = 0; i <arrUrl.length; i++) {
    if(userEmail.indexOf(arrUrl[i]) > 0) {
        check2 = true;
    }
}

if(check1 && check2) {
    document.write(userEmail);
}
else {
    alert("이메일 형식이 잘못되었습니다.");
}