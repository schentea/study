let arr1 = ["사과", "배", "포도", "귤"];
let arr2 = ["밤", "오이", "상추"];

//1
arr1[4] = "수박";
document.write(arr1);

document.write("<br><hr><br>");

//2
arr1 = arr1.concat(arr2);
document.write(arr1);

document.write("<br><hr><br>");

//3
arr1.sort();
document.write(arr1);

document.write("<br><hr><br>");

//4
arr1.pop();
document.write(arr1);

document.write("<br><hr><br>");

//5
arr1.splice(4,1,"치킨","피자");
document.write(arr1);

//map(), foreach(), filter(), reduce()
//map과 foreach의 다른점
//callback 함수가 무엇인지
