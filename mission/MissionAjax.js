fetch("https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=bYVOE%2BXIkipfMEKZAZsYVf%2Fl66z1qpQnYsl8ERRK2XPYL9dc%2B9zIK7EF4PYYHvkJ%2BT%2BzmHG%2BlRrRA3ZG7C8%2Fxw%3D%3D")
    .then(reponse => reponse.json())
    .then(json => {
        const table = document.querySelector("#test");
        for(let i = 0; i<json.data.length; i++){
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.innerHTML = [i + 1];
            tr.appendChild(td1);

            const td2 = document.createElement("td");
            td2.innerHTML = json.data[i].상호;
            tr.appendChild(td2);

            const td3 = document.createElement("td");
            td3.innerHTML = json.data[i].전화번호;
            tr.appendChild(td3);

            const td4 = document.createElement("td");
            td4.innerHTML = json.data[i].도로명주소;
            tr.appendChild(td4);

            const td5 = document.createElement("td");
            td5.innerHTML = json.data[i].업태;
            tr.appendChild(td5);
            
            table.appendChild(tr);
        }
    })