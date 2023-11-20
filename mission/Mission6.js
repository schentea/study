let fruit = prompt("종아하는 과일을 선택해 주세요. [ 사과 , 바나나, 오렌지 중 택 1 ]", "사과");

switch(fruit) {
    case "사과" :
        document.write("사과를 선택하셨습니다.");
        break;
    case "바나나" :
        document.write("바나나를 선택하셨습니다.");
        break;
    case "오렌지" :
        document.write("오렌지를 선택하셨습니다.");
        break;
    default : 
        alert("다른 과일을 선택하셨거나 잘못된 입력입니다.");
        location.reload();
}