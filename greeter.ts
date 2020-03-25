// 第一个ts文件

/* function greeter(person: string) {
    return "hello, " + person

}

let user = "Jane User";

document.body.innerHTML = greeter(user); */

// 接口
/* interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user); */

// 类

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student('Jane', "M.", "User")
document.body.innerHTML = greeter(user)
