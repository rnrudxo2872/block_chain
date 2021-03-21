class PersonInfo{
    public personName: string;
    public age: number;
    public rer: string;

    constructor(name:string,age:number,rer?:string){
        this.personName = name;
        this.age = age;
        this.rer = rer;
    }
}

let myinfo = new PersonInfo("Koo",26,"개발자");

let temp = (obj:PersonInfo):string =>{
    return(`hellow, he name is ${obj.personName} old ${obj.age} ${obj.rer}`);   
}

console.log(temp(myinfo));