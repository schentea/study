// let x = 10;
// let y = 20;

// if(x === y){
//     document.write("x와 y는 같습니다 <br>");
// }

// if(x < y) {
//     document.write("x가 y보다 작습니다 <br>");
// }

// if(x > y)
//     document.write("x가 y보다 큽니다");

// let x = 200;
// if ( x < 100) {
//     document.write("100보다 작다")
// }
// else {
//     document.write("100보다 크거나 같다 <br>")
// }

// let a = 200;
// if(a % 2 === 0) {
//     document.write("a는 짝수입니다.");
// }
// else {
//     document.write("a는 홀수입니다.");
// }

// let a = 3;
// let b = 5;
// let result;
// if( a > b ){
//     result = a;
// }
// else {
//     result = b;
// }
// document.write("둘 중에 더 큰 수는 " + result + "입니다. <br>");

// result = ( a > b ) ? a : b;
// document.write("둘 중에 더 큰 수는 " + result + "입니다.");

// if(a === b) {
//     document.write("a와 b는 같다.");
// }
// else {
//     if(a < b) {
//         document.write("a가 b보다 작다. <br>");
//     }
//     else {
//         document.write("a가 b보다 크다.")
//     }
// }

// if(a === b) {
//     document.write("a와 b는 같다.");
// }
// else if( a < b) {
//     document.write("a가 b보다 작다.");
// }
// else {
//     document.write("a가 b보다 크다.");
// }

// let a = 200;
// switch (a % 2) {
//     case 0:
//         document.write("a는 짝수입니다. <br>");
//         break;
//     case 1:
//         document.write("a는 홀수입니다.");
//         break;
// }

// let site = prompt("즐겨 찾는 포털 사이트는? (네이버, 다음, 네이트 구글 중)", "네이버");
// let url;

// switch(site) {
//     case "구글": 
//         url = "www.google.com";
//         break;
//     case "다음": 
//         url = "www.daum.net";
//         break;
//     case "네이버": 
//         url = "www.naver.com";
//         break;
//     case "네이트": 
//         url = "www.nate.com";
//          break;
//     default: alert("보기 중에 없는 사이트입니다.");
// }
// if(url) location.href = "http://" + url;

let date = new Date();
alert(date.getMonth())

switch (date.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
        document.write("겨울입니다.");
        break;
    case 3:
    case 4:
    case 5:
        document.write("봄입니다.");
        break;
    case 6:
    case 7:
    case 8:
        document.write("여름입니다");
        break;
    case 9:
    case 10:
    case 11:
        document.write("가을입니다");
        break;
}

