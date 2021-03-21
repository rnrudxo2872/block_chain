interface PersonInfo{
    personName:string;
    age:number;
    rer:string;
}

let myinfo = {
    personName : "Koo",
    age : 26,
    rer : ""
}

let temp = (obj:PersonInfo):string =>{
    return(`hellow, he name is ${obj.personName} old ${obj.age} ${obj.rer}`);   
}

console.log(temp(myinfo));