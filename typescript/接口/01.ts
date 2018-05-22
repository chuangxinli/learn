//接口初探
function printLabel(labelledObj: {label: string}){
    console.log(labelledObj.label);
}
let myObj = {
    size: 10,
    label: 'size 10 object'
};
printLabel(myObj);
//类型检查器不会去检查属性的顺序，只要相应的属性存在 并且类型也是对的就可以
interface labelledValue {
    label: string;
}
function printLabel1(labelledObj: labelledValue){
    console.log(labelledObj.label);
}
let myObj1 = {
    size: 10,
    label: 'size 10 object'
};
printLabel1(myObj1);

//可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
