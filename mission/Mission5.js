let promptDay = prompt("요일을 확인하고 싶은 날짜를 입력해주세요",2023-11-20);
let tempData = new Date(promptDay);

let theDay = tempData.getDay();

switch(theDay) {
    case 0 : 
        document.write("일요일 입니다.");
        break;
    case 1 : 
        document.write("월요일 입니다.");
        break;
    case 2 : 
        document.write("화요일 입니다.");
        break;
    case 3 : 
        document.write("수요일 입니다.");
        break;
    case 4 : 
        document.write("목요일 입니다.");
        break;
    case 5 : 
        document.write("금요일 입니다.");
        break;
    case 6 : 
        document.write("토요일 입니다.");
        break;
}