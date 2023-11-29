let addNum = 0;

let auto = setTimeout (function() {
    addNum++;
    console.log(addNum);
}, 1000);

console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);

let url = "https://naver.com"
location.hash = url
