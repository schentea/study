const testImg = ["test1", "test2", "test3"];


document.getElementById('click').onclick = function clickImg() {
    setTimeout(() => {
        for(let i = 0; i<testImg.length; i++){
            const img2 = testImg[i];
            const img = document.getElementById(img2);
            img.setAttribute("src", "images/gallery0" + (i+1) + ".jpg");
        }
    }, 1000);
}

