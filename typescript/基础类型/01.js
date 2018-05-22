//布尔值
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串
var name1 = "bob";
//模板字符串
var age = 37;
var sentence = "Hello, my name is " + name1 + ". I will be " + (age + 1) + " years old next month";
//数组
var list = [1, 2, 3];
//数组泛型
//let list: Array<number> = [1, 2, 3];
//元组 Tuple
var x;
x = ['hello', 10];
//x = [10, 'hello'];
console.log(x[0].substr(1));
//console.log(x[1].substr(1));
//当访问一个越界的元素，会使用联合类型替代
x[3] = 'world';
console.log(x[5].toString());
//x[6] = true;
//枚举
/*enum Color {Red, Green, Blue}
let c: Color = Color.Green;*/
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
/*enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
alert(colorName);*/
//Any
/*let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
prettySure = 'haha';
prettySure.toFixed();*/
/*let list1: any[] = [1, true, 'haha'];
list1[1] = 200;*/
//Void
/*function warnUser(): void {
    alert('This is my warning message');
}
//let unusable: void = true;
let unusable: void = null;
unusable = undefined;
//unusable = 'aa';*/
//Null和Undefined
var u = undefined;
var n = null;
//u = 'haha';
//n = 'hehe';
//Never
//返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//推断的返回值类型为never
function fail() {
    return error('Something failed');
}
//返回never的函数必须存在无法到达的终点
function infiniteLoop() {
    while (true) {
    }
}
//类型断言
//类型断言有两种方式。其一是尖括号语法
/*let someValue: any = 'this is a string';
someValue = null;
let strLength: number = (<string>someValue).length;*/
//另一种为as语法
var someValue = 'this is a string';
someValue = undefined;
var strLength = someValue.length;
//# sourceMappingURL=01.js.map