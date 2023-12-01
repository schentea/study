let userGuGu = parseInt(prompt("출력할 구구단 단수를 입력해주세요 (2~9)", 9));

gugudan();

function gugudan () {
    if( userGuGu < 2 || userGuGu > 9 || isNaN(userGuGu)) {
        alert("제대로 입력하세요");
        location.reload();
    }
    else {
        document.write(`입력한 구구단 : ${userGuGu}단 <br>`)
        for(let j = 1; j<=9; j++){
            let result = userGuGu*j;
            document.write(`${userGuGu}*${j} = ${result}<br>`)
        }
    }
}
