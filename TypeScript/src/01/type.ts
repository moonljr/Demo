// boolean
let isDone: boolean = true

// number
let decliteral: number = 20 // 10进制
let hexliteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

// string
let xiaomingname: string = `bob`

// Array
let list: number[] = [1,2,3,4] // 数字类型的数组
let list2: Array<number> = [1,2,3] // 泛型数组

// 元组
let x: [string, number]
x = ['hello', 10]
// 注意元组越界  3.1版本以后元组不能再越界

// 枚举
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

let c: Color = Color.Green
// 通过索引反查
let colorName = Color[2]

// any
let str: any = 1
str = 'qwe'
str = true
str = [1,2,3]

let arr: any[] = [1, '2', false]

// void
function warnUser(): void {
  console.log('this is my waring messge')
}

let un: void = undefined


// undefined

let u: undefined = undefined
let n: null = null

// 联合类型
let a: number | string = 1
a = 'string'

// never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}
// 推断的返回值类型为never
function fail() {
  return error('something failed')
}
// 返回never的函数必须存在无法达到的终点
function inifiniteLoop(): never {
  while (true) {

  }
}

// object
// declare 表示声明 这里表示声明一个函数
declare function create(o: object | null): void
create({a: 'string', b: 'tom'})
create(null)

// 类型断言
let someValue: any = 'this is a string'
// 类型断言的第一种方法
let strLength: number = (<string>someValue).length
// 类型断言的第二种方法
strLength = (someValue as string).length