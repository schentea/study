let num = prompt("숫자를 입력하세요. [ 1 ~ 10 ]", 1); //처음의 숫자 입력
let trueF = false;

do { // do에서 조건 검사 시작
    if(isNaN(num) || num > 10 || num < 0){ //입력받은 값이 숫자가 아니거나  
        alert("올바른 숫자를 입력하세요."); // 1미만 10초과일 경우 경고창 출력
        num = prompt("숫자를 다시 입력하세요. [ 1 ~ 10 ]", 1); // 그 후 다시 숫자를 입력받는 창 출력 
        trueF = true; // trueF라는 변수에 true를 저장 아래 while의 검사식에 true가 입력되었으니 다시 if문 비교 시작
    }    
    else {
        document.write(`당신이 입력한 숫자는 ${num}입니다.`); // 1이상 10이하의 숫자일시 화면에 입력받은 숫자 출력
        trueF = false; //trueF라는 변수에 false를 저장 후 while문 종료
    }
}
while(trueF)
    
//1부터 10 사이의 숫자를 입력받아서 그거를 출력
//isNaN사용해도 되고 안해도 되고
//틀린 숫자 입력받으면 경고창 출력
