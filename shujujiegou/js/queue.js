// 队列

class Queue {
  static items;
  constructor() {
    this.items = []
  }
  enqueue(el) {
    this.items.push(el)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.join(' ')
  }

}

const queue = new Queue()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
// console.log('queue', queue.toString());
// queue.dequeue()
// console.log('queue', queue.toString());
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.front())
// 面试题 击鼓传花
function passGame(names, num) {
  const queue = new Queue()
  names.forEach(el => {
    queue.enqueue(el)
  });

  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  console.log(queue.toString())
  return names.indexOf(queue.front())
}

let names = ['lily', 'lucy', 'tom', 'lilei', 'why']
console.log('passGame(names, 3)', passGame(names, 3))