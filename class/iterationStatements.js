let sum = 0;
for(let i = 0; i <=10; i++) {
    sum += i;
}
document.write(`1부터 10까지의 합은 ${sum} <br>`);

let fact = 1;
for(let i = 1; i <= 10; i++) {
    fact *= i;
}
document.write("1부터 10까지의 곱은 " + fact + "<br>");

// 중첩반복문
// for(let i = 1; i <= 3; i++) {
//     for(let k = 1; k <=2; k++ ){
//        for(let j = 1; j <= 2; j++){
//         document.write("i값 : " + i + " k값 :" + k + " j값 : " + j + " <br>");
//        }
//     }
// }
// 구구단
for(let i = 2; i <= 9; i++) {
    for(let k = 1; k <= 9; k++){
        document.write(`${i} X ${k} = ${i*k} `);
        if(k === 9) {
            document.write("<br>")
        }
    }
}
document.write("<br>");

//피라미드
for(let i = 1; i <= 10; i++) {
    for(let k = 1; k <= i; k++){
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

//역 피라미드
for(let i = 1; i <= 10; i++){
    for(let k = 1; k <= 11 - i; k++) {
        document.write("*");
    }
    document.write("<br>");
}

// 일반적인 for문의 배열 출력
let arr = [3,4,5];

for(let i = 0; i <arr.length; i++){
    document.write(i + " :");
    document.write(" " + arr[i] + " <br>")
}

document.write("<br>");

// for/in문을 사용한 배열 출력
for(let i in arr){
    document.write(i + " : ");
    document.write(" " + arr[i] + " <br>")
}

document.write("<br>");

// for/of문을 이용한 배열 출력
for(let item of arr) {
    document.write(item + " ");
}

document.write("<br>");

//while문
let a = 1;
while(a <= 10) {
    document.write(a + " ");
    a++;
}

document.write("<br>");

let b = 1;
let sum1 = 0;
while( b <= 10) {
    sum1 += b;
    b++
}document.write(`1부터 10까지의 합은 ${sum1}입니다.`);

// do/while문
document.write("<br>");

let a1 = 1;
do { 
    document.write(a1 + " ");
    a1++
}while(a1 <= 10 );

//분기문 : break
document.write("<br>");

let i1 ,sum2 = 0;
for(i1 = 0; i1 <= 100; i1++){
    sum2 += i1;
    if(sum2 >= 10 )
        break;
}document.write(`최초로 합이 10 이상인 위치 ${i1}, 합은 ${sum2} <br>`);

//분기문 : continue

let i2, sum3 = 0;
for(i2 = 1; i2 <= 10; i2++) {
    if(i2 % 2 === 0)
        continue;
    sum3 += i2;
}document.write(`1에서 10까지 홀수의 합은 ${sum3}입니다. <br>`);

let i3, sum4 = 0;
for(i3 = 1; i3 <= 10; i3++) {
    if(i3 % 2 === 1)
        continue;
    sum4 += i3;
}document.write(`1에서 10까지 짝수의 합은 ${sum4}입니다. <br>`);



