// 1
const profile = document.getElementById("profile");
profile.innerHTML = profile.innerHTML.toUpperCase();

const skills = document.getElementById("skills");
skills.innerHTML = skills.innerHTML.toUpperCase();

const gallery = document.getElementById("gallery");
gallery.innerHTML = gallery.innerHTML.toUpperCase();

//2
const article = document.getElementById("test");
let article1 = article.innerText.split(" ");
let result = "";


for(let i = 0; i < article1.length; i++){
    if(article1[i] === "KyungBuk" && article1[i+1] === "National" && article1[i+2] === "University,"){
        article1.splice(i, 3, "Daegu" , "University");
    }
    result += article1[i] + " ";
}

article.innerText = result;

//3
const skills2 = ["a", "b", "c", "d", "e", "f"];

for(let i = 0; i < skills2.length; i++) {
    const skillid = skills2[i];
    const skill = document.getElementById(skillid);

    if(skill){
        skill.innerHTML = skill.innerHTML.substring(0,11);
    }
}



 