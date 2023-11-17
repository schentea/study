let height = prompt("당신의 신장을 입력하세요.", 168);
let weight = prompt("당신의 체중을 입력하세요.", 68);
let averageWeight = parseInt((height - 100) * 0.9);
let minus;
let str;

document.write(`당신의 신장은 ${height}cm, 체중은 ${weight}kg입니다. <br>`);
document.write(`적정 체중은 ${averageWeight}kg입니다. <br>`);

result = ( weight > averageWeight) ? "적정 체중을 초과했고," : "적정 체중이거나 미달입니다.";

if(weight > averageWeight){
    minus = weight - averageWeight;
    str = `현재 적정 체중에서 ${minus}kg만큼 초과했습니다.`;
    document.write(`당신은 ${result} <br> ${str}`);
}
else { 
    document.write(`당신은 ${result}`);
}

