//接口初探
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: 'size 10 object'
};
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = {
    size: 10,
    label: 'size 10 object'
};
printLabel1(myObj1);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
//# sourceMappingURL=01.js.map