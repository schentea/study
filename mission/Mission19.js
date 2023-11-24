let text = new String("Wikipedia is a gree online encyclopedia");
//1
let t = text.split(" ");

document.write(t[0] + " " + t[5], "<br>");


//2
let text2 = text.replace("online", "offline");

let t2 = text2.split(" ");

document.write(t2[4], " ");
document.write(t2[5], "<br>");

//3
document.write(text.substr(0, 10) + "...");
  
