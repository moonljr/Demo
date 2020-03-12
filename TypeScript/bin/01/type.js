"use strict";
// boolean
var isDone = true;
// number
var decliteral = 20; // 10进制
var hexliteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
// string
var xiaomingname = "bob";
// Array
var list = [1, 2, 3, 4]; // 数字类型的数组
var list2 = [1, 2, 3]; // 泛型数组
// 元组
var x;
x = ['hello', 10];
// 注意元组越界  3.1版本以后元组不能再越界
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// 通过索引反查
var colorName = Color[2];
// any
var str = 1;
str = 'qwe';
str = true;
str = [1, 2, 3];
var arr = [1, '2', false];
// void
function warnUser() {
    console.log('this is my waring messge');
}
var un = undefined;
// undefined
var u = undefined;
var n = null;
// 联合类型
var a = 1;
a = 'string';
// never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('something failed');
}
// 返回never的函数必须存在无法达到的终点
function inifiniteLoop() {
    while (true) {
    }
}
create({ a: 'string', b: 'tom' });
create(null);
// 类型断言
var someValue = 'this is a string';
// 类型断言的第一种方法
var strLength = someValue.length;
// 类型断言的第二种方法
strLength = someValue.length;
