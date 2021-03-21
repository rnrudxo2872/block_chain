class PersonInfo {
    constructor(name, age, rer) {
        this.personName = name;
        this.age = age;
        this.rer = rer;
    }
}
let myinfo = new PersonInfo("Koo", 26, "개발자");
let temp = (obj) => {
    return (`hellow, he name is ${obj.personName} old ${obj.age} ${obj.rer}`);
};
console.log(temp(myinfo));
//# sourceMappingURL=index.js.map