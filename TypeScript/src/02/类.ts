// 类的基本使用

/**
 * 类的修饰符
 * private 私有属性 私有属性在外部是无法访问的 只可以在类的内部使用
 * public 公有属性  所有属性和方法默认都是公有属性
 * protected 私有属性 外部无法访问 但是在子类中可以访问
 * readonly 只读属性
 */
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `hello ${this.greeting}`
  }

}

let greeter = new Greeter('world')

greeter.greet()


class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} move ${distance}m`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5) {
    console.log('Slithring.....')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 45) {
    console.log('Galloping....')
    super.move(distance)
  }
}

let sam = new Snake('Sammy')

let tom: Animal = new Horse('Tommy')

sam.move()

tom.move(55)

// class Dog extends Animal {
//   brak() {
//     console.log(`woof! woof!`)
//   }
// }

// let dog = new Dog('dog')
// dog.brak()
// dog.move(10)

/**
 * 类的存取器
 * get fullName 在获取 fullName这个属性的时候会调用该函数
 * set fullName 在设置 fullName 这个属性的时候会调用该函数
 */
const passCode = 'secret passcode'
 class Emplyoee {
   private _fullname: string = ''
   get fullName(): string {
     return this._fullname
   }

   set fullName(newName) {
     if (passCode && passCode === 'secret passcode') {
       this._fullname = newName
     } else {
       console.log('Error: 没有权限更新姓名')
     }
   }
 }

 let emplyoee = new Emplyoee()
 emplyoee.fullName = 'Bob Smith'
if (emplyoee.fullName) {
  console.log(emplyoee.fullName)
}

/**
 * 静态属性
 * static 通过 Grid.origin.x 只可以通过类.获取到静态属性  不可以通过实例 this去获取静态属性
 */
class Grid {
  static origin = {x: 0, y: 0}
  scale: number
  constructor(scale: number) {
    this.scale = scale
  }

  claculateDistanceFromorigin(point: {x: number, y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}