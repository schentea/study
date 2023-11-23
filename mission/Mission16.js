let today = new Date();

let theDate = new Date(2024,4,30);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 1000 * 60 *24));

document.write(`종료일까지 ${result}일 남았습니다.`);