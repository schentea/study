let text = "Hello World";

//1-1
document.write(text.length,"<br>");

//1-2
let text2 = text.replace("o","");
document.write(text2.toLowerCase(),"<br>");

let fruit = "사과, 바나나, 딸기"
fruit = fruit.split(", ");
document.write(fruit,"<br>");

//2-1
fruit.splice(2,1,"수박","포도");
document.write(fruit,"<br>");

for(let i = 0; i <= fruit.length; i++){
    if(fruit[i] === "바나나"){
        for(let j = 0; j <= fruit.length; j++){
            document.write(fruit[j]);
            if(fruit[j] === "포도"){
                break;    
            }
            document.write(" ");
        }
    }
}


