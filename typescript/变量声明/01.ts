//作用域规则
/*function f(shouldInitialize: boolean) {
    if(shouldInitialize) {
        var x = 10;
    }
    console.log(x);
}
f(true);
f(false);

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for(var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for(var i=0;i<currentRow.length;i++){
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1,2,3],[4,5,6],[7,8,9]]));

//捕获变量怪异之处
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    },100*i);
}

for(var i=0;i<10;i++){
    (function(i){
        setTimeout(function(){
             console.log(i);
        },100*i);
    })(i)
}*/

//let声明
/*let hello = 'Hello';
function f(input: boolean){
    let a = 100;
    if(input){
        let b = a + 1;
        return b;
    }
    return b;
}*/

/*try {
    throw 'oh no!';
}
catch (e) {
    console.log('Oh well');
}
console.log(e);*/

// console.log(a);
// let a;

/*function foo() {
    return a;
}
//ES2015中不能再'a'被声明前调用'foo'
//运行时会抛出错误,但是现今TypeScript是不会报错的
foo();
let a;*/

//重定义屏蔽
/*
let x = 10;
let x = 20;
*/

/*function f(x){
    let x = 100;
}*/

/*function g(){
    let x = 100;
    var x = 100;
}*/

/*function f(condition, x){
    if(condition){
        let x = 100;
        return x;
    }
    return x;
}
f(false, 0);
f(true, 0);*/

/*function sumMatrix(matrix: number[][]){
    let sum = 0;
    for(let i=0;i<matrix.length;i++){
        var currentRow = matrix[i];
        for(let i=0;i<currentRow.length;i++){
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1,2,3],[4,5,6]]));*/

/*function theCityThatAlwaysSleeps(){
    let getCity;
    if(true){
        let city = 'Seattle';
        getCity = function(){
            return city;
        }
    }
    return getCity();
}*/

/*for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },100*i);
}*/

/*const numLivesForCat = 9;
const kitty = {
    name: 'Aurora',
    numLives: numLivesForCat
};*/
/*kitty = {
    name: 'Danielle',
    numLives: numLivesForCat
};*/
/*kitty.name = 'Rory';
kitty.name = 'Kitty';
kitty.name = 'Cat';
kitty.numLives--;*/

//解构
//解构数组
//let input = [1,2];
/*let [first, second] = input;
console.log(first);
console.log(second);*/

/*function f([first, second]: [number, number]){
    console.log(first);
    console.log(second);
}
f(input);*/

/*let [first,...rest] = [1,2,3,4];
console.log(first);
console.log(rest);*/

/*let [first] = [1,2,3,4];
console.log(first);

let [, second, ,four] = [1,2,3,4];
console.log(second);
console.log(four);*/

//对象解构
let o = {
    a: 'foo',
    b: 22,
    c: 'zxc'
};
/*let {a, c} = o;
console.log(a);
console.log(c);*/
/*let a,c;
({a, c} = {a: 'foo', c: 'zxc'});*/

/*let {a, ...passthrough} = o;
let total = passthrough.b + passthrough.c.length;
console.log(total);*/

//属性重命名
/*let { a: newName1, b: newName2} = o;
console.log(newName1);
console.log(newName2);*/

//let { a, b}: {a: string, b: string} = o;

//默认值
function keepWholeObject(wholeObject: {a: string, b?: number}){
    let {a, b = 1001} = wholeObject;
}

//函数声明
/*type  C = {a: string, b?: number}
function f({a, b}: C): void{
    
}

function f1({a, b} = {a: '', b: 0}): void{
    console.log(a + '--' + b);
}
f1();

function f2({a, b=0} = {a: ''}): void{
   console.log(a + '~~~~~~' + b);
}
f2({a: 'yes'});
f2();
f({});*/

//展开
let first = [1,2];
let second = [3,4];
let bothPlus = [0,...first,...second,5];

let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy'};
let search = {...defaults,food: 'rich'};

console.log(bothPlus);
console.log(search);

class C {
    p = 12;
    m() {}
}
let c = new C();
let clone = {...c};
clone.p;
//对象展开还有其它一些意想不到的限制。首先，它仅包含对象自身的可枚举属性。大体上是说当你展开一个对象实例时，你会失去其方法
//其次，TypeScript编译器不允许展开泛型函数上的类型参数，这个特性会在TypeScript的未来版本中考虑实现.
//clone.m();






