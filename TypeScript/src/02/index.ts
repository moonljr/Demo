// var let const 的区别
/**
 * var 变量提升 会在作用域的最上边定义 变量 = undefined
 * let 不会变量提升
 * const 定义一个常量
 */
var num: number = 10
let num1: number = 100


function f() {
  var a: number = 10
  return function g() {
    var b = a + 1
    return b
  }
}