let name = prompt("이름을 입력하세요", "최현기");
let delay = parseInt(prompt("초를 입력하세요", 1)) * 1000;

function delayMessage() {
    setTimeout(() => {
        document.write(`안녕하세요 ${name}`);
    }, delay);
}

delayMessage(name, delay)

let number = prompt("휴대폰 번호를 입력하세요.", "01063702448");

function formatNumber(number) {
    number = number.slice(0, 3) + "-" + number.slice(3,7) + "-" + number.slice(7,11);
    document.write(number);
}

formatNumber(number)