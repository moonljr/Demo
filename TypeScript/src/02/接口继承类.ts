// 接口继承类

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): any
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 当使用接口继承类的时候 如果这个类不是 定义的接口继承类的子类 是没有办法使用这个接口继承类中的私有属性的
// class Imagec implements SelectableControl {
//   select() {}
// }