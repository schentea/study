//미션 1
let price1 = 3000; //교통비
let price2 = 6000; //식비
let price3 = 3000; //음료비
let sum = price1 + price2 + price3;
let minus = sum - 10000;
let result;

result = (sum > 10000) ? `진영이는 ${minus}원을 초과해 사용했습니다.` : `진영이는 돈 관리를 잘했습니다.`;
document.write(result);

document.write("<br><br><br>");


//미션2
let sales1 = 1200;
let sales2 = 1300;
let sales3 = 1000;
let sales4 = prompt("4분기 판매량을 입력하세요",400);
let avgSales = (sales1 + salse2 + sales3) / 3;
let result2;

result2 = (avgSales >= sales4) ? "4분기 판매량이 평균 이하입니다." : "4분기 판매량이 평균 이상입니다.";
document.write(result2);