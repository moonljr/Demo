// 引入http模块
const http = require('http')
const cheerio = require('cheerio')
const download = require('download')

const HOST = 'http://web.itheima.com/'
// 创建请求对象(此时 未发送请求)
let request = http.request(HOST + 'teacher.html', function(
  res
) {
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
    // console.log(Buffer.concat(chunks).toString('utf-8'))
    let htmlStr = Buffer.concat(chunks).toString('utf-8')
    let $ = cheerio.load(htmlStr)
    let imgArrs = []
    console.log($('.tea_main .tea_con .li_img > img').length)
    // 优化代码
    // $('.tea_main .tea_con .li_img > img').each((index, item) => {
    //   // console.log($(item).attr('src'))
    //   imgArrs.push(HOST + $(item).attr('src'))
    // })
    //  需要注意 下载的地址如果有中文 需要使用encodeURI 转义
    imgArrs = Array.prototype.map.call(
      $('.tea_main .tea_con .li_img > img'),
      item => HOST + encodeURI($(item).attr('src'))
    )
    console.log('imgag', imgArrs)
    Promise.all(imgArrs.map(x => download(x, 'dist'))).then(()=> {
      console.log('file downloaded!')
    })

  })
})
// 将发送请求
request.end()
