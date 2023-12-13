fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=8d3023a50a87050e9719b14e5a0a61ab")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const div = document.querySelector("#container");
        const ul = document.createElement("ul");
        data.data.results.map((item, index) => {
            console.log(item.name)
            console.log(index)
            let li = document.createElement("li");
            li.classList.add("marvel-li");
            li.innerHTML = item.name;
            let img = document.createElement("img");
            img.classList.add("imgStyle")
            img.setAttribute("src", item.thumbnail.path + "." + item.thumbnail.extension);
            li.appendChild(img);    
            ul.appendChild(li);
            
        })
        div.appendChild(ul);
    })