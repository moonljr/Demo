"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myobj = { size: 10, label: 'Size 10 Object' };
printLabel(myobj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 20 };
// p1.x = 5  报错 只读属性不可修改
// // 泛型只读数组
// let a: number[] = [1,2,3,4]
// let ro: ReadonlyArray<number> = a
