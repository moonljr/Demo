## typescript

### 类型
```ts
Undefinde
string
    let str: string = 'test'
number
    let age: number = 18
boolean
    let b: boolean = true
enum 枚举类型
    enum REN {nan='男人', nv='女人', yao='妖'}
    取值  REN.yao  // 妖
any  任意类型
    let a: any = 'asas'
    let b: any = 121
    let c: any = true
null 类型  空类型
```
### 函数
```ts
// stature?  ?表示可选参数 可传 可不传  sg: number=180 默认值传参
function searchXiaoJieJie(age: number, stature?: string, sg: number=180): sring {
    return `找到了${age}岁的小姐姐`
}
let age: number = 18
let result: string = searchXiaoJieJie(age)
```
