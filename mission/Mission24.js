setInterval(function() {
    let ho = new Date().getHours();
    let mi = new Date().getMinutes();
    let se = new Date().getSeconds();
    document.getElementById("time").innerHTML = `현재 시간은 ${ho}시 ${mi}분 ${se}초 입니다.`;
},1000)