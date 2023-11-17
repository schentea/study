// 사용자 정의 함수 function
//기명 함수
function calc(x,y){
    document.write(x + y + "<br>");
    document.write(x - y + "<br>");
    document.write(x * y + "<br>");
}
calc(2,3);
calc(4,3);
calc(10);

//화살표 함수
let addNum = (x, y) => {
    return x + y;
}
document.write(addNum(2, 3) +"<br>");

let addNum2 = (x, y) => (
    x + y
);
document.write(addNum(2, 3) + "<br>");

let addNum3 = (x, y) => x + y;
document.write(addNum3(2, 3) + "<br>");

let multiNum2 =(x,y) => x * y;
document.write(multiNum2(4,5) + "<br>");

//반환문과 매개변수
function multiNum(x, y) {
    return x * y;
}
let num = multiNum(3,4);
document.write(num + "<br>");
document.write(multiNum2(3) + "<br>");

//재귀 함수
function count(x) {
    if( x === 0){
        document.write("함수 실행 종료")
    } else {
        document.write(`count x 값 : ${x} <br>`)
        count( x - 1 ); //함수 내에서count 자신을 재호출
    }
}
count(5);