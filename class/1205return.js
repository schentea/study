function testAvg(arrData) {
    let sum = 0;
    for (let i = 0; i < arrData.length; i++) {
        sum += Number(prompt(arrData[i] + "점수는?", "0"));
    }

    let avg = sum / arrData.length;
    return avg;
}

let arrSubject = [ "국어", "수학" ];
let result = testAvg(arrSubject);

document.write(`평균 점수는 ${result}점 입니다. <br>`);

let num = 1;

function gallery(direct) {
    if(direct) {
        if(num === 5) return;
        num++;
    }
    else {
        if(num === 1) return;
        num--;
    }

    let imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "../image/eximage" + num +".png");
}
