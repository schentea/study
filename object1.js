let tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function() {
    document.write(`tv 색상은 ${this.color}이고 <br>`)
    document.write(`tv 가격은 ${this.price}입니다. <br>`);
}

let car = {
    color : "black",
    price : 5000000,
    info : function() { 
        document.write(`car의 색상은 ${this.color}이고 <br>`);
        document.write(`car의 가격은 ${this.price}입니다. <br.`);
    }
};

document.write(`<h1>tv객체 메서드 호출</h1>`);
tv.info();
document.write(`<h1>car객체 메서드 호출</h1>`);
car.info();

document.write("<br> ")

let today = new Date();
let nowMonth = today.getMonth();
nowDate = today.getDate();
nowDay = today.getDay();

document.write(`<h1>오늘의 날짜 정보</h1>`);
document.write(`현재 월 : ${nowMonth + 1} <br>`);
document.write(`현재 일 : ${nowDate} <br>`);
document.write(`현재 요일 : ${nowDay} <br>`);

let worldcup = new Date(2002,4,31);
let theMonth = worldcup.getMonth();
theDate = worldcup.getDate();
theDay = worldcup.getDay();

document.write(`<h1>월드컵 날짜 정보</h1>`);
document.write(`2002월드컵은 몇 월 : ${theMonth} <br>`);
document.write(`2002월드컵은 몇 일 : ${theDate} <br>`);
document.write(`2002월드컵은 무슨 요일 : ${theDay} <br>`);

document.write("<br>");

let today1 = new Date();
let nowYear = today1.getFullYear();

let theDate1 = new Date(nowYear, 11, 15);
let diffDate = theDate1.getTime() - today1.getTime();

let result = Math.ceil( diffDate / (60 * 1000 * 60 * 24));
document.write(`연말 D-day : ${result}일 남았습니다.`);

document.write("<br>");

let num = 2.1234;

let maxNum = Math.max(10, 4, 8, 30), // 최댓값 : 30
minNum = Math.min(10,5,8,30), // 최솟값 : 5
roundNum = Math.round(num), // 소수점 첫째 자리 반올림 : 2
floorNum = Math.floor(num), // 소수점 첫째 자리 내림 : 2
celiNum = Math.celi(num), // 소수점 첫째 자리 올림 : 3
rndNum = Math.random(), // 0과 1사이의 랜덤한 난수 발생
piNum = Math.PI; // 원주율 상수를 반환 : 3.14
