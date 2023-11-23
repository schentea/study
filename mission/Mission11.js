let sum = 0;
let str = " + ";

for(let i = 1; i <= 100; i++) {
    sum += i;
    if(sum > 100) {
        str = " = ";
        document.write(i + str + sum);
        document.write(`<br>현재 sum의 값은 ${sum}이고 1부터 ${i}까지 더했습니다.`);
        break;
    }
    else { 
        document.write(i + str);
    }
}