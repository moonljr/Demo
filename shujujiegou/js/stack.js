// 栈
class Stack {
  static items
  constructor() {
    this.items = []
  }

  push(el) {
    this.items.push(el)
  }
  pop() {
    return this.items.pop()
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }

  toString() {
    return this.items.join(' ')
  }
}
const s = new Stack()
s.push(10)
s.push(100)
s.push(90)
console.log('s', s.toString())
s.pop()
console.log('s', s.toString())
console.log('s', s.peek())
console.log('s', s.isEmpty())
console.log('ss', s.size())
s.clear()
console.log('sss', s.isEmpty())

function dec2bin(dec) {
  let stack = new Stack()

  while (dec > 0) {
    stack.push(dec % 2)
    dec = Math.floor(dec / 2)
  }
  let binstring = ''
  while (!stack.isEmpty()) {
    binstring += stack.pop()
  }
  return binstring
}
console.log('dec2bin', dec2bin(100))
