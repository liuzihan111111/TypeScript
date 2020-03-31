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


// 模板字符串
let name: string = `Gene`;
let age: number = 34;

let sentence: string = `<br \> Hello,my name is ${name},I'll be ${age + 1} years old next month`

document.body.innerHTML += sentence


// 数组
// 
let list1: number[] = [1, 2, 3, 4]

// 数组泛型，Array<元素类型>
let list2: Array<number> = [1, 2, 3]


// 元组
let x: [string, number];
x = ['hello', 10]
// x=[10,10], // 报错
console.log(x[0].substr(1))

 // console.log(x[1].substr(1))  // 报错