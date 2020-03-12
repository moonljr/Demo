"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 数组结构
var input = [1, 2];
var first = input[0], second = input[1];
// 参数结构
function f1(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f1(input);
// 数组解构的另外两种方式
var _a = [1, 2, 3, 4], three = _a[0], rest = _a.slice(1);
console.log(three); // 1
console.log(rest); // [2,3,4]
var _b = [1, 2, 3, 4], two = _b[1], four = _b[3];
console.log(two);
console.log(four);
// 对象解构
var o = {
    d: 'foo',
    b: 12,
    e: 'bar'
};
var d = o.d, b = o.b, e = o.e;
// 数组展开
var arrone = [1, 2, 3];
var arrtwo = [4, 5, 6];
var arrtotal = __spreadArrays([0], arrone, arrtwo);
// 对象展开
var objone = { a: '', b: 1, c: true };
var objtwo = { d: '', e: 2, f: false };
var objtotal = __assign(__assign({ g: 'g' }, objone), objtwo);
