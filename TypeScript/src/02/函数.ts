/**
 * 函数
 */
function add(x: number, y: number): number {
  return x + y
}
// 完整的函数类型
let add2: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

// 定义函数的接口
interface UIElement {
  addClickListener(onClick: (this: void, e: Event) => void): void
}

class Handle {
  type: string = ''
  onClickBad = (e: Event) => {
    this.type = e.type
  }
}
let h = new Handle()
let uielement: UIElement = {
  addClickListener() {

  }
}
uielement.addClickListener(h.onClickBad)

// 函数的重载
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x: {suit: string, card: number}[] | number): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  // Otherwise just let them pick the card
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCard(myDeck)]
alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)

// 泛型函数
function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>('myidentity')
let output1 = identity<number>(1)
let output2 = identity<boolean>(true)
