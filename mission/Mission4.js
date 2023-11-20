let age = prompt("나이를 입력하세요", 20);
let s = prompt("성별을 입력하세요 [ 남 , 여 ]", "남");

if(isNaN(age) || age > 100) {
    alert("다시 입력하세요.");
    location.reload();
}
else if (age < 18) {
    alert("18세 이상만 입장이 가능합니다.");
    location.reload();
}
else {
    if(s === "남"){
        document.write("남자는 이용료가 20000원 입니다.");
    }
    else if(s === "여"){
        document.write("여자는 이용료가 18000원 입니다.");
    }
    else {
        alert("다시 입력하세요.");
        location.reload();
    }
}