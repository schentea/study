function calculate(x, y, z) {
    if(isNaN(x) || isNaN(y)){
        alert("제대로 입력하세요.");
        location.reload();
    }
    else {
        if(z === "+"){
            document.write(`${x} ${z} ${y} =  ${x+y}`);
        }
        else if (z === "-"){
            document.write(`${x} ${z} ${y} = ${x-y}`);
        }
        else if (z === "*"){
            document.write(`${x} ${z} ${y} = ${x*y}`);
        }
        else if (z === "/"){
            document.write(`${x} ${z} ${y} = ${x/y}`);
        }
        else if (z === "%"){
            document.write(`${x} ${z} ${y} = ${x%y}`);
        }
        else {
            alert("제대로 입력하세요")
            location.reload();
        }
    }
}

let x = parseInt(prompt("첫번째 숫자를 입려하세요", 1));
let y = parseInt(prompt("두번째 숫자를 입력하세요", 2));
let z = prompt("연산자를 입력하세요", "+");


calculate(x, y, z);