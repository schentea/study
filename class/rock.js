document.write("<h1>컴퓨터와 가위 바위 보 하기</h1>");
document.write("<br><br>");

let game = prompt("가위, 바위, 보 중 선택하세요?", "가위");
let gameNum;
switch(game) {
    case "가위" :
        gameNum = 1;
        break;
    case "바위":
        gameNum = 2;
        break;
    case "보" :
        gameNum = 3;
        break;
    default : 
        alert("잘못 작성했습니다.");
        location.reload();
}

let com = Math.ceil(Math.random()*3);

document.write(`<img src = "./image/${com}.jpg">`);
document.write("<br><br>");

if(gameNum === com) {
    document.write("비기셨습니다.");
}
else if (gameNum != com){
    if(gameNum === 1){
        if(com === 2) {
            document.write("패배하셨습니다.");
        }
        else if(com ===3) {
            document.write("승리하셨습니다.");
        }
    }
    else if(gameNum === 2) {
        if(com === 1) {
            document.write("승리하셨습니다.");
        }
        else if(com === 3) {
            document.write("패배하셨습니다.");
        }
    }
    else if(gameNum === 3) {
        if(com === 2) {
            document.write("승리하셨습니다.");
        }
        else if(com === 1) {
            document.write("패배하셨습니다.");
        }
    }
}

//if((gameNum === 1 && com === 2) || (gameNum === 2 && com === 3) || (gameNum === 3 && com === 1))
//document.write("패배하셨습니다.")
//else if((gameNum === 1 && com === 3) || (gameNum === 2 && com === 1) || (gameNum === 3 && com === 2))
//document.write("승리하셨습니다")
//else if( gameNum === com )
//document.write("비기셨습니다.")