let tv = new Object();
tv.color = "white";
tv.price = 300000;

tv.info = function() {
    document.write(`tv색상 : ${this.color} <br>`);
    document.write(`tv가격 : ${this.price} <br>`);
}

let car = {
    color: "black",
    price : 5000000,

    info: function() {
        document.write(`car색상 : ${this.color} <br>`);
        document.write(`car가격 : ${this.price} <br>`);
    }
};

document.write(`<h1>tv객체 메서드 호출</h1>`);
tv.info();
document.write(`<h1>car객체 메서드 호출</h1>`);
car.info();

document.write("<br><hr><br>");

let arr = [30, "따르릉", true];

document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0], "<br>");
document.write(arr[1], "<br>");
document.write(arr[2], "<br>");

document.write("<h3>배열값 가져오기-2</h3>");
for(let i = 0; i<arr.length; i++){
    document.write(arr[i], "<br>");
}

document.write("<h3>배열값 가져오기-3</h3>");
for(i in arr){
    document.write(arr[i], "<br>");
}

let arr_1 = ["사당", "교대", "방배", "강남"];
let arr_2 = ["신사", "압구정", "옥수"];

let result = arr_1.join("-"); //배열에 저장된 값을 지정한 문자로 연결해 하나의 문자열을 반환
console.log(result);

result = arr_1.concat(arr_2); //2개의 배열을 하나의 배열로 만들어 반환
console.log(result);

result = arr_1.slice(1, 3); //배열의 1번 이전의 인덱스 요소를 잘라낸 후 3번 이전의 값들을 반환
console.log(result);

arr_1.sort(); //배열의 값을 오름차순으로 정렬
console.log(arr_1);

arr_2.reverse(); //배열의 순서를 거꾸로 뒤집기
console.log(arr_2);

result = arr_1 + arr_2;
console.log(result);

let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금","정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼"); //2번 인덱스 부터 하나의 데이터 삭제후 삽입
console.log(greenArr);

let data1 = yellowArr.pop(); //yellowArr의 마지막 인덱스의 데이터를 data1에 저장
let data2 = yellowArr.shift(); //yellowArr의 첫번째 인덱스의 데이터를 data2에 저장

yellowArr.push(data2); //data2에 저장된 데이터를 yellowArr 배열의 마지막 인덱스에 저장
console.log(yellowArr);

yellowArr.unshift(data1); //data1에 저장된 데이터를 yellowArr 배열의 가장 앞쪽 인덱스에 저장
console.log(greenArr);

document.write("<br><hr><br>");


//map() 예제
let numA = [ 2, 3, 4, 5, 6];

numA = numA.map(function(element) {
    return element * 3;
});
document.write(numA,"<br>");