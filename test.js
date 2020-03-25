var message = "第一个typescript小例子";
console.log(message);
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.name = function () {
        console.log('类的一个方法');
    };
    return People;
}());
var girl = new People();
console.log(girl.age);
// 方法
girl.name();


