let info = navigator.userAgent.toLowerCase();
let osImg = null;

if(info.indexOf('windows') >= 0){
    osImg = "1.jpg";
}
else if(info.indexOf('marcintosh') >= 0) {
    osImg ="2.jpg";
}
else if(info.indexOf('iphone') >= 0) {
    osImg = "3.jpg";
}
else if(info.indexOf('android') >= 0) {
    osImg = "SUB_EXAMPLE.png";
}

document.write("<img src = \"../image/" + osImg + "\">","<br>");

let scr = screen;
let sc_w = scr.width;
let sc_h = scr.height;

document.write(`모니터 해상도 너비 : ${sc_w}px <br>`);
document.write(`모니터 해상도 높이 : ${sc_h}px <br>`);