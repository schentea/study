//1
let myString = "Hello, World";

for(let i = 0; i<= myString.length; i++){
    if(myString.charAt([i]) === ","){
        break;
    }
    document.write(myString.charAt([i]).toUpperCase(), "<br>");
}
document.write("<br><hr><br>")

//2
let string = myString.split(" ");
for(let i = 0; i<string.length; i++) {
    if(string[i] === "World"){
        document.write(string[i]);
    }
}
document.write("<br><hr><br>")

//3
let phoneNumber = prompt("전화번호를 입력하세요 ex)010-7186-0119", "");

let result = phoneNumber.replace(phoneNumber.substring(4,8),"****");
document.write(result);
