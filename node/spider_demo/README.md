### node爬虫

#### 爬虫的实现步骤
- 发送http请求，获取整个网页的内容
- 通过 cheerio库对网页内容进行分析
- 提取img标签的src属性
- 使用download库进行图片批量下载

#### 发送http请求
```javascript
// 引入http模块
const http = require('http')
// 创建请求对象(此时 未发送请求)
let request = http.request('http://web.itheima.com/teacher.html', function (res) {
    // 异步响应
    console.log('res', res)
    let chunks = []
    // 监听data事件，获取传递过来的片段
    // 拼接数据片段
    res.on('data', chunk => {
        chunks.push(chunk)
    })
    // 监听end事件 获取数据完毕是触发
    res.on('end', () => {
        // 合并数据
        console.log(Buffer.concat(chunks).toString('utf-8'))
    })
})
// 将发送请求
 request.end();
```

#### cherrio库简介
> 这是一个核心API按照jquery来设计的 专门在服务器上使用 一个微小 快速和优雅的实现

```javascript
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
```

#### 使用download库进行图片批量下载

```javascript
// 批量下载图片
Promise.all(imgArrs.map(x => download(x, 'dist'))).then(()=> {
    console.log('file downloaded!')
})

```