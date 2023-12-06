function myFnc(name, area) {
    document.write(`안녕하세요. ${name}입니다. <br>`);
    document.write(`사는 곳은 ${area}입니다. <br>`);
}

myFnc("홍당무", "서울");

let rightId = "korea";
let rightPw = "1234";

function login(userId, userPw) {
    if(userId === rightId) {
        if(userPw === rightPw) {
            document.write(`${userId}님 방문을 환영합니다. <br>`);
        }
        else {
            alert("잘못된 비밀번호입니다.");
        }
    }
    else {
        alert("존재하지 않는 아이디입니다.");
    }
}

let userId = prompt("아이디를 입력하세요.", "");
let userPw = prompt("패스워드를 입력하세요.", "");

login(userId, userPw);

function sum1() {
    let sum1 = arguments[0] + arguments[1] + arguments[2];
    document.write(sum1,"<br>");
    console.log(arguments)
}

sum1(10, 20, 30);

function sum() {
    let sum = 0;
    for( let i = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    }

    document.write(sum, "<br>");
}

sum(10, 20, 30);