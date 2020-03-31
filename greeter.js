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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Jane', "M.", "User");
document.body.innerHTML = greeter(user);
// 模板字符串
var name = "Gene";
var age = 34;
var sentence = "<br > Hello,my name is " + name + ",I'll be " + (age + 1) + " years old next month";
document.body.innerHTML += sentence;
