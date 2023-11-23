let me = {
    name : "최현기",
    age : 24,
    email : "schentea@gmail.com",
    hobby : "스노우보드",
    info : function() {
        document.write(`안녕하세요 제 이름은 ${this.name}입니다.<br>`);
        document.write(`나이는 ${this.age}이고 취미는 ${this.hobby}입니다.<br>`);
    }
}

me.info();

document.write("<br><hr><br>")

function Person(name, age, email, hobby) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.hobby = hobby;
    this.info = function() {
        document.write(`이름은 ${this.name}이고, 나이는 ${this.age}입니다.<br>`);
        document.write(`취미는 ${this.hobby}입니다.`);
    }
}

const choi = new Person("최현기",24,"schentea@gmail.com","스노우보드");
choi.info();