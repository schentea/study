let phoneNum = "010-2345-1234";
let result_1 = phoneNum.substring(0,9);
document.write(result_1, "**** <br>");

let imgSrc = "images/bnt_out.jpg";
let result2 = imgSrc.replace('out','over');
document.write(result2,"<br>");

let menu = ["짜장면", "돈까스", "된장국", "김치찌개", "회덮밥"];
let menuNum = Math.floor(Math.random()*menu.length);
let result = menu[menuNum];
document.write(result);

