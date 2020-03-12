// 数组结构
let input: number[] = [1, 2]
let [first, second] = input

// 参数结构
function f1([first, second]: number[]) {
  console.log(first)
  console.log(second)
}

f1(input)
// 数组解构的另外两种方式
let [three, ...rest] = [1,2,3,4]
console.log(three) // 1
console.log(rest) // [2,3,4]

let [ , two, , four] = [1,2,3,4]
console.log(two)
console.log(four)

// 对象解构
let o = {
  d: 'foo',
  b: 12,
  e: 'bar'
}
let { d, b, e} = o

// 数组展开
let arrone = [1,2,3]
let arrtwo = [4,5,6]
let arrtotal = [0, ...arrone, ...arrtwo]

// 对象展开
let objone = {a: '', b: 1, c: true}
let objtwo = {d: '', e: 2, f: false}
let objtotal = {g: 'g', ...objone, ...objtwo}