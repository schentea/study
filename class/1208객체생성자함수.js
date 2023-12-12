function CheckWeight(name,height,weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = function() {
        let str = "";
        str += `이름 : ${this.userName}, `;
        str += `키 : ${this.userHeight}, `
        str += `몸무게 : ${this.userWeight} <br>`
        return str;
    }
    
    this.getResult = function() {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight){
            return "정상 몸무게 입니다."
        } 
        else if (this.userWeight < this.minWeight) {
            return "정상 몸무게 보다 비밀입니다."
        }
        else {
            return "정상 몸무게보다 초과입니다."
        }
    }
}

let jang = new CheckWeight("장보리", 166, 62);
let park = new CheckWeight("박달재", 180, 88);
console.log(jang);
console.log(park);

document.write(jang.getInfo(),"<br>");
document.write(jang.getResult());