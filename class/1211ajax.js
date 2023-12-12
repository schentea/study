fetch("https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=bYVOE%2BXIkipfMEKZAZsYVf%2Fl66z1qpQnYsl8ERRK2XPYL9dc%2B9zIK7EF4PYYHvkJ%2BT%2BzmHG%2BlRrRA3ZG7C8%2Fxw%3D%3D") //fetch를 사용해 데이터를 불러올 수 있음
    .then(reponse => reponse.json())
    .then(json => {
        const foods = document.querySelector('#foods');
        const ul = document.createElement("ul"); // ul태그 생성
        for(let i = 0; i<json.data.length; i++) {
            const li = document.createElement("li"); //li 태그 생성 후 변수 li에 저장
            li.innerHTML = json.data[i].상호;
            ul.appendChild(li);
        }
        foods.appendChild(ul);
    })
    