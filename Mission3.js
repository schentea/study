let orderCof = prompt("어떤 종류의 커피를 주문하시겠습니까? [ 에스프레소 , 아메리카노, 카페라떼 ]", "아메리카노");
let orderSize = prompt("커피 사이즈를 선택하세요 [ 작은 사이즈 , 중간 사이즈, 큰 사이즈 ]", "중간 사이즈");

if(orderCof === "에스프레소") {
    if(orderSize === "작은 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 2000원입니다.`);
    }
    else if(orderSize === "중간 사이즈"){
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 2500원입니다.`);
    }
    else if(orderSize === "큰 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 3000원입니다.`);
    }
    else {
        alert("잘못 주문하셨습니다.");
        location.reload();
    }
}
else if(orderCof === "아메리카노") {
    if(orderSize === "작은 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 2500원입니다.`);
    }
    else if(orderSize === "중간 사이즈"){
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 3000원입니다.`);
    }
    else if(orderSize === "큰 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 3500원입니다.`);
    }
    else {
        alert("잘못 주문하셨습니다.");
        location.reload();
    }
}
else if(orderCof === "카페라떼") {
    if(orderSize === "작은 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 3000원입니다.`);
    }
    else if(orderSize === "중간 사이즈"){
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 3500원입니다.`);
    }
    else if(orderSize === "큰 사이즈") {
        document.write(`당신이 주문한 커피는 ${orderCof}이고 ${orderSize}의 가격은 4000원입니다.`);
    }
    else {
        alert("잘못 주문하셨습니다.");
        location.reload();
    }
}
else { 
    alert("잘못 주문하셨습니다.");
    location.reload();
}